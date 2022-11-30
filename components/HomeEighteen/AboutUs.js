import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class AboutUsTwo extends Component {
    render() {
        return (
            <section id="about" className="about-area ptb-100 bg-image2 overx-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="row about-image">
                                <div className="col-6 col-lg-6 col-md-6">
                                    <ScrollAnimation 
                                        animateIn='fadeInLeft'
                                        initiallyVisible={true}
                                        animateOnce={true}
                                    >
                                        <div className="image">
                                            <img src="/images/about-img1.jpg" alt="about" />
                                        </div> 
                                    </ScrollAnimation>
                                </div>
                                 
                                <div className="col-6 col-lg-6 col-md-6">
                                    <ScrollAnimation 
                                        animateIn='fadeInLeft'
                                        initiallyVisible={true}
                                        animateOnce={true}
                                    >
                                        <div className="image">
                                            <img src="/images/about-img2.jpg" alt="about" />
                                        </div> 
                                    </ScrollAnimation>
                                </div>

                                <div className="col-6 col-lg-6 col-md-6">
                                    <ScrollAnimation 
                                        animateIn='fadeInLeft'
                                        initiallyVisible={true}
                                        animateOnce={true}
                                    >
                                        <div className="image mt-30">
                                            <img src="/images/about-img3.jpg" alt="about" />
                                        </div>
                                    </ScrollAnimation>
                                </div>

                                <div className="col-6 col-lg-6 col-md-6">
                                    <ScrollAnimation 
                                        animateIn='fadeInLeft'
                                        initiallyVisible={true}
                                        animateOnce={true}
                                    >
                                        <div className="image mt-30">
                                            <img src="/images/about-img4.jpg" alt="about" />
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <ScrollAnimation 
                                    animateIn='fadeInRight'
                                    initiallyVisible={true}
                                    animateOnce={true}
                                >
                                    <span>Biz Kimiz?</span>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                    animateIn='fadeInRight'
                                    initiallyVisible={true}
                                    animateOnce={true}
                                >
                                    <h2>We Are Digital <b>Marketing</b> & Branding</h2>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                    animateIn='fadeInRight'
                                    initiallyVisible={true}
                                    animateOnce={true}
                                >
                                    <p>SAP danışmalığı alanındaki tutku ve tecrübemizle müşteri ihtiyaçlarının detaylı analizi neticesinde en yüksel proje yatırımı getirisinin sağlanmasını amaçlar.</p>
                                </ScrollAnimation>
 
                                <ScrollAnimation 
                                    animateIn='fadeInRight'
                                    initiallyVisible={true}
                                    animateOnce={true}
                                >
                                    <ul>
                                        <li>SAP Enersys C.E.</li>
                                        <li>SAP Marketing</li>
                                        <li>SAP Cloud</li>
                                        <li>SAP Customer Data Cloud</li>
                                        <li>SAP Commerce Cloud</li>
                                        <li>Mobil Çözümler</li>
                                        <li>Web Çözümler</li>
                                    </ul>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                    animateIn='fadeInRight'
                                    initiallyVisible={true}
                                    animateOnce={true}
                                >
                                    <p>Dünya genelinde uygulama danışmanlığı ve destek süreçlerinde hizmet vererek, projelerin verimliliği ve etkinliğini arttırmak için SAP CX çözümlerini müşterilerin iş hedeflerine entegre eder.</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUsTwo;