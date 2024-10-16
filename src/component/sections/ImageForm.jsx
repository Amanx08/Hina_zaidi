import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const ImageForm = ({data}) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    return (
        <section className="consultation_section section_space_lg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="image_widget">
                            <img src={img || "/images/about/about_image_11-min.jpg" } alt="Image"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section_heading">
                            <h2 className="section_heading_text mb-0">
                               {heading}
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="input_name">Name</label>
                                    <input id="input_name" className="form-control" type="text" name="name" placeholder="Your Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="input_phone">Phone</label>
                                    <input id="input_phone" className="form-control" type="tel" name="phone" placeholder="Mobile phone number" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="select_therapy">Section</label>
                                    <select id="select_therapy" className="form-select" aria-label="Therapy Select Options">
                                        <option selected>Select Therapy</option>
                                        <option defaultValue="Therapy One">Therapy One</option>
                                        <option defaultValue="Therapy Two">Therapy Two</option>
                                        <option defaultValue="Therapy Three">Therapy Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="input_calendar">Date Of Birth</label>
                                    <input id="input_calendar" className="form-control" type="date" name="date" />
                                </div>
                            </div>
                        </div>
                        <div className="btn_wrap pb-0">
                            <button type="submit" className="btn btn-primary">
                                <span className="btn_text" data-text="Get A Consultation">
                                    Get A Consultation
                                </span>
                                <span className="btn_icon">
                                <FontAwesomeIcon icon={faArrowRight} />

                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ImageForm