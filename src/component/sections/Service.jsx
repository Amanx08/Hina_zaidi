// import Link from 'next/link';
// import useParseSliceData from '@/hooks/useslice';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';


// const Service = ({ data, bg }) => {
//     const { heading, subheading, btn_title, card, img, videolink } = data;
//     const cardData = useParseSliceData(card);


//     const [activeTab, setActiveTab] = useState('Health');
//     const tabs = ['Health', 'Mental Health', 'Parenting'];

//     return (
//         <section className={`service_section section_space_lg ${bg ? "" : "bg_primary_light"}`}>
//             <div className="container">
//                 <div className="section_heading text-center">
//                     <h2 className="section_heading_text">{heading}</h2>
//                     <p className="section_heading_description mb-0">
//                         {subheading}
//                     </p>
//                 </div>
//                 <div className="pricing_toggle_btn_wrap">
//                     {/* <button className="pricing_toggle_btn" type="button">
//                         <span>Health</span>
//                         <span>Mental Health</span>
//                         <span>Parenting</span>
//                     </button> */}

//                     <button className="pricing_toggle_btn" type="button">
//                         {['Health', 'Mental Health', 'Parenting'].map((tab) => (
//                             <span
//                                 key={tab}
//                                 className={`pricing_toggle_tab ${activeTab === tab ? 'active' : ''}`}
//                                 onClick={() => setActiveTab(tab)}
//                             >
//                                 {tab}
//                             </span>
//                         ))}
//                     </button>

//                 </div>
//                 <div className="row justify-content-center">
//                     {cardData && cardData.map((item, index) => {
//                         const { title, description, img, button_title, button_link } = item;
//                         return (

//                             <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
//                                 <div className="service_item">
//                                     <div className="item_icon">
//                                         <img src={img} alt="Brain Icon - Talking Minds – Psychotherapist Site Template" />
//                                     </div>
//                                     <div className="item_contact">
//                                         <h3 className="item_title">{title}</h3>
//                                         <p>
//                                             {description}
//                                         </p>
//                                         <Link className="btn-link" href={button_link || ""}>
//                                             <span className="btn_text">{btn_title}</span>
//                                             <span className="btn_icon"><FontAwesomeIcon icon={faArrowRight} /></span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         )

//                     })}

//                 </div>
//                 <div className="btn_wrap pb-0 text-center">
//                     <a className="btn btn-primary" href="service.html">
//                         <span className="btn_text" data-text={btn_title || "All Programs"}>
//                             {btn_title || "All Programs"}
//                         </span>
//                         <span className="btn_icon">
//                             <FontAwesomeIcon icon={faSquareUpRight} />
//                         </span>
//                     </a>
//                 </div>
//             </div>
//         </section>

//     )
// }

// export default Service



import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import useParseSliceData from '@/hooks/useslice'; // Ensure this path is correct

const Service = ({ data, bg }) => {
    const { heading, subheading, btn_title, card } = data;
    const cardData = useParseSliceData(card) || []; // Ensure cardData is always an array

    const tabs = ['Health', 'Mental Health', 'Parenting'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    // Filter card data based on the active tab


    const filteredCardData = cardData.filter(item => item.category === activeTab);

    return (

        <section className={`service_section section_space_lg ${bg ? "" : "bg_primary_light"}`}>
            <div className="container">
                <div className="section_heading text-center">
                    <h2 className="section_heading_text">{heading}</h2>
                    <p className="section_heading_description mb-0">{subheading}</p>
                </div>

                <div className="pricing_toggle_btn_wrap">

                    {/* <button className="pricing_toggle_btn" type="button">
                        {tabs.map((tab) => (
                            <span
                                key={tab}
                                className={`pricing_toggle_tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </span>
                        ))}
                    </button> */}

                    <div className="pricing_toggle_btn" tabIndex={0}>
                        {tabs.map((tab) => (
                            <span
                                key={tab}
                                className={`pricing_toggle_tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                                onKeyPress={(e) => e.key === 'Enter' && setActiveTab(tab)}
                                role="button"
                                tabIndex={0}
                                aria-pressed={activeTab === tab}
                            >
                                {tab}
                            </span>
                        ))}
                    </div>

                </div>

                <div className="row justify-content-center">
                    {filteredCardData.length > 0 ? (
                        filteredCardData.map((item, index) => {
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
                                                <span className="btn_icon"><FontAwesomeIcon icon={faArrowRight} /></span>
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
                <div className="btn_wrap pb-0 text-center">
                    <a className="btn btn-primary" href="service.html">
                        <span className="btn_text" data-text={btn_title || "All Programs"}>
                            {btn_title || "All Programs"}
                        </span>
                        <span className="btn_icon">
                            <FontAwesomeIcon icon={faSquareUpRight} />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Service;

