import React from 'react'
import Link from "next/link";
import next from 'next';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Page = () => {

return (
<main className="page_content">
   <section className="error_section decoration_wrapper">
  <div className="container">
    <div className="row justify-content-center mb-5">
      <div className="col-lg-7 text-center">
        <h1>404</h1>
        <h2>Oops! That Page Can’t be Found</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.
        </p>
        <div className="btn_wrap pb-0 text-center">
          <Link className="btn btn-primary" href="/">
            <span className="btn_icon me-2 ms-0">
            <FontAwesomeIcon icon={faArrowLeft} />

            </span>
            <span className="btn_text" data-text="Back to Home Page">
              Back to Home Page
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* <ul className="social_links unordered_list justify-content-center">
    <li><a href="#!"><i className="fa-brands fa-facebook-f" /></a></li>
    <li><a href="#!"><i className="fa-brands fa-instagram" /></a></li>
    <li><a href="#!"><i className="fa-brands fa-twitter" /></a></li>
    <li><a href="#!"><i className="fa-brands fa-whatsapp" /></a></li>
  </ul> */}
  <div className="decoration_item shape_leaf_1">
    <img src="/images/shapes/shape_leaf_left_bottom.svg" alt="Shape Leaf - Talking Minds - Psychotherapist Site Template" />
  </div>
  <div className="decoration_item shape_leaf_2">
    <img src="/images/shapes/shape_leaf_right_top.svg" alt="Shape Leaf - Talking Minds - Psychotherapist Site Template" />
  </div>
</section>
</main>

  )
}

export default Page;