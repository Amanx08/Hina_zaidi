import useParseSliceData from '@/hooks/useslice';
import React from 'react'
const CtaSection = ({data}) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    return (
        <section className="contact_section section_space_lg">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-5">
                        <div className="section_heading mb-lg-5">
                            <h2 className="section_heading_text">{heading}</h2>
                            <p className="section_heading_description mb-0">
                              {subheading}
                            </p>
                        </div>
                        <div className="row">
                            {cardData && cardData.map((item, index)=>{
                                return (
                            <div className="col-md-6 col-sm-6" key={index}>
                                <ul className="contact_info_list unordered_list_block">
                                    <li>
                                        <div className="item_icon">
                                            <i className={item.img} />
                                        </div>
                                        <div className="item_content">
                                            <h3 className="item_title">{item.title}</h3>
                                            <p className="item_info mb-0">{item.value}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                                )
                            })}
                        </div>
                        <div className="office_hour_list bg_primary_light mt-5">
                            <h3 className="area_title">Working Time</h3>
                            <ul className="unordered_list_block">
                                <li>
                                    <span>Monday - Friday:</span>
                                    <span>8 am - 5 pm</span>
                                </li>
                                <li>
                                    <span>Saturday - Sunday</span>
                                    <span>9 am - 2 pm</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="gmap_canvas">
                            <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CtaSection