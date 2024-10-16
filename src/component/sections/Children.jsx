import React from 'react'
import useParseSliceData from '@/hooks/useslice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Children = ({ data }) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    console.log(img)
    const cardData = useParseSliceData(card);
    return (
        <section className="about_section section_space_lg bg_primary_light">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6 order-lg-last">
                        <div className="image_widget">
                            <img src={img || "/images/service1.png"} alt="About Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about_content">
                            <div className="section_heading mb-lg-5">
                                <h2 className="section_heading_text">
                                    {heading}
                                </h2>
                                <p className="section_heading_description mb-0 ">
                                    {subheading}
                                </p>
                            </div>
                            <div className="row">
                                {cardData && cardData.map((item, index) => {

                                    return (
                                        <div className="col-md-6 col-sm-6" key={index}>
                                            <div className="policy_item">
                                                <div className="title_wrap">
                                                    <div className="item_icon">
                                                        <i className="fa-solid fa-hand-holding-heart" />
                                                    </div>
                                                    <h3 className="item_title">{item.title}</h3>
                                                </div>
                                                <p className="mb-0">
                                                   {item.description}
                                                </p>
                                            </div>
                                        </div>

                                    )

                                })}

                                {/* <div className="col-md-6 col-sm-6">
                                    <div className="policy_item">
                                        <div className="title_wrap">
                                            <div className="item_icon">
                                                <i className="fa-solid fa-headset" />
                                            </div>
                                            <h3 className="item_title">Support</h3>
                                        </div>
                                        <p className="mb-0">
                                            Similique sunt in culpa qui officia deserunt mollitia animi
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="policy_item">
                                        <div className="title_wrap">
                                            <div className="item_icon">
                                                <i className="fa-solid fa-head-side-medical" />
                                            </div>
                                            <h3 className="item_title">Reliability</h3>
                                        </div>
                                        <p className="mb-0">
                                            Similique sunt in culpa qui officia deserunt mollitia animi
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="policy_item">
                                        <div className="title_wrap">
                                            <div className="item_icon">
                                                <i className="fa-solid fa-shield-halved" />
                                            </div>
                                            <h3 className="item_title">Confidentiality</h3>
                                        </div>
                                        <p className="mb-0">
                                            Similique sunt in culpa qui officia deserunt mollitia animi
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                            <div className="btn_wrap pb-0">
                                <a className="btn btn-primary" href="contact.html">
                                    <span className="btn_text" data-text="Get A Consultation">
                                        {btn_title || "Get A Consultation"}
                                    </span>
                                    <span className="btn_icon">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Children