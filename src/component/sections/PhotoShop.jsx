import React from 'react'
import useParseSliceData from '@/hooks/useslice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PhotoShop = ({ data }) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    return (
        <section className="gallery_section section_space_lg pb-0">
            <div className="container">
                <div className="section_heading text-center">
                    <h2 className="section_heading_text">{heading}</h2>
                    <p className="section_heading_description mb-0">
                        {subheading}
                    </p>
                </div>
                <div className="zoom-gallery row justify-content-center">

                    {cardData && cardData.map((item, index) => {
                        const {img , alt} = item;
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                <a className="gallery_item popup_image" href={img}>
                                    <img src={img} alt={ alt || "not..found"} />
                                </a>
                            </div>
                        )
                    })}


                    {/* <div className="col-lg-4 col-md-6 col-sm-6">
                        <a className="gallery_item popup_image" href="/images/gallery/gallery_image_2-min.jpg">
                            <img src="/images/gallery/gallery_image_2-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a className="gallery_item popup_image" href="/images/gallery/gallery_image_3-min.jpg">
                            <img src="/images/gallery/gallery_image_3-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a className="gallery_item popup_image" href="/images/gallery/gallery_image_4-min.jpg">
                            <img src="/images/gallery/gallery_image_4-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a className="gallery_item popup_image" href="/images/gallery/gallery_image_5-min.jpg">
                            <img src="/images/gallery/gallery_image_5-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a className="gallery_item popup_image" href="/images/gallery/gallery_image_6-min.jpg">
                            <img src="/images/gallery/gallery_image_6-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                        </a>
                    </div> */}
                </div>
                <div className="btn_wrap pb-0 text-center">
                    <a className="btn btn-primary" href="gallery.html">
                        <span className="btn_text" data-text={btn_title || "Click Here"}>
                            {btn_title || "Click Here"}
                        </span>
                        <span className="btn_icon">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </a>
                </div>
            </div>
        </section>

    )
}

export default PhotoShop