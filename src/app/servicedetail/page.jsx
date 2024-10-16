"use client"
import SimpleBanner from '@/component/main-layout/SimpleBanner'
import Consultation from '@/component/sections/Consultation'
import ContactInfo from '@/component/sections/ContactInfo'
import DetailContent from '@/component/sections/DetailContent'
import Service from '@/component/sections/Service'
import WorkProcess from '@/component/sections/WorkProcess'
import { URL } from '@/hooks/useslice'
import Loader from '@/component/main-layout/Loader'
import React,{useState ,useEffect} from 'react'
import { notFound } from 'next/navigation'
const page = () => {
  const [bannerData, setBannerData] = useState([]);
  const [about, setAboutData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [workprocess, setWorkProcessData] = useState([]);
  const [cta, setCta] = useState([]);
const [loading, setLoading] = useState(true);
  const [dataFound, setDataFound] = useState(true);


  useEffect(() => {
      const fetchApi = async () => {
        setLoading(true)
          try {
              const response = await fetch(`${URL}?sheetName=service1`);
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
              setAboutData(data[1])
              setServiceData(data[2]);
              setWorkProcessData(data[3])
              setCta(data[4])

              // console.log(db[0].heading)
          } catch (error) {
            setDataFound(false);

              console.error('Error fetching API:');
          }finally {
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
     <DetailContent data={about}/>
     <Service data={serviceData}/>
     <WorkProcess data={workprocess}/>
     <ContactInfo data={cta}/>
    </main>

  )
}

export default page