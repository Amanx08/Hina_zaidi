import React from 'react'
import useParseSliceData from '@/hooks/useslice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Blogdetail = ({ data }) => {
    const { heading, subheading, btn_title, card, img, videolink } = data;
    const cardData = useParseSliceData(card);

    return (
        <section className="blog_details_section section_space_lg pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="details_image">
                            <img src={cardData?.blogImg} alt="Talking Minds - Psychotherapist Site Template" />
                        </div>
                        <div className="details_content">
                            <ul className="post_meta unordered_list mb-4">
                                <li><i className="fa-regular fa-calendar-days" />{cardData?.date}</li>
                                <li><a href="#!"><i className="fa-regular fa-eye" /> {cardData?.views} Views</a></li>
                                <li><a href="#!"><i className="fa-regular fa-comment" /> {cardData?.comments} Comments</a></li>
                            </ul>
                            <p>
                                {cardData?.description}
                            </p>
                            <blockquote>
                                <div className="quote_icon">
                                    <img src="/images/icons/icon_quote.svg" alt="ProMotors - Icon Quote" />
                                </div>
                                <div className="quote_content">
                                    <span className="d-block">
                                        {cardData?.quote}
                                    </span>
                                    <cite title="Dr. Joseph Stevenson">{cardData?.quoteAuthor}</cite>
                                </div>
                            </blockquote>
                            {cardData?.listitem &&   cardData?.listitem.map((item, index) => {
                                return (
                                    <>
                                        <h3 className="details_info_title" key={index}>{index + 1}&nbsp;{item.title}</h3>
                                        <p key={index}>
                                            {item.content}
                                        </p>
                                    </>
                                )
                            })}

                            <div className="row mb-5">
                                <div className="col-md-6 col-sm-6">
                                    <div className="details_image m-0">
                                        <img src="/images/blogs/blog_details_image_2-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="details_image m-0">
                                        <img src="/images/blogs/blog_details_image_3-min.jpg" alt="Talking Minds - Psychotherapist Site Template" />
                                    </div>
                                </div>
                            </div>
                            {/* <h3 className="details_info_title">2. Practice Acceptance</h3>
                            <p>
                                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                            </p> */}
                            {/* <ul className="info_list unordered_list_block mb-5">
                                <li>
                                    <span className="info_icon">
                                        <i className="fa-light fa-circle-check" />
                                    </span>
                                    <span className="info_text">Find solutions instead of complaining</span>
                                </li>
                                <li>
                                    <span className="info_icon">
                                        <i className="fa-light fa-circle-check" />
                                    </span>
                                    <span className="info_text">Practice letting go</span>
                                </li>
                                <li>
                                    <span className="info_icon">
                                        <i className="fa-light fa-circle-check" />
                                    </span>
                                    <span className="info_text">Let beauty in</span>
                                </li>
                            </ul> */}
                            {/* <h3 className="details_info_title">3. Exercise patience</h3>
                            <p>
                                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                            </p>
                            <h3 className="details_info_title">4. Lower your expectations</h3>
                            <p>
                                Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                            </p>
                            <h3 className="details_info_title">5. Remember you both desire harmony</h3>
                            <p>
                                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                            </p> */}
                            <div className="post_tagsandshare">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4 className="wrap_title">Releted Tags</h4>
                                        <ul className="post_tags unordered_list">
                                            <li><a href="#!">Family Problem</a></li>
                                            <li><a href="#!">Therapy</a></li>
                                            <li><a href="#!">Depression</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="wrap_title text-md-end">Share:</h4>
                                        <ul className="social_links unordered_list justify-content-md-end">
                                            <li><a href="#!"><i className="fa-brands fa-facebook-f" /></a></li>
                                            <li><a href="#!"><i className="fa-brands fa-instagram" /></a></li>
                                            <li><a href="#!"><i className="fa-brands fa-twitter" /></a></li>
                                            <li><a href="#!"><i className="fa-brands fa-whatsapp" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="prev_next_post_nav">
                                <a href="#!">
                                    <span className="item_icon">
                                        <i className="fa-regular fa-angle-left" />
                                    </span>
                                    <span className="item_content">
                                        <b>Previous</b>
                                        <strong>The Family as a Small Socity</strong>
                                    </span>
                                </a>
                                <a href="#!">
                                    <span className="item_icon">
                                        <i className="fa-regular fa-angle-right" />
                                    </span>
                                    <span className="item_content">
                                        <b>Next</b>
                                        <strong>Ways to Create Family Harmony</strong>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="blog_post_author">
                            <div className="author_image">
                                <img src="/images/meta/author_image_3-min.png" alt="Talking Minds - Psychotherapist Site Template" />
                            </div>
                            <div className="author_content">
                                <h4 className="author_name">Dr. Merry Rose</h4>
                                <span className="author_designation">Practicing psychologist, Psy. D</span>
                                <p className="mb-0">
                                    Phasellus viverra nulla ut metus varius laoreet. Quisque Nullam quis ante. Etiam sit amet orci eget eros tincidunt. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                </p>
                            </div>
                        </div>
                        <div className="comment_area section_space_lg pb-0">
                            <h3 className="comment_area_title">Comments (3)</h3>
                            <ul className="comment_list_wrap unordered_list_block">
                                <li>
                                    <div className="comment_item">
                                        <div className="author_box">
                                            <div className="author_box_image">
                                                <img src="/images/meta/author_image_1.png" alt="Reviewer Image - Talking Minds - Psychotherapist Site Template" />
                                            </div>
                                            <div className="author_box_content">
                                                <h3 className="author_box_name">Kerry Banks</h3>
                                                <span className="comment_post_date">6 days ago</span>
                                            </div>
                                        </div>
                                        <p className="mb-md-0">
                                            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nam eget dui. Etiam rhoncus.
                                        </p>
                                        <a className="btn_reply" href="#!">
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-reply" />
                                            </span>
                                            <span className="btn_text">Reply</span>
                                        </a>
                                    </div>
                                    <ul className="comment_list_wrap unordered_list_block">
                                        <li>
                                            <div className="comment_item">
                                                <div className="author_box">
                                                    <div className="author_box_image">
                                                        <img src="/images/meta/author_image_3-min.png" alt="Reviewer Image - Talking Minds - Psychotherapist Site Template" />
                                                    </div>
                                                    <div className="author_box_content">
                                                        <h3 className="author_box_name">Dr. Merry Rose</h3>
                                                        <span className="comment_post_date">6 days ago</span>
                                                    </div>
                                                </div>
                                                <p className="mb-md-0">
                                                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nam eget dui. Etiam rhoncus.
                                                </p>
                                                <a className="btn_reply" href="#!">
                                                    <span className="btn_icon">
                                                        <i className="fa-solid fa-reply" />
                                                    </span>
                                                    <span className="btn_text">Reply</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment_item">
                                                <div className="author_box">
                                                    <div className="author_box_image">
                                                        <img src="/images/meta/author_image_2.png" alt="Reviewer Image - Talking Minds - Psychotherapist Site Template" />
                                                    </div>
                                                    <div className="author_box_content">
                                                        <h3 className="author_box_name">John Underwood</h3>
                                                        <span className="comment_post_date">6 days ago</span>
                                                    </div>
                                                </div>
                                                <p className="mb-md-0">
                                                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nam eget dui. Etiam rhoncus.
                                                </p>
                                                <a className="btn_reply" href="#!">
                                                    <span className="btn_icon">
                                                        <i className="fa-solid fa-reply" />
                                                    </span>
                                                    <span className="btn_text">Reply</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="comment_item">
                                        <div className="author_box">
                                            <div className="author_box_image">
                                                <img src="/images/meta/author_image_4.png" alt="Reviewer Image - Talking Minds - Psychotherapist Site Template" />
                                            </div>
                                            <div className="author_box_content">
                                                <h3 className="author_box_name">Dennis White</h3>
                                                <span className="comment_post_date">9 days ago</span>
                                            </div>
                                        </div>
                                        <p className="mb-md-0">
                                            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nam eget dui. Etiam rhoncus.
                                        </p>
                                        <a className="btn_reply" href="#!">
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-reply" />
                                            </span>
                                            <span className="btn_text">Reply</span>
                                        </a>
                                    </div>
                                    <ul className="comment_list_wrap unordered_list_block">
                                        <li>
                                            <div className="comment_item">
                                                <div className="author_box">
                                                    <div className="author_box_image">
                                                        <img src="/images/meta/author_image_3-min.png" alt="Reviewer Image - Talking Minds - Psychotherapist Site Template" />
                                                    </div>
                                                    <div className="author_box_content">
                                                        <h3 className="author_box_name">Dr. Merry Rose</h3>
                                                        <span className="comment_post_date">6 days ago</span>
                                                    </div>
                                                </div>
                                                <p className="mb-md-0">
                                                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nam eget dui. Etiam rhoncus.
                                                </p>
                                                <a className="btn_reply" href="#!">
                                                    <span className="btn_icon">
                                                        <i className="fa-solid fa-reply" />
                                                    </span>
                                                    <span className="btn_text">Reply</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment_item">
                                                <div className="author_box">
                                                    <div className="author_box_image">
                                                        <img src="/images/meta/author_image_2.png" alt="Reviewer Image - Talking Minds - Psychotherapist Site Template" />
                                                    </div>
                                                    <div className="author_box_content">
                                                        <h3 className="author_box_name">John Underwood</h3>
                                                        <span className="comment_post_date">6 days ago</span>
                                                    </div>
                                                </div>
                                                <p className="mb-md-0">
                                                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nam eget dui. Etiam rhoncus.
                                                </p>
                                                <a className="btn_reply" href="#!">
                                                    <span className="btn_icon">
                                                        <i className="fa-solid fa-reply" />
                                                    </span>
                                                    <span className="btn_text">Reply</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="comment_form section_space_lg pb-0">
                            <h3 className="comment_area_title">Leave a comment</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="input_name">Name</label>
                                        <input id="input_name" className="form-control" type="text" name="name" placeholder="Your name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="input_email">Email</label>
                                        <input id="input_email" className="form-control" type="email" name="email" placeholder="Your email" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group mb-4">
                                        <label htmlFor="input_comment">Comment</label>
                                        <textarea id="input_comment" className="form-control" name="comment" placeholder="Your message" defaultdefaultValue={""} />
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id="input_checkbox" />
                                        <label htmlFor="input_checkbox">
                                            Maecenas tempus, tellus eget condimentum rhoncus, sem quam.
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        <span className="btn_text" data-text="Post Comment">
                                            Post Comment
                                        </span>
                                        <span className="btn_icon">
                                            <FontAwesomeIcon icon={faArrowRight}/>
                                        </span>
                                    </button>
                                </div>
                            </div>
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

export default Blogdetail