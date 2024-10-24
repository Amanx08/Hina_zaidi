import useParseSliceData from '@/hooks/useslice';
import { faArrowRight, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
const Banner = ({ data }) => {

    const { heading, subheading, btn_title, card, img, videolink, status } = data;
    const counter = useParseSliceData(card);
    console.log(status)
    return (

        // { status === true &&

        <section className="hero_section decoration_wrapper">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero_content_wrap">
                            <h1 className="heading_text">
                                {heading}
                            </h1>
                            <p className="heading_description">
                                {subheading}
                            </p>
                            <ul className="btns_group unordered_list">
                                <li>
                                    <a className="btn btn-primary" href="/contact">
                                        <span className="btn_text" data-text="Get A Consultation">
                                            Get A Consultation
                                        </span>
                                        <span className="btn_icon">
                                            <FontAwesomeIcon icon={faSquareArrowUpRight} />


                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-outline-secondary" href="/contact">
                                        <span className="btn_text" data-text="Learn More">
                                            Learn More
                                        </span>
                                        <span className="btn_icon">
                                            <FontAwesomeIcon icon={faSquareArrowUpRight} />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="hero_section_counter unordered_list">
                                {counter && counter.map((item, index) => {
                                    const { title, value, count } = item;
                                    return (
                                        <li key={index}>
                                            <div className="counter_item">
                                                <div className="counter_value mb-0">
                                                    <span className="odometer" data-count={value}>0</span>
                                                    <span>{count}</span>
                                                </div>
                                                <hr />
                                                <p className="counter_description mb-0">
                                                    {title}
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero_image_wrap">
                            <img src={img || "/images/hero/hero_image_1-min.jpg"} alt="Talking Minds – Psychotherapist Site Template" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="decoration_item shape_blur_shadow" />
            <div className="decoration_item shape_leaf">
                <img src="/images/background 3.png" alt="Shape Leaf - Talking Minds - Psychotherapist Site Template" />
            </div>
        </section>
        
        // }


    )
}

export default Banner