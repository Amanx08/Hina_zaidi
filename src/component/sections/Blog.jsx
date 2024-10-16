import React from 'react'
import BlogCard from '../molecules/BlogCard'
import useParseSliceData from '@/hooks/useslice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Blog = ({ data }) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    return (
        <section className="blog_section section_space_lg">
            <div className="container">
                <div className="section_heading">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className="section_heading_text mb-0">{heading}</h2>
                        </div>
                        <div className="col-md-6 d-none d-md-flex justify-content-end">
                            <a className="btn btn-primary" href="blog.html">
                                <span className="btn_text" data-text="Read More Articles">
                                    {btn_title || "Read More"}
                                </span>
                                <span className="btn_icon">
                                <FontAwesomeIcon icon={faArrowRight} />

                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {cardData && cardData.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                <BlogCard data={item}/>
                            </div>
                        )
                    })}


                </div>
                <div className="btn_wrap pb-0 text-center d-md-none d-block">
                    <a className="btn btn-primary" href="blog.html">
                        <span className="btn_text" data-text="Read More Articles">
                            Read More Articles
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

export default Blog