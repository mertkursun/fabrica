import React, { Component } from 'react';

class OurServices extends Component {
    render() {
        return (
            <section id="services" className="services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>What We Do</span>
                        <h2>Our <b>Services</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-image">
                                    <img src="/images/services/service1.jpg" alt="image" />

                                    <div className="icon">
                                        <i className="icofont-headphone-alt-3"></i>
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>Web Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-image">
                                    <img src="/images/services/service2.jpg" alt="image" />

                                    <div className="icon">
                                        <i className="icofont-anchor"></i>
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>Branding Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-image">
                                    <img src="/images/services/service3.jpg" alt="image" />

                                    <div className="icon">
                                        <i className="icofont-puzzle"></i>
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>Digital Marketing</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-image">
                                    <img src="/images/services/service4.jpg" alt="image" />

                                    <div className="icon">
                                        <i className="icofont-tools"></i>
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>App Development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-image">
                                    <img src="/images/services/service5.jpg" alt="image" />

                                    <div className="icon">
                                        <i className="icofont-settings-alt"></i>
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>Easy Customization</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-image">
                                    <img src="/images/services/service6.jpg" alt="image" />

                                    <div className="icon">
                                        <i className="icofont-puzzle"></i>
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>Fully Responsive</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurServices;