"use client"
import Loader from '@/component/main-layout/Loader'
import SimpleBanner from '@/component/main-layout/SimpleBanner'
import Consultation from '@/component/sections/Consultation'
import ContactCard from '@/component/sections/ContactCard'
import ContactForm from '@/component/sections/ContactForm'
import ContactInfo from '@/component/sections/ContactInfo'
import CtaSection from '@/component/sections/CtaSection'
import DetailContent from '@/component/sections/DetailContent'
import Service from '@/component/sections/Service'
import WorkProcess from '@/component/sections/WorkProcess'
import useParseSliceData, { URL } from '@/hooks/useslice'
import { notFound } from 'next/navigation'
import React,{useState ,useEffect} from 'react'
const page = () => {
  const [bannerData, setBannerData] = useState([]);
  const [about, setAboutData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [cta, setCta] = useState([]);
  const [contact, setContact] = useState([]);

  const [loading, setLoading] = useState(true);
  const [dataFound, setDataFound] = useState(true);
  
  useEffect(() => {
      const fetchApi = async () => {
          setLoading(true); // Set loading to true when starting to fetch
          try {
              const response = await fetch(`${URL}?sheetName=service2`);
              
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
              setAboutData(data[1]);
              setServiceData(data[2]);
              setCta(data[3]);
              setContact(data[4]);

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
      return notFound();
  }
  return (
     <main clasName="page_content">    
     <SimpleBanner title={bannerData.heading}/>
     <DetailContent data={about} varient/>
     <Service data={serviceData} bg/>
     <Consultation data={cta}/>
     <ContactCard data={contact} />
    </main>

  )
}

export default page