"use client"
import React from 'react'
import useParseSliceData from '@/hooks/useslice';
import { useState , useEffect } from 'react';
const Certificate = ({ data }) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    const [isSlickInitialized, setIsSlickInitialized] = useState(false);
  
    useEffect(() => {
        if (cardData && cardData.length > 0) {
            // Initialize Slick after the data is loaded
            setIsSlickInitialized(true);
            // Call Slick's initialization function
            $('.certificates_carousel').slick({
                dots: true,
    speed: 800,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    centerPadding: '0px',
    prevArrow: ".c3c_arrow_left",
    nextArrow: ".c3c_arrow_right",
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    ]
                // Add any other settings here
            });
        }
    }, [cardData]);
    return (
        <section className="certificate_section section_space_lg pb-0">
            <div className="container">
                <div className="section_heading text-center">
                    <h2 className="section_heading_text"> {heading || "Certificates"}</h2>
                    <p className="section_heading_description mb-0 ">
                        {subheading}
                    </p>
                </div>
                <div className="certificates_carousel row zoom-gallery" data-slick="{&quot;arrows&quot;: false}">

                    {cardData && cardData.map((certificate, index) => (
                        <div key={index} className="col- carousel_item">
                            <a
                                className="certificate_image popup_image"
                                data-cursor-text="Scroll"
                                href={certificate.img}
                            >
                                <img
                                    src={certificate.img}
                                    alt={certificate.alt}
                                />
                            </a>
                        </div>
                    ))}
                </div>
                {/* <div className="col- carousel_item">
                    <a className="certificate_image popup_image" data-cursor-text="Scroll" href="/images/certificate/certificate_image_1-min.jpg">
                        <img src="/images/certificate/certificate_image_1-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                    </a>
                </div>
                <div className="col- carousel_item">
                    <a className="certificate_image popup_image" data-cursor-text="Scroll" href="/images/certificate/certificate_image_2-min.jpg">
                        <img src="/images/certificate/certificate_image_2-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                    </a>
                </div>
                <div className="col- carousel_item">
                    <a className="certificate_image popup_image" data-cursor-text="Scroll" href="/images/certificate/certificate_image_3-min.jpg">
                        <img src="/images/certificate/certificate_image_3-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                    </a>
                </div>
                <div className="col- carousel_item">
                    <a className="certificate_image popup_image" data-cursor-text="Scroll" href="/images/certificate/certificate_image_1-min.jpg">
                        <img src="/images/certificate/certificate_image_1-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                    </a>
                </div>
                <div className="col- carousel_item">
                    <a className="certificate_image popup_image" data-cursor-text="Scroll" href="/images/certificate/certificate_image_2-min.jpg">
                        <img src="/images/certificate/certificate_image_2-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                    </a>
                </div>
                <div className="col- carousel_item">
                    <a className="certificate_image popup_image" data-cursor-text="Scroll" href="/images/certificate/certificate_image_3-min.jpg">
                        <img src="/images/certificate/certificate_image_3-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                    </a>
                </div> */}
            {/* </div> */}
        </div>
        </section >

    )
}

export default Certificate