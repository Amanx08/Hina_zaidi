import React from 'react'

const Loader = () => {
    return (
        <section className="page_banner decoration_wrapper">
        <div className="container ">
            <div className="page-loader">
                {/* <img src='/images/footerlogo.png' className='mb-10' alt='footer loder' /> */}
            <div className="wrapper">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="shadow" />
                <div className="shadow" />
                <div className="shadow" />
                <span>Loading...</span>
            </div>
            </div>
        </div>

        {/* <div className="decoration_item shape_leaf_1">
            <img src="/images/shapes/shape_leaf_left.svg" alt="Shape Leaf - Talking Minds - Psychotherapist Site Template" />
        </div>
        <div className="decoration_item shape_leaf_2">
            <img src="/images/shapes/shape_leaf_right.svg" alt="Shape Leaf - Talking Minds - Psychotherapist Site Template" />
        </div> */}

    </section>
        

    )
}

export default Loader