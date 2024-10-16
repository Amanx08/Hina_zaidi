"use client"
import React from 'react'
import useParseSliceData from '@/hooks/useslice';
import { useEffect, useState} from 'react'
import Script from 'next/script';
const Testimonial = ({ data }) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;

    const cardData = useParseSliceData(card);
    const [isSlickInitialized, setIsSlickInitialized] = useState(false);
  
    useEffect(() => {
        if (cardData && cardData.length > 0) {
            // Initialize Slick after the data is loaded
            setIsSlickInitialized(true);
            // Call Slick's initialization function
            $('.carousel_2col').slick({
                dots: true,
                speed: 1000,
                arrows: true,
                infinite: true,
                autoplay: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                pauseOnHover: true,
                autoplaySpeed: 5000,
                prevArrow: ".c2c_arrow_left",
                nextArrow: ".c2c_arrow_right",
                responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                ]
                // Add any other settings here
            });
        }
    }, [cardData]);

    return (
        // <section className="testimonial_section section_space_lg">
        //     <div className="container">
        //         <div className="section_heading text-center">
        //             <h2 className="section_heading_text">{heading}</h2>
        //             <p className="section_heading_description mb-0">
        //                 {subheading}
        //             </p>
        //         </div>
        //         <div className="testimonial_carousel">
        //             <div className="carousel_2col row" data-slick='{"arrows":false}'>
        //                  {cardData && cardData.map((item, index) => (
        //                     <div className="carousel_item col" key={index}>
        //                         <div className="testimonial_item">
        //                             <ul className="rating_star unordered_list">
        //                                 <li><i className="fa-solid fa-star" /></li>
        //                                 <li><i className="fa-solid fa-star" /></li>
        //                                 <li><i className="fa-solid fa-star" /></li>
        //                                 <li><i className="fa-solid fa-star" /></li>
        //                                 <li><i className="fa-solid fa-star" /></li>
        //                             </ul>
        //                             <div className="author_box">
        //                                 <div className="author_box_image">
        //                                     <img src={item.img || "assets/images/meta/author_image_1.png"} alt="profile" />
        //                                 </div>
        //                                 <div className="author_box_content">
        //                                     <h3 className="author_box_name">{item.name}</h3>
        //                                     <span className="author_box_designation">{item.occupation}</span>
        //                                 </div>
        //                             </div>
        //                             <p className="mb-0">{item.bio}</p>
        //                         </div>
        //                     </div>
        //                 ))} 

        //                 <div className="carousel_item col-">
        //                     <div className="testimonial_item">
        //                         <ul className="rating_star unordered_list">
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                         </ul>
        //                         <div className="author_box">
        //                             <div className="author_box_image">
        //                                 <img src="assets/images/meta/author_image_1.png" alt="Reviewer Image - Talking Minds - Psychotherapist Site Template" />
        //                             </div>
        //                             <div className="author_box_content">
        //                                 <h3 className="author_box_name">Kerry Banks</h3>
        //                                 <span className="author_box_designation">Housewife</span>
        //                             </div>
        //                         </div>
        //                         <p className="mb-0">
        //                             Lorem Ipsum is simply dummy text of the printing and typesetting text industry. Lorem Ipsum has been the industry's standard dumm ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="carousel_item col-">
        //                     <div className="testimonial_item">
        //                         <ul className="rating_star unordered_list">
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                         </ul>
        //                         <div className="author_box">
        //                             <div className="author_box_image">
        //                                 <img src="assets/images/meta/author_image_1.png" alt="Reviewer Image - Talking Minds - Psychotherapist Site Template" />
        //                             </div>
        //                             <div className="author_box_content">
        //                                 <h3 className="author_box_name">Damian York</h3>
        //                                 <span className="author_box_designation">Entrepreneur</span>
        //                             </div>
        //                         </div>
        //                         <p className="mb-0">
        //                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type text of the printing and typesetting industry.
        //                         </p>
        //                     </div>
        //                 </div><div className="carousel_item col-">
        //                     <div className="testimonial_item">
        //                         <ul className="rating_star unordered_list">
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                         </ul>
        //                         <div className="author_box">
        //                             <div className="author_box_image">
        //                                 <img src="assets/images/meta/author_image_1.png" alt="Reviewer Image - Talking Minds - Psychotherapist Site Template" />
        //                             </div>
        //                             <div className="author_box_content">
        //                                 <h3 className="author_box_name">Kerry Banks</h3>
        //                                 <span className="author_box_designation">Housewife</span>
        //                             </div>
        //                         </div>
        //                         <p className="mb-0">
        //                             Lorem Ipsum is simply dummy text of the printing and typesetting text industry. Lorem Ipsum has been the industry's standard dumm ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="carousel_item col-">
        //                     <div className="testimonial_item">
        //                         <ul className="rating_star unordered_list">
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                             <li><i className="fa-solid fa-star" /></li>
        //                         </ul>
        //                         <div className="author_box">
        //                             <div className="author_box_image">
        //                                 <img src="assets/images/meta/author_image_1.png" alt="Reviewer Image - Talking Minds - Psychotherapist Site Template" />
        //                             </div>
        //                             <div className="author_box_content">
        //                                 <h3 className="author_box_name">Damian York</h3>
        //                                 <span className="author_box_designation">Entrepreneur</span>
        //                             </div>
        //                         </div>
        //                         <p className="mb-0">
        //                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type text of the printing and typesetting industry.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div>


        //             </div>
        //         </div>

        //     </div>
        // </section>

        <section className="testimonial_section section_space_lg">
            <div className="container">
                <div className="section_heading text-center">
                    <h2 className="section_heading_text">{heading}</h2>
                    <p className="section_heading_description mb-0">
                        {subheading}
                    </p>
                </div>
                <div className="testimonial_carousel">
                    <div className="carousel_2col row" data-slick="{&quot;arrows&quot;:false}">
                        {cardData && cardData.map((item, index) => {
                            const { bio, occupation, name , img } = item;
                            return (
                                <div className="carousel_item col-" key={index}>
                                    <div className="testimonial_item">
                                        <ul className="rating_star unordered_list">
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <div className="author_box">
                                            <div className="author_box_image">
                                                <img src={img ||"assets/images/meta/author_image_1.png"} alt="Reviewer Image - Talking Minds - Psychotherapist Site Template" />
                                            </div>
                                            <div className="author_box_content">
                                                <h3 className="author_box_name">{name}</h3>
                                                <span className="author_box_designation">{occupation}</span>
                                            </div>
                                        </div>
                                        <p className="mb-0">
                                            {bio}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}

                    
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Testimonial