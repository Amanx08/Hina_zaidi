"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import useParseSliceData from '@/hooks/useslice'; // Ensure this path is correct

const Service = ({ data, bg }) => {
    const { heading, subheading, btn_title, card } = data;
    // const cardsData = card;
    const cardData = useParseSliceData(card) || [];


    const initialTab = Object.keys(cardData)[0];

    const [activeTab, setActiveTab] = useState(initialTab);
    
    useEffect(() => {
        if (initialTab) {
            setActiveTab(initialTab);
        }
    }, [initialTab]);

    // console.log("data", initialTab);

    return (

        <section className={`service_section section_space_lg ${bg ? "" : "bg_primary_light"}`}>
            <div className="container">
                {/* Section heading */}
                <div className="section_heading text-center">
                    <h2 className="section_heading_text">{heading}</h2>
                    <p className="section_heading_description mb-0">{subheading}</p>
                </div>

                {/* Pricing toggle buttons */}

                <div className="pricing_toggle_btn_wrap">
                    <div className="pricing_toggle_btn">
                        {Object.keys(cardData).map((tab) => (
                            <span
                                key={tab}
                                className={`pricing_toggle_tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {cardData[tab].label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Service Items */}

                <div className="row justify-content-center">
                    {cardData[activeTab]?.data?.length > 0 ? (

                        cardData[activeTab]?.data?.map((item, index) => {
                            const { title, description, img, button_title, button_link } = item;
                            return (

                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <div className="service_item">
                                        <div className="item_icon">
                                            <img src={img} alt={title} />
                                        </div>
                                        <div className="item_contact">
                                            <h3 className="item_title">{title}</h3>
                                            <p>{description}</p>
                                            <Link className="btn-link" href={button_link || ""}>
                                                <span className="btn_text">{button_title || "Learn More"}</span>
                                                <span className="btn_icon">
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            );
                        })
                    ) : (
                        <p>No services available for this category.</p>
                    )}
                </div>

                {/* All Programs Button */}
                <div className="btn_wrap pb-0 text-center">
                    <Link className="btn btn-primary" href="/service.html">
                        <span className="btn_text" data-text={btn_title || "All Programs"}>
                            {btn_title || "All Programs"}
                        </span>
                        <span className="btn_icon">
                            <FontAwesomeIcon icon={faSquareUpRight} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>

    );
};

export default Service;

