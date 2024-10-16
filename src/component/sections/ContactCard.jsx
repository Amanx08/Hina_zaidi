import React from 'react'
import useParseSliceData from '@/hooks/useslice';
import Loader from '../main-layout/Loader';

const ContactCard = ({data}) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
  return (
    <section className="contact_section section_space_lg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section_heading">
            <h2 className="section_heading_text">{heading}</h2>
            <p className="section_heading_description mb-0 ">
             {subheading}
            </p>
          </div>
          <div className="row">
          {cardData && cardData.map((item, index) => {
                      
                      return (

                          <div className="col-md-6 col-sm-6" key={index}>
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

            
          </div>
        </div>
        <div className="col-lg-6">
          <div className="gmap_canvas ps-lg-3">
            <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactCard