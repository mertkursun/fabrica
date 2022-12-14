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
                                    <p>SAP dan????mal?????? alan??ndaki tutku ve tecr??bemizle m????teri ihtiya??lar??n??n detayl?? analizi neticesinde en y??ksel proje yat??r??m?? getirisinin sa??lanmas??n?? ama??lar.</p>
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
                                        <li>Mobil ????z??mler</li>
                                        <li>Web ????z??mler</li>
                                    </ul>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                    animateIn='fadeInRight'
                                    initiallyVisible={true}
                                    animateOnce={true}
                                >
                                    <p>D??nya genelinde uygulama dan????manl?????? ve destek s??re??lerinde hizmet vererek, projelerin verimlili??i ve etkinli??ini artt??rmak i??in SAP CX ????z??mlerini m????terilerin i?? hedeflerine entegre eder.</p>
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