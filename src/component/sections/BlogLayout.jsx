import React from 'react'
import BlogCard from '../molecules/BlogCard'
import useParseSliceData from '@/hooks/useslice';
const BlogLayout = ({ data, varient }) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);
    console.log(cardData)
    return (
        <section className="blog_section section_space_lg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {varient ? (<>{cardData && cardData.map((item, index) =>
                            <div key={index}>
                                <BlogCard data={item} />
                            </div>
                        )}</>) : (


                            <div className="row">
                                {cardData && cardData.map((item, index) =>
                                    <div className="col-md-6" key={index}>
                                        <BlogCard data={item} />
                                    </div>
                                )}
                            </div>

                        )}


                        <div className="pagination_wrap">
                            <ul className="pagination_nav unordered_list justify-content-center">
                                <li className="active"><a href="#!">1</a></li>
                                <li><a href="#!">2</a></li>
                                <li><a href="#!">3</a></li>
                                <li><a href="#!">...</a></li>
                                <li><a href="#!">10</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <aside className="sidebar ps-lg-4">
                            <div className="form-group">
                                <input id="sidebar_search" className="form-control" type="search" name="search" placeholder="Search" />
                                <button type="submit" className="input_icon">
                                    <i className="fa-regular fa-magnifying-glass" />
                                </button>
                            </div>
                            <div className="sidebar_widget">
                                <h3 className="sidebar_widget_title">
                                    <span className="title_icon">
                                        <img src="/images/site_logo/favourite_icon.svg" alt="Talking Minds - Psychotherapist Site Template" />
                                    </span>
                                    <span className="title_text">Categories</span>
                                </h3>
                                <ul className="post_category_list unordered_list_block">
                                    <li>
                                        <a href="#!">
                                            <span className="category_name">Relationship</span>
                                            <span className="category_counter">12</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <span className="category_name">Family Problem</span>
                                            <span className="category_counter">23</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <span className="category_name">Couple Problem</span>
                                            <span className="category_counter">36</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <span className="category_name">Parenting</span>
                                            <span className="category_counter">16</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <span className="category_name">Depression</span>
                                            <span className="category_counter">17</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <span className="category_name">Business problems</span>
                                            <span className="category_counter">21</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar_widget">
                                <h3 className="sidebar_widget_title">
                                    <span className="title_icon">
                                        <img src="/images/site_logo/favourite_icon.svg" alt="Talking Minds - Psychotherapist Site Template" />
                                    </span>
                                    <span className="title_text">Recommended Articles</span>
                                </h3>
                                <ul className="reecommended_post_group unordered_list_block">
                                    <li>
                                        <div className="blog_item_small">
                                            <div className="blog_image">
                                                <a className="blog_image_wrap" href="blog_details.html">
                                                    <img src="/images/blogs/small_blog_image_1.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                                                </a>
                                            </div>
                                            <div className="blog_content">
                                                <h3 className="item_title">
                                                    <a href="blog_details.html">
                                                        The Importance of Parent Involvement
                                                    </a>
                                                </h3>
                                                <ul className="post_meta unordered_list">
                                                    <li>26 July 2023</li>
                                                    <li><a href="#!">120 Views</a></li>
                                                    <li><a href="#!">1 Comments</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="blog_item_small">
                                            <div className="blog_image">
                                                <a className="blog_image_wrap" href="blog_details.html">
                                                    <img src="/images/blogs/small_blog_image_2.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                                                </a>
                                            </div>
                                            <div className="blog_content">
                                                <h3 className="item_title">
                                                    <a href="blog_details.html">
                                                        Proven techniques to improve memory and remember more
                                                    </a>
                                                </h3>
                                                <ul className="post_meta unordered_list">
                                                    <li>26 July 2023</li>
                                                    <li><a href="#!">120 Views</a></li>
                                                    <li><a href="#!">1 Comments</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="blog_item_small">
                                            <div className="blog_image">
                                                <a className="blog_image_wrap" href="blog_details.html">
                                                    <img src="/images/blogs/small_blog_image_3.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                                                </a>
                                            </div>
                                            <div className="blog_content">
                                                <h3 className="item_title">
                                                    <a href="blog_details.html">
                                                        Establish healthy boundaries at work
                                                    </a>
                                                </h3>
                                                <ul className="post_meta unordered_list">
                                                    <li>26 July 2023</li>
                                                    <li><a href="#!">120 Views</a></li>
                                                    <li><a href="#!">1 Comments</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar_widget">
                                <h3 className="sidebar_widget_title">
                                    <span className="title_icon">
                                        <img src="/images/site_logo/favourite_icon.svg" alt="Talking Minds - Psychotherapist Site Template" />
                                    </span>
                                    <span className="title_text">Popular Tags</span>
                                </h3>
                                <ul className="post_tags unordered_list">
                                    <li><a href="#!">Family Problem</a></li>
                                    <li><a href="#!">Therapy</a></li>
                                    <li><a href="#!">Teenagers</a></li>
                                    <li><a href="#!">Depression</a></li>
                                    <li><a href="#!">Life Balance</a></li>
                                    <li><a href="#!">Work</a></li>
                                    <li><a href="#!">Couple Problem</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BlogLayout