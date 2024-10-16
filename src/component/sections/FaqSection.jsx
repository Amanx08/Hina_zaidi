import useParseSliceData from '@/hooks/useslice';
import React from 'react'
const FaqSection = ({ data }) => {

    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    // const images = useParseSliceData(img);
    return (
        <section className="faq_section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="image_widget">
                    <img src={img || "/images/about/about_image_1-min.jpg"} alt="About Image" /> 
                    </div>
                        {/* <div className="images_group_widget">
                             <ul className="unordered_list">
                                <li>
                                    <img src={ images?.[0] || "/images/about/about_image_2-min.png"} alt="Talking Minds" />
                                    <img src={ images?.[1] ||"/images/about/about_image_4-min.png"} alt="Talking Minds " />
                                </li>
                                <li>
                                    <img src={images?.[2] || "/images/about/about_image_3-min.png"} alt="Talking Minds" />
                                    <img src={ images?.[3] || "/images/about/about_image_5-min.png"} alt="Talking Minds" />
                                </li>
                            </ul> 
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                        <div className="ps-lg-5">
                            <div className="section_heading mb-lg-4 mb-2">
                                <h2 className="section_heading_text mb-0">
                                    {heading}
                                </h2>
                            </div>
                            <div className="accordion" id="faq_accordion">

                                {cardData && cardData.map((item, index) => (
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
                </div>
            </div>
        </section>

    )
}

export default FaqSection