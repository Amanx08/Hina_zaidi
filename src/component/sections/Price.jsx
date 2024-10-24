// import { useState } from 'react';
// import Link from 'next/link';
// import useParseSliceData from '@/hooks/useslice';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareUpRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// const Price = ({ data }) => {

//     const { heading, subheading, card } = data;
//     const cardData = useParseSliceData(card);
//     const [isAnnually, setIsAnnually] = useState(false);

//     // const handleToggle = () => {
//     //     setIsAnnually(prev => !prev);

//     // };

//     const parsePrice = (priceString) => {
//         return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
//     };

//     const tabs = ['Montly', 'Annually'];
//     const [activeTab, setActiveTab] = useState(tabs[0]);

//     return (

//         <section className="pricing_section section_space_lg bg_primary_light decoration_wrapper">
//             <div className="container">
//                 <div className="section_heading text-center">
//                     <h2 className="section_heading_text">{heading}</h2>
//                     <p className="section_heading_description mb-0">{subheading}</p>
//                 </div>

//                 <div className="pricing_toggle_btn_wrap">

//                     <div className="pricing_toggle_btn">

//                         {tabs.map((tab) => (
//                             <span
//                                 key={tab}
//                                 className={`pricing_toggle_tab ${activeTab === tab ? 'active' : ''}`}
//                                 onClick={() => setActiveTab(tab)}
//                                 onKeyPress={(e) => e.key === 'Enter' && setActiveTab(tab)}
//                                 role="button"
//                                 tabIndex={0}
//                                 aria-pressed={activeTab === tab}
//                             >
//                                 {tab}
//                             </span>
//                         ))}

//                     </div>

//                 </div>

//                 <div className="row justify-content-center">
//                     {cardData && cardData.map((item, index) => {
//                         const { popularity, title, price, duration, session_c, session_duration, meeting1, meeting2, support } = item;

//                         const monthlyPrice = parsePrice(price);
//                         const annualPrice = (monthlyPrice * 12) * 0.8; // 20% discount for annual

//                         return (
//                             <div className="col-lg-4" key={index}>
//                                 <div className="pricing_item">
//                                     {popularity && <h3 className="badge_popular">{popularity}</h3>}
//                                     <h4 className="pricing_heading">{title}</h4>
//                                     <div className="pricing_price_value">
//                                         <span className="pricing_monthly" style={{ display: isAnnually ? 'none' : 'inline' }}>
//                                             ${monthlyPrice} <sub>{duration}</sub>
//                                         </span>
//                                         <span className="pricing_annually" style={{ display: isAnnually ? 'inline' : 'none' }}>
//                                             ${annualPrice.toFixed(2)} <sub>You'll Save ${monthlyPrice * 12 - annualPrice}</sub>
//                                         </span>
//                                     </div>
//                                     <hr />
//                                     <ul className="info_list unordered_list_block">
//                                         <li>
//                                             <span className="info_icon">
//                                                 <FontAwesomeIcon icon={faCheckCircle} />
//                                             </span>
//                                             <span className="info_text">{session_c}</span>
//                                         </li>
//                                         <li>
//                                             <span className="info_icon">
//                                                 <FontAwesomeIcon icon={faCheckCircle} />
//                                             </span>
//                                             <span className="info_text">{session_duration}</span>
//                                         </li>
//                                         <li>
//                                             <span className="info_icon">
//                                                 <FontAwesomeIcon icon={faCheckCircle} />
//                                             </span>
//                                             <span className="info_text">{meeting1}</span>
//                                         </li>
//                                         <li>
//                                             <span className="info_icon">
//                                                 <FontAwesomeIcon icon={faCheckCircle} />
//                                             </span>
//                                             <span className="info_text">{meeting2}</span>
//                                         </li>
//                                         <li>
//                                             <span className="info_icon">
//                                                 <FontAwesomeIcon icon={faCheckCircle} />
//                                             </span>
//                                             <span className="info_text">{support}</span>
//                                         </li>
//                                     </ul>
//                                     <div className="btn_wrap pb-0 text-center">
//                                         <Link href="#!">
//                                             <div className="btn btn-primary">
//                                                 <span className="btn_text" data-text="Buy Now">Buy Now</span>
//                                                 <span className="btn_icon">
//                                                     <FontAwesomeIcon icon={faSquareUpRight} />
//                                                 </span>
//                                             </div>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//             <div className="decoration_item shape_leaf_1">
//                 <img src="/images/shapes/shape_leaf_right_top.svg" alt="Decoration" />
//             </div>
//             <div className="decoration_item shape_leaf_2">
//                 <img src="/images/shapes/shape_leaf_left_bottom.svg" alt="Decoration" />
//             </div>
//         </section>
//     );
// };

// export default Price;


