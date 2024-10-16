"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown , faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const router = usePathname();

    const dropdown1 = ["/service" , "/servicedetail" ,"/servicedetail2"];
    const dropdown2 = ["/ourteam" ,"/ourgallery" ,"/blog" , "/bloglist" , "/blogdetails" , "/faq"]
    const dropdown3 = ["/blog" , "/bloglist" , "/blogdetails"];
    const dropdown4 = ["/contact" , "/contactinformation" , "/contactdetails"]

    return (
        <header className="site_header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-5">
                        <div className="site_logo">
                            <Link className="site_link" href="/">
                                <img src="/images/logo.png" alt="Site Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-2">
                        <nav className="main_menu navbar navbar-expand-lg">
                            <div className="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">
                                <ul className="main_menu_list unordered_list">
                                    
                                    <li className={router == "/about" ? "active" : ""}>
                                        <Link className="nav-link" href="/about">About</Link>
                                    </li><li className={router == "/service" ? "active" : ""}>
                                        <Link className="nav-link" href="/service">Service</Link>
                                    </li>
                                    <li className={router == "/contact" ? "active" : ""}>
                                        <Link className="nav-link" href="/contact">Contact</Link>
                                    </li>
                                    {/* <li className={`dropdown ${router == dropdown1.includes(router) ? "active" : ""}`}>
                                        <Link className="nav-link" href="#" id="programs_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Programs <FontAwesomeIcon icon={faCaretDown} />
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="programs_submenu">
                                            <li ><Link href="/service">Our Services</Link></li>
                                            <li><Link href="/servicedetail">Depression Therapy</Link></li>
                                            <li><Link href="/servicedetail2">Relationships</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className={`dropdown ${router == dropdown2.includes(router) ? "active" : ""}`}>
                                        <Link className="nav-link" href="#" id="help_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Help <FontAwesomeIcon icon={faCaretDown} />
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="help_submenu">
                                            <li><Link href="/ourteam">Our Team</Link></li>
                                            <li><Link href="/ourgallery">Our Gallery</Link></li>
                                            <li className={`dropdown ${router == dropdown3.includes(router) ? "active" : ""}`}>
                                                <Link className="nav-link" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Blogs <FontAwesomeIcon icon={faCaretRight} />
                                                </Link>
                                                <ul className="dropdown-menu" aria-labelledby="blog_submenu">
                                                    <li><Link href="/blog">Blog Grid</Link></li>
                                                    <li><Link href="/bloglist">Blog Listing</Link></li>
                                                    <li><Link href="/blogdetails">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/faq">F.A.Q.</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`dropdown ${router == dropdown4.includes(router) ? "active" : ""}`}>
                                                <Link className="nav-link" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Contact <FontAwesomeIcon icon={faCaretDown} />
                                                </Link>
                                                <ul className="dropdown-menu" aria-labelledby="blog_submenu">
                                                    <li className={router == "/contact" ? "active" : ""}><Link href="/contact">Clinic Contact</Link></li>
                                                    <li className={router == "/contactinformation" ? "active" : ""}><Link href="/contactinformation">Contact Information</Link></li>
                                                    <li className={router == "/contactdetails" ? "active" : ""}><Link href="/contactdetails">Contact Details</Link></li>
                                                </ul>
                                    </li> */}
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-5">
                        <ul className="header_btns_group unordered_list justify-content-end">
                            <li>
                                <button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="far fa-bars" />
                                </button>
                            </li>
                            <li>

                                {/* <Link className="btn_hotline" href="tel:+91 6230099005">
                                    <span className="btn_icon">
                                        <i className="fa-solid fa-phone" />
                                    </span>
                                    <span className="btn_text"></span>
                                </Link> */}

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header