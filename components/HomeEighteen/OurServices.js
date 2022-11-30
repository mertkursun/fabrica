import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class OurServices extends Component {
    render() {
        return (
            <section id="services" className="services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <ScrollAnimation 
                            animateIn='fadeInLeft'
                            initiallyVisible={true}
                            animateOnce={true} 
                        >
                            <span>Servisler</span>
                            <h2>Uçtan Uca <b>Dijital</b> Çözümler</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </ScrollAnimation>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="single-services">
                                    <div className="services-image">
                                        <img src="/images/services/service1.jpg" alt="image" />

                                        <div className="icon">
                                            <i className="icofont-headphone-alt-3"></i>
                                        </div>
                                    </div>

                                    <div className="services-content">
                                        <h3>SAP Enersys C.E.</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="single-services">
                                    <div className="services-image">
                                        <img src="/images/services/service2.jpg" alt="image" />

                                        <div className="icon">
                                            <i className="icofont-anchor"></i>
                                        </div>
                                    </div>

                                    <div className="services-content">
                                        <h3>SAP Marketing Cloud</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="single-services">
                                    <div className="services-image">
                                        <img src="/images/services/service3.jpg" alt="image" />

                                        <div className="icon">
                                            <i className="icofont-puzzle"></i>
                                        </div>
                                    </div>

                                    <div className="services-content">
                                        <h3>SAP Customer Data Cloud</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="single-services">
                                    <div className="services-image">
                                        <img src="/images/services/service4.jpg" alt="image" />

                                        <div className="icon">
                                            <i className="icofont-tools"></i>
                                        </div>
                                    </div>

                                    <div className="services-content">
                                        <h3>SAP Commerce Cloud</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="single-services">
                                    <div className="services-image">
                                        <img src="/images/services/service5.jpg" alt="image" />

                                        <div className="icon">
                                            <i className="icofont-settings-alt"></i>
                                        </div>
                                    </div>

                                    <div className="services-content">
                                        <h3>Mobil Çözümler</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="single-services">
                                    <div className="services-image">
                                        <img src="/images/services/service6.jpg" alt="image" />

                                        <div className="icon">
                                            <i className="icofont-puzzle"></i>
                                        </div>
                                    </div>

                                    <div className="services-content">
                                        <h3>Web Çözümler</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurServices;