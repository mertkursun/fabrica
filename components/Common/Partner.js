import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ],
    responsive:{
        0: {
            items:2,
        },
        480: {
            items:3,
        },
        768: {
            items:4,
        },
        1200: {
            items:5,
        }
    }
}

class Partner extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="partner-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Trusted Client</span>
                        <h2>Our Happy <b>Partners</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="partner-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="partner-item">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/partner/partner1.png" alt="img" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/partner/partner2.png" alt="img" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/partner/partner3.png" alt="img" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/partner/partner4.png" alt="img" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/partner/partner5.png" alt="img" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="#">
                                <a target="_blank">
                                    <img src="/images/partner/partner6.png" alt="img" />
                                </a>
                            </Link>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default Partner;