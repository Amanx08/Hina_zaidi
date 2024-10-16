import React from 'react'
import useParseSliceData from '@/hooks/useslice';

const Counter = ({data}) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    return (
        <section className="funfact_section">
            <div className="container">
                <div className="counter_wrapper">
                    <div className="row align-items-center text-center">

                        {cardData && cardData.map((item , index)=>{
                            const {title , value , subtitle , count} = item;
                           return (
                       <div className="col-lg-4 col-md-4 col-sm-4" key={index}>
                            <div className="counter_item">
                                <div className="counter_value">
                                    <span className="odometer" data-count={value}>0</span>
                                    <span>{count}</span>
                                </div>
                                <h3 className="counter_title">{title}</h3>
                                <p className="counter_description mb-0">
                                    {subtitle}
                                </p>
                            </div>
                        </div>

                           )
                        })}
                        
                        {/* <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="counter_item">
                                <div className="counter_value">
                                    <span className="odometer" data-count={840}>0</span>
                                    <span>+</span>
                                </div>
                                <h3 className="counter_title">Patients received help</h3>
                                <p className="counter_description mb-0">
                                    This year
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="counter_item">
                                <div className="counter_value">
                                    <span className="odometer" data-count={98}>0</span>
                                    <span>%</span>
                                </div>
                                <h3 className="counter_title">Positive Feedback</h3>
                                <p className="counter_description mb-0">
                                    From our doctors
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Counter