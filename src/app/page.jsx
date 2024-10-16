"use client"
import react,{useState , useEffect} from "react";
import About from "@/component/sections/About";
import Banner from "@/component/sections/Banner";
import Blog from "@/component/sections/Blog";
import Consultation from "@/component/sections/Consultation";
import CtaSection from "@/component/sections/CtaSection";
import FaqSection from "@/component/sections/FaqSection";
import Price from "@/component/sections/Price";
import Service from "@/component/sections/Service";
import Testimonial from "@/component/sections/Testimonial";
import Image from "next/image";
import { notFound } from "next/navigation";
import Loader from "@/component/main-layout/Loader";

export default function Home() {
  const URL = "https://script.google.com/macros/s/AKfycbyOJlLpIu1cDi7kt6jrwsHwntyvHtb6WrEI33jiBjTSwAcI_b_ixrSn5CMMPL-SGAKxZw/exec";
  const [bannerData , setBannerData] = useState([]);
  const [aboutData , setAboutData] = useState([]);
  const [serviceData , setServiceData] = useState([]);
  const [price , setPriceData] = useState([]);
  const [review, setReviewData] = useState([]);
  const [blog, setBlogData] = useState([]);
  const [faq, setFaqData] = useState([]);
  const [contact, setContactData] = useState([]);
  const [cta , setCtaData] = useState([])
  const [loading, setLoading] = useState(true);
  const [dataFound, setDataFound] = useState(true);
  
  useEffect(() => {
      const fetchApi = async () => {
          setLoading(true); // Set loading to true when starting to fetch
          try {
              const response = await fetch(`${URL}?sheetName=home`);
              
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
              setServiceData(data[1]);
              setAboutData(data[2]);
              setPriceData(data[3]);
              setReviewData(data[4]);
              setCtaData(data[5]);
              setBlogData(data[6]);
              setFaqData(data[7]);
              setContactData(data[8]);

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

    <main className="page_content">
   
   <Banner data={bannerData}/>
  <Service data={serviceData}/>
  <About data={aboutData}/>
  <Price data={price}/>
 <Testimonial data={review}/>
   <Consultation data={cta}/>
  <Blog data={blog}/> 
  <FaqSection data={faq}/>
  {/* <CtaSection data={contact}/> */}
  </main>
  
  );
}
