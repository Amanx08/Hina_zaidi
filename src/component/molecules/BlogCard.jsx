import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const BlogCard = ({data}) => {
    const {tag, date, img ,  views, comments, title, content , read_more} =  data;
  return (
    <div className="blog_item">
    <div className="blog_image">
        <a className="blog_image_wrap" href="blog_details.html">
            <img src={ img || "/images/blogs/blog_image_5-min.jpg"} alt="Talking Minds - Top seven challenges in counselling children" />
        </a>
    </div>
    <div className="blog_content">
        <ul className="post_category unordered_list">
            <li><a href="#!">{tag}</a></li>
        </ul>
        <ul className="post_meta unordered_list">
            <li>{date}</li>
            <li><a href="#!">{views}</a></li>
            <li><a href="#!">{comments} Comments</a></li>
        </ul>
        <h3 className="item_title">
            <a href="blog_details.html">
              {title}
            </a>
        </h3>
        <p>
          {content}
        </p>
        <a className="btn-link" href="blog_details.html">
            <span className="btn_text">{read_more || "Read More"}</span>
            <span className="btn_icon">                          <FontAwesomeIcon icon={faArrowRight} />
            </span>
        </a>
    </div>
</div>
  )
}

export default BlogCard