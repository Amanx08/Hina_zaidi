import React from 'react'

const Footer = () => {
    return (
        <footer className="site_footer bg_primary">
            <div className="container">
                <div className="site_footer_content">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="site_logo">
                                <a className="site_link" href="index.html">
                                    <img src="/images/footerlogo.png" alt="Footer logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-3">
                            <h3 className='mb-3'>About us</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptates dolores tenetur facilis optio nihil praesentium similique iure fuga molestiae!</p>
                        </div><div className="col-lg-3">
                            <h3 className='mb-3'>Quick Links</h3>
                            <ul className="info_list">
                                <li>
                                    <a href="/">
                                        
                                        <span className="info_text">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/about">
                                        
                                        <span className="info_text">About</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/service">
                                        
                                        <span className="info_text">Service</span>
                                    </a>
                                </li>
                               
                                <li>

                                    <a href="/contact">
                                        
                                        <span className="info_text">Contacts</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 ">
                            <h4 className='mb-3'>Contact Info</h4>
                            <p>info@gmail.com</p>
                            <p>+ 785 7854 2547</p>
                            <ul className="social_links unordered_list">
                                <li><a href="#!"><i className="fa-brands fa-facebook-f" /></a></li>
                                <li><a href="#!"><i className="fa-brands fa-instagram" /></a></li>
                                <li><a href="#!"><i className="fa-brands fa-twitter" /></a></li>
                                <li><a href="#!"><i className="fa-brands fa-whatsapp" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright_widget text-center">
                    <p className="copyright_text m-0">Copyright © 2024 <b>heenazaidi.com</b></p>
                </div>
            </div>
        </footer>

    )
}

export default Footer