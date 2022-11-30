import React, { Component } from 'react';
import Link from 'next/link';

class WhyWeDifferent extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section id="why-we-different" className="why-we-different ptb-100 bg-image">
                <div className="container">
                    <div className="section-title">
                        <span>Highly Creative Solutions</span>
                        <h2>Why we are <b>Different</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="tab">
                                {/* Tabs Nav */}
                                <ul className="tabs">
                                    <li
                                        className="current"
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                    >
                                        <span>
                                            Speed flexibility
                                        </span>
                                    </li>
                                    <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                        <span>
                                            Profeesional work
                                        </span>
                                    </li>
                                    <li onClick={(e) => this.openTabSection(e, 'tab3')}>
                                        <span>
                                            Experienced staff
                                        </span>
                                    </li>
                                    <li onClick={(e) => this.openTabSection(e, 'tab4')}>
                                        <span>
                                            Customer support
                                        </span>
                                    </li>
                                </ul>

                                <div className="tab_content">
                                    {/* Tabs Item 01 */}
                                    <div id="tab1" className="tabs_item">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-12 why-we-different-content">
                                                <div className="tabs_item_content">
                                                    <h3>Speed Flexibility</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>

                                                    <ul>
                                                        <li>Creative Design</li>
                                                        <li>Retina Ready</li>
                                                        <li>Modern Design</li>
                                                        <li>Digital Marketing & Branding</li>
                                                        <li>Awesome Design</li>
                                                        <li>We are Professional</li>
                                                        <li>We are Creative</li>
                                                        <li>We are Unique</li>
                                                    </ul>

                                                    <Link href="#portfolio">
                                                        <a className="btn btn-primary">Our Work</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-12 why-we-different-img">
                                                <div className="tabs_item_img">
                                                    <img src="/images/why-we-different1.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tabs Item 02 */}
                                    <div id="tab2" className="tabs_item">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-12 why-we-different-img">
                                                <div className="tabs_item_img">
                                                    <img src="/images/why-we-different2.jpg" alt="img" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12 why-we-different-content">
                                                <div className="tabs_item_content">
                                                    <h3>Profeesional Work</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>

                                                    <ul>
                                                        <li>Creative Design</li>
                                                        <li>Retina Ready</li>
                                                        <li>Modern Design</li>
                                                        <li>Digital Marketing & Branding</li>
                                                        <li>Awesome Design</li>
                                                        <li>We are Professional</li>
                                                        <li>We are Creative</li>
                                                        <li>We are Unique</li>
                                                    </ul>

                                                    <Link href="#portfolio">
                                                        <a className="btn btn-primary">Our Work</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tabs Item 03 */}
                                    <div id="tab3" className="tabs_item">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-12 why-we-different-content">
                                                <div className="tabs_item_content">
                                                    <h3>Experience Staff</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>

                                                    <ul>
                                                        <li>Creative Design</li>
                                                        <li>Retina Ready</li>
                                                        <li>Modern Design</li>
                                                        <li>Digital Marketing & Branding</li>
                                                        <li>Awesome Design</li>
                                                        <li>We are Professional</li>
                                                        <li>We are Creative</li>
                                                        <li>We are Unique</li>
                                                    </ul>

                                                    <Link href="#portfolio">
                                                        <a className="btn btn-primary">Our Work</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-12 why-we-different-img">
                                                <div className="tabs_item_img">
                                                    <img src="/images/why-we-different3.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tabs Item 04 */}
                                    <div id="tab4" className="tabs_item">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-12 why-we-different-img">
                                                <div className="tabs_item_img">
                                                    <img src="/images/why-we-different4.jpg" alt="img" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12 why-we-different-content">
                                                <div className="tabs_item_content">
                                                    <h3>24/7 Support</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                                    
                                                    <ul>
                                                        <li>Creative Design</li>
                                                        <li>Retina Ready</li>
                                                        <li>Modern Design</li>
                                                        <li>Digital Marketing & Branding</li>
                                                        <li>Awesome Design</li>
                                                        <li>We are Professional</li>
                                                        <li>We are Creative</li>
                                                        <li>We are Unique</li>
                                                    </ul>

                                                    <Link href="#portfolio">
                                                        <a className="btn btn-primary">Our Work</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyWeDifferent;