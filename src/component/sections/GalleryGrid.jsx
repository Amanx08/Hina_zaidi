import React from 'react'
import useParseSliceData from '@/hooks/useslice';
const GalleryGrid = ({ data }) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    console.log(cardData)
    return (
        <div className="gallery_section section_space_lg">
            <div className="container">
                <div className="zoom-gallery row justify-content-center">
                    <div className="col-lg-8">
                        <a className="gallery_item popup_image" href={img}>
                            <img src={img} alt="Talking Minds" />
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            {cardData?.sideImage && cardData?.sideImage.map((item, index) => <div className="col-lg-12 col-md-6 col-sm-6" key={index}>
                                <a className="gallery_item popup_image" href={item.img}>
                                    <img src={item.img} alt={item.alt} />
                                </a>
                            </div>)}


                        </div>
                    </div>
                    {cardData?.listItem && cardData?.listItem.map((item, index) => <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                        <a className="gallery_item popup_image" href={item.img}>
                            <img src={item.img} alt={item.alt} />
                        </a>
                    </div>)}

                </div>
            </div>
        </div>

    )
}

export default GalleryGrid