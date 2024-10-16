import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SimpleBanner = ({title}) => {
    return (
        <section className="page_banner decoration_wrapper">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="page_title mb-0">{title || "Page Name"}</h1>
                    </div>
                    <div className="col-lg-6">
                        <ul className="breadcrumb_nav unordered_list justify-content-lg-end justify-content-center">
                            <li><a href="/">Home</a></li>
                            <li>{title || "Page Name"}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="decoration_item shape_leaf_1">
                <img src="/images/shapes/shape_leaf_left.svg" alt="Shape Leaf - Talking Minds - Psychotherapist Site Template" />
            </div>
            <div className="decoration_item shape_leaf_2">
                <img src="/images/shapes/shape_leaf_right.svg" alt="Shape Leaf - Talking Minds - Psychotherapist Site Template" />
            </div>
        </section>

    )
}

export default SimpleBanner