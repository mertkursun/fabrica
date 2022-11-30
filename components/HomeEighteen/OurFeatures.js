import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class OurFeaturesTwo extends Component {
    render() {
        return (
            <section className="features-area ptb-100">
                <div className="container">
                    <ScrollAnimation 
                        animateIn='fadeInLeft'
                        initiallyVisible={true}
                        animateOnce={true} 
                        
                    > 
                        <div className="section-title">
                            <span>Verdiğimiz Hizmetler</span>
                            <h2>Müşterilerimize <b>En İyi</b> Hizmeti Sunuyoruz</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div> 
                    </ScrollAnimation>

                    <div className="row">
                        <div className="col-lg-4 col-md-6"> 
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-edit"></i>
                                </div>
                                <h3>BT Yönetimi</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                            </ScrollAnimation> 
                        </div>
                         
                        <div className="col-lg-4 col-md-6"> 
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="single-features active">
                                    <div className="icon">
                                        <i className="icofont-upload-alt"></i>
                                    </div>
                                    <h3>Analitik Çözümler</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div> 
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="single-features">
                                    <div className="icon">
                                        <i className="icofont-pie-chart"></i>
                                    </div>
                                    <h3>Tasarım</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div> 
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurFeaturesTwo;