import useParseSliceData from '@/hooks/useslice';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
const DetailContent = ({data , varient}) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    console.log(cardData)
    // const {des, title , description , list ,  benefits } = cardData?.therapyBenefits;
    return (
        <section className="service_details_section section_space_lg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {varient &&   <div class="service_cost_info p-0 mb-5">
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <h3 class="details_info_title">General Informations</h3>
                      <a class="btn-link" href="#!">
                        <span class="btn_text">Schledule a Aisit</span>
                        <span class="btn_icon">                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </a>
                    </div>
                    <div class="col-md-6 col-sm-6 d-md-flex justify-content-md-end d-sm-flex justify-content-sm-end">
                      <div class="item_price mb-0">
                        <span class="price_value">{cardData?.cardlist[0].sessionPrice}$</span>
                        <sub>Session price</sub>
                      </div>
                    </div>
                  </div>
                </div>}
                        <div className="details_content">
                            <h2 className="details_item_title">{heading}</h2>
                            <p>
                               {subheading}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="video_wrapper text-center" style={{ backgroundImage: 'url("/images/video/video_poster_image_1-min.jpg")' }}>
                    <a className="video_play_btn popup_video" href={videolink  ||"https://www.youtube.com/watch?v=7e90gBu4pas"}>
                        <i className="fa-duotone fa-play" />
                    </a>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="details_content">
                            <p>
                                {cardData?.des}
                            </p>
                        </div>
                    </div>
                </div>
             {!varient && <div className="row mb-5">
                    <div className="col-lg-6">
                        <div className="service_author">
                            <h3 className="details_info_title">{cardData?.cardlist[0].title}</h3>
                            <div className="d-md-flex">
                                <div className="author_image">
                                    <img src={img || "/images/meta/author_image_3-min.png"} alt="Talking Minds - Psychotherapist Site Template" />
                                </div>

                                <div className="author_content">
                                    <h4 className="author_name">{cardData?.cardlist[0].doctor}</h4>
                                    <span className="author_designation">{cardData?.cardlist[0].doctorExp}</span>
                                    <p>
                                    {cardData?.cardlist[0].description}
                                    </p>
                                    <a className="btn-link" href="#!">
                                        <span className="btn_text"> {cardData?.cardlist[0].buyNow || "More"}</span>
                                        <span className="btn_icon"><FontAwesomeIcon icon={faArrowRight} /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service_cost_info">
                            <h3 className="details_info_title">{cardData?.cardlist[0].title}</h3>
                            <div className="item_price">
                                <span className="price_value">{cardData?.cardlist[0].sessionPrice}</span>
                                <sub>/ Session price</sub>
                            </div>
                            <p>
                            {cardData?.cardlist[0].description}
                            </p>
                            <a className="btn-link" href="#!">
                                <span className="btn_text">{cardData?.cardlist[0].buyNow}</span>
                                <span className="btn_icon">                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>} 
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="details_content mb-5">
                            <h3 className="details_info_title">{cardData?.title}</h3>
                            <p className="mb-4">
                               {cardData?.detailedDes}
                            </p>
                            <ul className="info_list unordered_list_block mb-4">
                                {cardData?.benefits && cardData.benefits.map((i , t)=>(
                                     <li key={t}>
                                    <span className="info_icon">
                                        <i className="fa-light fa-circle-check" />
                                    </span>
                                    <span className="info_text">{i}</span>
                                </li>
                                ))}
                               
                              
                            </ul>
                           
                        </div>
                        <div className="prev_next_post_nav mb-5">
                            <a href="#!">
                                <span className="item_icon">
                                    <i className="fa-regular fa-angle-left" />
                                </span>
                                <span className="item_content">
                                    <b>Previous</b>
                                    <strong>Relationships</strong>
                                </span>
                            </a>
                            <a href="#!">
                                <span className="item_icon">
                                    <i className="fa-regular fa-angle-right" />
                                </span>
                                <span className="item_content">
                                    <b>Next</b>
                                    <strong>Couples Counseling</strong>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
{varient && <div className="service_author shadow-none">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="d-lg-flex text-lg-start justify-content-lg-start text-center justify-content-center align-items-center">
                                    <div className="author_image">
                                        <img src="/images/meta/author_image_3-min.png" alt="Talking Minds - Psychotherapist Site Template" />
                                    </div>
                                    <div className="author_content">
                                        <h4 className="author_name">{cardData?.cardlist[0].doctor}</h4>
                                        <span className="author_designation mb-0">{cardData?.cardlist[0].doctorExp}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ul className="social_links unordered_list justify-content-center justify-content-lg-end">
                                    <li><a href="#!"><i className="fa-brands fa-facebook-f" /></a></li>
                                    <li><a href="#!"><i className="fa-brands fa-instagram" /></a></li>
                                    <li><a href="#!"><i className="fa-brands fa-twitter" /></a></li>
                                    <li><a href="#!"><i className="fa-brands fa-whatsapp" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>}
                
            </div>
            
        </section>

    )
}

export default DetailContent