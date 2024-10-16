"use client";

import SimpleBanner from '@/component/main-layout/SimpleBanner';
import ContactInfo from '@/component/sections/ContactInfo';
import ContactForm from '@/component/sections/ContactForm';
import { URL } from '@/hooks/useslice';
import { useEffect, useState } from 'react';
import Loader from '@/component/main-layout/Loader';
import { notFound } from 'next/navigation';

const Page = () => {
  const [bannerData, setBannerData] = useState({});
  const [contact, setContactData] = useState({});
  const [loading, setLoading] = useState(true);
  const [dataFound, setDataFound] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${URL}?sheetName=contact1`);
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
      } catch (error) {
        console.error('Error fetching API:', error);
        setDataFound(false);
      } finally {
        setLoading(false); // Set loading to false after fetch
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
      <SimpleBanner title={bannerData.heading} />
      <ContactInfo data={contact} />
      <div className="gmap_canvas contact_map">
        <iframe
          className="rounded-0"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          title="Google Map"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </main>
  );
};

export default Page;
