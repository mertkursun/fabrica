import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class FunFacts extends Component {
    render() {
        return (
            <div className="funfacts-area-two ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="single-funfact">
                                    <i className="icofont-checked"></i>
                                    <h3>820</h3>
                                    <p>Başarılı Projeler</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="single-funfact">
                                    <i className="icofont-ui-user"></i>
                                    <h3>6523</h3>
                                    <p>Memnun Müşteriler</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="single-funfact">
                                    <i className="icofont-win-trophy"></i>
                                    <h3>50</h3>
                                    <p>Ödüller</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="single-funfact">
                                    <i className="icofont-crown-king"></i>
                                    <h3>20</h3>
                                    <p>Tecrübe Yılı</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFacts;