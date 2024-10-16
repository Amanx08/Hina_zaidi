
// import Link from 'next/link';
// import useParseSliceData from '@/hooks/useslice';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareUpRight, faCheckCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

// const Price = ({ data }) => {

//     const { heading, subheading, btn_title, card, img, videolink } = data;
//     const cardData = useParseSliceData(card);
//     return (
//         <section className="pricing_section section_space_lg bg_primary_light decoration_wrapper">
//             <div className="container">
//                 <div className="section_heading text-center">
//                     <h2 className="section_heading_text">{heading}</h2>
//                     <p className="section_heading_description mb-0 ">
//                         {subheading}
//                     </p>
//                 </div>
//                 <div className="pricing_toggle_btn_wrap">
//                     <button className="pricing_toggle_btn" type="button">
//                         <span>Monthly</span>
//                         <span>Annually <mark>Save 20%</mark></span>
//                     </button>
//                 </div>
//                 <div className="row justify-content-center">
//                     {cardData && cardData.map((item, index) => {
//                         const { popularity, title, price, duration, session_c, session_duration, meeting1, meeting2, support } = item;
//                         return (
//                             <div className="col-lg-4" key={index}>
//                                 <div className="pricing_item">
//                                     {popularity && <h3 className="badge_popular">{popularity}</h3>}

//                                     <h4 className="pricing_heading">{title}</h4>
//                                     <div className="pricing_price_value">
//                                         <span className="pricing_monthly">{price}<sub>{duration}</sub></span>
//                                         <span className="pricing_annually">$2,400 <sub>You'll Save $600</sub></span>
//                                     </div>
//                                     <hr />
//                                     <ul className="info_list unordered_list_block">
//                                         <li>
//                                             <span className="info_icon">
//                                                 <FontAwesomeIcon icon={faCircleCheck} />

//                                             </span>
//                                             <span className="info_text">{session_c}</span>
//                                         </li>
//                                         <li>
//                                             <span className="info_icon">
//                                                 <FontAwesomeIcon icon={faCircleCheck} />

//                                             </span>
//                                             <span className="info_text">{session_duration}</span>
//                                         </li>
//                                         <li>
//                                             <span className="info_icon">
//                                                 <FontAwesomeIcon icon={faCircleCheck} />

//                                             </span>
//                                             <span className="info_text">{meeting1}</span>
//                                         </li>
//                                         <li>
//                                             <span className="info_icon">
//                                                 <FontAwesomeIcon icon={faCircleCheck} />

//                                             </span>
//                                             <span className="info_text">{meeting2}</span>
//                                         </li>
//                                         <li>
//                                             <span className="info_icon">
//                                                 <FontAwesomeIcon icon={faCircleCheck} />

//                                             </span>
//                                             <span className="info_text">{support}</span>
//                                         </li>
//                                     </ul>
//                                     <div className="btn_wrap pb-0 text-center">
//                                         <a className="btn btn-primary" href="#!">
//                                             <span className="btn_text" data-text="Buy Now">
//                                                 Buy Now
//                                             </span>
//                                             <span className="btn_icon">
//                                                 <FontAwesomeIcon icon={faSquareUpRight} />
//                                             </span>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         )

//                     })}

//                     {/* <div className="col-lg-4">
//                         <div className="pricing_item">
//                             <h3 className="badge_popular">Most Popular</h3>
//                             <h4 className="pricing_heading">Standart Session</h4>
//                             <div className="pricing_price_value">
//                                 <span className="pricing_monthly">$250 <sub>Per Month</sub></span>
//                                 <span className="pricing_annually">$2,400 <sub>You'll Save $600</sub></span>
//                             </div>
//                             <hr />
//                             <ul className="info_list unordered_list_block">
//                                 <li>
//                                     <span className="info_icon">
//                                         <i className="fa-light fa-circle-check" />
//                                     </span>
//                                     <span className="info_text">10 Session Therapy</span>
//                                 </li>
//                                 <li>
//                                     <span className="info_icon">
//                                         <i className="fa-light fa-circle-check" />
//                                     </span>
//                                     <span className="info_text">Duration 30 Minutes</span>
//                                 </li>
//                                 <li>
//                                     <span className="info_icon">
//                                         <i className="fa-light fa-circle-check" />
//                                     </span>
//                                     <span className="info_text">Group Meetting</span>
//                                 </li>
//                                 <li>
//                                     <span className="info_icon">
//                                         <i className="fa-light fa-circle-check" />
//                                     </span>
//                                     <span className="info_text">Personal Meeting</span>
//                                 </li>
//                                 <li>
//                                     <span className="info_icon">
//                                         <i className="fa-light fa-circle-check" />
//                                     </span>
//                                     <span className="info_text">Support 24 Hours</span>
//                                 </li>
//                             </ul>
//                             <div className="btn_wrap pb-0 text-center">
//                                 <a className="btn btn-primary" href="#!">
//                                     <span className="btn_text" data-text="Buy Now">
//                                         Buy Now
//                                     </span>
//                                     <span className="btn_icon">
//                                         <i className="fa-solid fa-arrow-up-right" />
//                                     </span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4">
//                         <div className="pricing_item">
//                             <h3 className="pricing_heading">Individual Session</h3>
//                             <div className="pricing_price_value">
//                                 <span className="pricing_monthly">$400 <sub>Per Month</sub></span>
//                                 <span className="pricing_annually">$3,840 <sub>You'll Save $960</sub></span>
//                             </div>
//                             <hr />
//                             <ul className="info_list unordered_list_block">
//                                 <li>
//                                     <span className="info_icon">
//                                         <i className="fa-light fa-circle-check" />
//                                     </span>
//                                     <span className="info_text">1 Year Therapy</span>
//                                 </li>
//                                 <li>
//                                     <span className="info_icon">
//                                         <i className="fa-light fa-circle-check" />
//                                     </span>
//                                     <span className="info_text">Duration 30 Minutes</span>
//                                 </li>
//                                 <li>
//                                     <span className="info_icon">
//                                         <i className="fa-light fa-circle-check" />
//                                     </span>
//                                     <span className="info_text">Group Meetting</span>
//                                 </li>
//                                 <li>
//                                     <span className="info_icon">
//                                         <i className="fa-light fa-circle-check" />
//                                     </span>
//                                     <span className="info_text">Personal Meeting</span>
//                                 </li>
//                                 <li>
//                                     <span className="info_icon">
//                                         <i className="fa-light fa-circle-check" />
//                                     </span>
//                                     <span className="info_text">Support 24 Hours</span>
//                                 </li>
//                             </ul>
//                             <div className="btn_wrap pb-0 text-center">
//                                 <a className="btn btn-outline-primary" href="#!">
//                                     <span className="btn_text" data-text="Buy Now">
//                                         Buy Now
//                                     </span>
//                                     <span className="btn_icon">
//                                         <i className="fa-solid fa-arrow-up-right" />
//                                     </span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div> */}
//                 </div>
//             </div>
//             <div className="decoration_item shape_leaf_1">
//                 <img src="/images/shapes/shape_leaf_right_top.svg" alt="Shape Leaf - Talking Minds - Psychotherapist Site Template" />
//             </div>
//             <div className="decoration_item shape_leaf_2">
//                 <img src="/images/shapes/shape_leaf_left_bottom.svg" alt="Shape Leaf - Talking Minds - Psychotherapist Site Template" />
//             </div>
//         </section>

//     )
// }

// export default Price


import { useState } from 'react';
import Link from 'next/link';
import useParseSliceData from '@/hooks/useslice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Price = ({ data }) => {
    const { heading, subheading, card } = data;
    const cardData = useParseSliceData(card);
    const [isAnnually, setIsAnnually] = useState(false);

    const handleToggle = () => {
        setIsAnnually(prev => !prev);
    };

    const parsePrice = (priceString) => {
        return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
    };

    return (
        <section className="pricing_section section_space_lg bg_primary_light decoration_wrapper">
            <div className="container">
                <div className="section_heading text-center">
                    <h2 className="section_heading_text">{heading}</h2>
                    <p className="section_heading_description mb-0">{subheading}</p>
                </div>

                <div className="pricing_toggle_btn_wrap">
                    <button
                        className={`pricing_toggle_btn ${isAnnually ? 'active' : ''}`}
                        type="button"
                        onClick={handleToggle}
                    >
                        <span>{isAnnually ? "Annually" : "Monthly"}</span>
                        {isAnnually && <span><mark>Save 20%</mark></span>}
                    </button>
                </div>

                <div className="row justify-content-center">
                    {cardData && cardData.map((item, index) => {
                        const { popularity, title, price, duration, session_c, session_duration, meeting1, meeting2, support } = item;

                        const monthlyPrice = parsePrice(price);
                        const annualPrice = (monthlyPrice * 12) * 0.8; // 20% discount for annual

                        return (
                            <div className="col-lg-4" key={index}>
                                <div className="pricing_item">
                                    {popularity && <h3 className="badge_popular">{popularity}</h3>}
                                    <h4 className="pricing_heading">{title}</h4>
                                    <div className="pricing_price_value">
                                        <span className="pricing_monthly" style={{ display: isAnnually ? 'none' : 'inline' }}>
                                            ${monthlyPrice} <sub>{duration}</sub>
                                        </span>
                                        <span className="pricing_annually" style={{ display: isAnnually ? 'inline' : 'none' }}>
                                            ${annualPrice.toFixed(2)} <sub>You'll Save ${monthlyPrice * 12 - annualPrice}</sub>
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
                    })}
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
