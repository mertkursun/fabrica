import React, { Component } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

class CtaArea extends Component {
    render() {
        return (
            <div className="cta-area overx-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <ScrollAnimation 
                                animateIn='fadeInLeft'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="cta-content">
                                    <h3>İşinizi Büyüten Her Türlü <b>Bilişim Hizmetlerini</b> Gerçekleştiriyoruz</h3>
                                    <span>Mükemmellik tahmini, tahminde dikkate değer bir şekilde sevk edilir. Yani geçmiş hayat. Kendini şımartmaya devam et.</span>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-4 text-right">
                            <ScrollAnimation 
                                animateIn='fadeInRight'
                                initiallyVisible={true}
                                animateOnce={true} 
                            > 
                                <Link href="#contact">
                                    <a className="btn btn-primary">Bize Ulaşın</a>
                                </Link>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaArea;