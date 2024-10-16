import React from 'react'
import useParseSliceData from '@/hooks/useslice';
const WorkProcess = ({ data }) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    const images = useParseSliceData(img);

    return (
        <section className="work_process_section section_space_lg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-last">
                        <div className="image_widget">
                            <img src={img || "/images/about/about_image_1-min.jpg"} alt="About Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section_heading">
                            <h2 className="section_heading_text mb-0">
                                {heading || "Stages of consultation with patients on mental health"}
                            </h2>
                        </div>
                        <div className="row">
                            {cardData && cardData.map((item, index) => {
                                const { num, title, description } = item;
                                return (
                                    <div className="col-md-6 col-sm-6" key={index}>
                                        <div className="work_process_item">
                                            <div className="serial_number">{num}</div>
                                            <h3 className="item_title">{title}</h3>
                                            <p className="mb-0">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}

                            {/* <div className="col-md-6 col-sm-6">
                                <div className="work_process_item">
                                    <div className="serial_number">02</div>
                                    <h3 className="item_title">Timing</h3>
                                    <p className="mb-0">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="work_process_item">
                                    <div className="serial_number">03</div>
                                    <h3 className="item_title">Conducting a session</h3>
                                    <p className="mb-0">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="work_process_item">
                                    <div className="serial_number">04</div>
                                    <h3 className="item_title">Satisfied review</h3>
                                    <p className="mb-0">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WorkProcess