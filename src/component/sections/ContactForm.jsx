import React from 'react'
import useParseSliceData from '@/hooks/useslice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ContactForm = ({data}) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    return (
        <section className="contact_section section_space_lg">
            <div className="container">
                <div className="conatiner_box">
                    <div className="section_heading mb-4">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-6">
                                <h2 className="section_heading_text mb-0">
                               {heading}
                                </h2>
                            </div>
                            <div className="col-lg-6">
                                <p className="section_heading_description mb-0 ps-lg-4">
                                  {subheading}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="input_name">Name</label>
                                        <input id="input_name" className="form-control" type="text" name="name" placeholder="Your name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="input_phone">Phone</label>
                                        <input id="input_phone" className="form-control" type="tel" name="phone" placeholder="Phone number" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group mb-4">
                                        <label htmlFor="input_message">Message</label>
                                        <textarea id="input_message" className="form-control" name="comment" placeholder="Your message" defaultdefaultValue={""} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        <span className="btn_text" data-text="Get A Consultation">
                                            Get A Consultation
                                        </span>
                                        <span className="btn_icon">
                                           <FontAwesomeIcon icon={faArrowRight}/>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <div className="row mb-5">
                                {cardData && cardData.map((item, index)=>{
                                return (
                                    <div className="col-md-6" key={index}>
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
                                 
                                    {/* <div className="col-md-6">
                                        <ul className="contact_info_list unordered_list_block">
                                            <li>
                                                <div className="item_icon">
                                                    <i className="fa-solid fa-envelope" />
                                                </div>
                                                <div className="item_content">
                                                    <h3 className="item_title">Email</h3>
                                                    <p className="item_info mb-0">info@talkingminds.com</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item_icon">
                                                    <i className="fa-solid fa-location-dot" />
                                                </div>
                                                <div className="item_content">
                                                    <h3 className="item_title">Location</h3>
                                                    <p className="item_info mb-0">49, Caradon Hill, ULBSTER</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                                <h3 className="social_title">Follow Us:</h3>
                                <ul className="social_links unordered_list">
                                    <li><a className="bg-primary" href="#!"><i className="fa-brands fa-facebook-f" /></a></li>
                                    <li><a className="bg-primary" href="#!"><i className="fa-brands fa-instagram" /></a></li>
                                    <li><a className="bg-primary" href="#!"><i className="fa-brands fa-twitter" /></a></li>
                                    <li><a className="bg-primary" href="#!"><i className="fa-brands fa-whatsapp" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactForm