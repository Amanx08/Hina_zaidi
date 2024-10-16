import useParseSliceData from '@/hooks/useslice';
import React from 'react'
const ContactInfo = ({ data }) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    return (
        <section className="contact_section section_space_lg">
            <div className="container">
                <div className="section_heading text-center">
                    <h2 className="section_heading_text">{heading}</h2>
                    <p className="section_heading_description mb-0 ">
                        {subheading}
                    </p>
                </div>
                <div className="contact_infobox_wrapper row justify-content-center">
                    {cardData && cardData.map((item, index) => {
                      
                        return (

                            <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                <div className="contact_info_box">
                                    <div className="item_icon">
                                        <i className="fa-solid fa-phone" />
                                    </div>
                                    <div className="item_contact">
                                        <h3 className="item_title">{item.type}</h3>
                                        <ul className="info_list unordered_list_block">
                                            {item.list && item.list.map((cont, i) => (
                                                <li key={i}>
                                                <span className="info_text">{cont}</span>
                                            </li>
                                            ))}
                                            



                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    {/* <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="contact_info_box">
                            <div className="item_icon">
                                <i className="fa-solid fa-envelope" />
                            </div>
                            <div className="item_contact">
                                <h3 className="item_title">Email</h3>
                                <ul className="info_list unordered_list_block">
                                    <li>
                                        <span className="info_text">info@talkingminds.com</span>
                                    </li>
                                    <li>
                                        <span className="info_text">contact@talkingminds.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="contact_info_box">
                            <div className="item_icon">
                                <i className="fa-solid fa-location-dot" />
                            </div>
                            <div className="item_contact">
                                <h3 className="item_title">Address</h3>
                                <ul className="info_list unordered_list_block">
                                    <li>
                                        <span className="info_text">49, Caradon Hill, </span>
                                    </li>
                                    <li>
                                        <span className="info_text">ULBSTER</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="contact_info_box">
                            <div className="item_icon">
                                <i className="fa-solid fa-clock" />
                            </div>
                            <div className="item_contact">
                                <h3 className="item_title">Working Hours</h3>
                                <ul className="info_list unordered_list_block">
                                    <li>
                                        <span className="info_text">Mon to Fri 8 am - 6 pm</span>
                                    </li>
                                    <li>
                                        <span className="info_text">Sat to Sun 9 am - 2 pm</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

    )
}

export default ContactInfo