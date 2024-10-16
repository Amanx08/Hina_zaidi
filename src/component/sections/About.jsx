
import Link from 'next/link';
import useParseSliceData from '@/hooks/useslice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight , faPlay , faCheck , faSortUp } from '@fortawesome/free-solid-svg-icons';
const About = ({ data }) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    return (
        <section className="about_section section_space_lg">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6 order-lg-last">
                        <div className="image_widget">
                            <img src={img || "/images/about/about_image_1-min.jpg"} alt="About Image" />
                            {/* <div className="image_shape bg_primary_light" /> */}
                            {/* <div className="about_video_icon">
                                <a className="video_play_btn popup_video" href={ videolink || "https://www.youtube.com/watch?v=7e90gBu4pas"}>
                                   <FontAwesomeIcon icon={faPlay} />
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about_content">
                            <div className="section_heading mb-4">
                                <h2 className="section_heading_text">
                                    <mark>Dr. Merry Stone</mark> {heading}
                                </h2>
                                <p className="section_heading_description mb-0 ">
                                    {subheading}
                                </p>
                            </div>
                            <div className="row">
                                {cardData && cardData.map((item, index) => {
                                    return (<div key={index} className="col-md-5 col-sm-6">
                                        <ul className="info_list unordered_list_block">

                                            <li >
                                                <span className="info_icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                <span className="info_text">{item.title}</span>
                                            </li>


                                        </ul>
                                    </div>)
                                })}

                                {/* <div className="col-md-5 col-sm-6">
                                    <ul className="info_list unordered_list_block">
                                        <li>
                                            <span className="info_icon">
                                                <i className="fa-light fa-circle-check" />
                                            </span>
                                            <span className="info_text">Unique technique</span>
                                        </li>
                                        <li>
                                            <span className="info_icon">
                                                <i className="fa-light fa-circle-check" />
                                            </span>
                                            <span className="info_text">Couple Problem</span>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                            <div className="btn_wrap pb-0">
                                <a className="btn btn-primary" href="about.html">
                                    <span className="btn_text" data-text="Learn More">
                                      {btn_title || "Learn More"}  
                                    </span>
                                    <span className="btn_icon">
                                      <FontAwesomeIcon icon={faSquareArrowUpRight} />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About