import { useEffect, useState } from 'react';
import Link from 'next/link';
import useParseSliceData from '@/hooks/useslice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Price = ({ data }) => {

    const { heading, subheading, card } = data;
    const cardData = useParseSliceData(card) || [];

    const initialTab = Object.keys(cardData)[0];

    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        if (initialTab) {
            setActiveTab(initialTab);
        }
    }, [initialTab]);

    // console.log(cardData);

    return (

        <section className="pricing_section section_space_lg bg_primary_light decoration_wrapper">
            <div className="container">
                <div className="section_heading text-center">
                    <h2 className="section_heading_text">{heading}</h2>
                    <p className="section_heading_description mb-0">{subheading}</p>
                </div>

                <div className="pricing_toggle_btn_wrap">
                    <div className="pricing_toggle_btn">
                        {/* {tabs.map((tab) => (

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

                        ))} */}

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

                <div className="row justify-content-center">

                    {/* {cardData && cardData.map((item, index) => {
                        const { popularity, title, price, duration, session_c, session_duration, meeting1, meeting2, support, annual_price } = item;

                        const monthlyPrice = price;
                        // const anualPrice = annuallyPrice;
                        // const annualPrice = (monthlyPrice * 12) * 0.8; // 20% discount for annual
                        const isAnnualPlan = activeTab === 'Annually';

                        return (
                            <div className="col-lg-4" key={index}>
                                <div className="pricing_item">
                                    {popularity && <h3 className="badge_popular">{popularity}</h3>}
                                    <h4 className="pricing_heading">{title}</h4>
                                    <div className="pricing_price_value">

                                        {isAnnualPlan ? (
                                            <span className="pricing_annually">
                                                ${annual_price} <sub>Save 20% </sub>
                                            </span>
                                        ) : (
                                            <span className="pricing_monthly">
                                                ${monthlyPrice} <sub>{duration}</sub>
                                            </span>
                                        )}

                                    </div>
                                    <hr />
                                    <ul className="info_list unordered_list_block">
                                        <li>
                                            <span className="info_icon">
                                                <FontAwesomeIcon icon={faCheckCircle} />
                                            </span>
                                            <span className="info_text">{session_c}</span>
                                        </li>
                                        <li>
                                            <span className="info_icon">
                                                <FontAwesomeIcon icon={faCheckCircle} />
                                            </span>
                                            <span className="info_text">{session_duration}</span>
                                        </li>
                                        <li>
                                            <span className="info_icon">
                                                <FontAwesomeIcon icon={faCheckCircle} />
                                            </span>
                                            <span className="info_text">{meeting1}</span>
                                        </li>
                                        <li>
                                            <span className="info_icon">
                                                <FontAwesomeIcon icon={faCheckCircle} />
                                            </span>
                                            <span className="info_text">{meeting2}</span>
                                        </li>
                                        <li>
                                            <span className="info_icon">
                                                <FontAwesomeIcon icon={faCheckCircle} />
                                            </span>
                                            <span className="info_text">{support}</span>
                                        </li>
                                    </ul>
                                    <div className="btn_wrap pb-0 text-center">
                                        <Link href="#!">
                                            <div className="btn btn-primary">
                                                <span className="btn_text" data-text="Buy Now">Buy Now</span>
                                                <span className="btn_icon">
                                                    <FontAwesomeIcon icon={faSquareUpRight} />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })} */}

                    {/* Pricing Items */}
                    <div className="row justify-content-center">
                        {cardData[activeTab]?.data?.length > 0 ? (
                            cardData[activeTab].data.map((item, index) => {
                                const { popularity, title, price, duration, session_c, session_duration, meeting1, meeting2, support, annual_price } = item;

                                // const isAnnualPlan = activeTab === 'Annually';

                                return (
                                    <div className="col-lg-4" key={index}>
                                        <div className="pricing_item">
                                            {popularity && <h3 className="badge_popular">{popularity}</h3>}
                                            <h4 className="pricing_heading">{title}</h4>
                                            <div className="pricing_price_value">
                                                {/* {isAnnualPlan ? (
                                                    <span className="pricing_annually">
                                                        ${annual_price} <sub>Save 20%</sub>
                                                    </span>
                                                ) : (
                                                    <span className="pricing_monthly">
                                                        ${price} <sub>{duration}</sub>
                                                    </span>
                                                )} */}

                                                <span className="pricing_monthly">
                                                    ${price} <sub>{duration}</sub>
                                                </span>

                                            </div>

                                            <hr />
                                            <ul className="info_list unordered_list_block">
                                                <li>
                                                    <span className="info_icon">
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                    </span>
                                                    <span className="info_text">{session_c}</span>
                                                </li>
                                                <li>
                                                    <span className="info_icon">
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                    </span>
                                                    <span className="info_text">{session_duration}</span>
                                                </li>
                                                <li>
                                                    <span className="info_icon">
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                    </span>
                                                    <span className="info_text">{meeting1}</span>
                                                </li>
                                                <li>
                                                    <span className="info_icon">
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                    </span>
                                                    <span className="info_text">{meeting2}</span>
                                                </li>
                                                <li>
                                                    <span className="info_icon">
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                    </span>
                                                    <span className="info_text">{support}</span>
                                                </li>
                                            </ul>
                                            <div className="btn_wrap pb-0 text-center">
                                                <Link href="#!">
                                                    <div className="btn btn-primary">
                                                        <span className="btn_text" data-text="Buy Now">Buy Now</span>
                                                        <span className="btn_icon">
                                                            <FontAwesomeIcon icon={faSquareUpRight} />
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p>No plans available for this category.</p>
                        )}
                    </div>


                </div>
            </div>
            <div className="decoration_item shape_leaf_1">
                <img src="/images/shapes/shape_leaf_right_top.svg" alt="Decoration" />
            </div>
            <div className="decoration_item shape_leaf_2">
                <img src="/images/shapes/shape_leaf_left_bottom.svg" alt="Decoration" />
            </div>
        </section>
    );
};

export default Price;
