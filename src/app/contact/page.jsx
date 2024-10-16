"use client";

import SimpleBanner from '@/component/main-layout/SimpleBanner';
import ContactCard from '@/component/sections/ContactCard';
import ContactForm from '@/component/sections/ContactForm';
import { URL } from '@/hooks/useslice';
import { useEffect, useState } from 'react';
import Loader from '@/component/main-layout/Loader';
import { notFound } from 'next/navigation';
import ImageForm from '@/component/sections/ImageForm';

const Page = () => {
  const [bannerData, setBannerData] = useState({});
  const [contact, setContactData] = useState({});
  const [contactForm, setContactFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [dataFound, setDataFound] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${URL}?sheetName=contact`);
        if (!response.ok) {
          setDataFound(false);
          return;
        }

        const data = await response.json();
        if (!data || data.length === 0) {
          setDataFound(false);
          return;
        }

        setBannerData(data[0]);
        setContactData(data[1]);
        setContactFormData(data[2]);
      } catch (error) {
        console.error('Error fetching API:', error);
        setDataFound(false);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  if (loading) {
    return <main className="page_content"><Loader /></main>;
  }

  if (!dataFound) {
    return notFound(); // Ensure notFound() is defined elsewhere
  }

  return (
    <main className="page_content">
      
      <ImageForm data={contactForm} />
      <ContactCard data={contact} />
     
    </main>
  );
};

export default Page;
