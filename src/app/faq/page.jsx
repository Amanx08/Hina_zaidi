"use client";

import Loader from '@/component/main-layout/Loader';
import SimpleBanner from '@/component/main-layout/SimpleBanner';
import ContactInfo from '@/component/sections/ContactInfo';
import useParseSliceData, { URL } from '@/hooks/useslice';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const [bannerData, setBannerData] = useState({});
  const [faq, setFaqData] = useState({});
  const [cta, setCtaData] = useState({});
  const [loading, setLoading] = useState(true);
  const [dataFound, setDataFound] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${URL}?sheetName=faq`);
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
        setFaqData(data[1]);
        setCtaData(data[2]);
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

  const cardData = JSON.parse(faq.card || "[]");

  return (
    <main className="page_content">
      <SimpleBanner title={bannerData.heading} />
      <section className="faq_section section_space_lg pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="pe-lg-5">
                <div className="section_heading mb-4">
                  <h2 className="section_heading_text mb-0">
                   {faq.heading}
                  </h2>
                </div>
                <div className="accordion" id="faq_accordion">
                  {cardData.map((item, index) => (
                    <div className="accordion-item" key={index}>
                      <div className="accordion-header" id={`heading_${index}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse_${index}`}
                          aria-expanded="false"
                          aria-controls={`collapse_${index}`}
                        >
                          {item.title}
                        </button>
                      </div>
                      <div
                        id={`collapse_${index}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading_${index}`}
                        data-bs-parent="#faq_accordion"
                      >
                        <div className="accordion-body">
                          <p className="m-0">{item.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image_widget text-center">
                <img src={faq.img || "/images/about/about_image_16-min.jpg"} alt="About Image" />
                <div className="image_shape bg_primary_light" />
                <div className="about_video_icon">
                  <a className="video_play_btn popup_video" href="https://www.youtube.com/watch?v=7e90gBu4pas">
                    <i className="fa-duotone fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactInfo data={cta} />
    </main>
  );
};

export default Page;
