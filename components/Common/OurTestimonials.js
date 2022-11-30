import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ],
    responsive: {
        0: {
            items:1,
        },
        768: {
            items:1,
        },
        1024: {
            items:2,
        }
    }
}

class OurTestimonials extends Component {

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
            <section id="testimonials" className="testimonial-area ptb-100 bg-image">
                <div className="container">
                    <div className="section-title">
                        <span>What people say about us</span>
                        <h2>Our <b>Testimonial</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    
                    {this.state.display ? <OwlCarousel 
                        className="testimonial-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="testimonial-item">
                            <div className="client-image">
                                <img src="/images/author/author1.jpg" alt="image" />
                            </div>

                            <div className="testimonial-content">
                                <div className="desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
                                </div>

                                <div className="client-info">
                                    <h3>John Smith</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>
            
                        <div className="testimonial-item">
                            <div className="client-image">
                                <img src="/images/author/author2.jpg" alt="image" />
                            </div>

                            <div className="testimonial-content">
                                <div className="desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
                                </div>

                                <div className="client-info">
                                    <h3>Steven Smith</h3>
                                    <span>Product Manager</span>
                                </div>
                            </div>
                        </div>
            
                        <div className="testimonial-item">
                            <div className="client-image">
                                <img src="/images/author/author3.jpg" alt="image" />
                            </div>

                            <div className="testimonial-content">
                                <div className="desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
                                </div>

                                <div className="client-info">
                                    <h3>Alina Eva</h3>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </div>
                
                        <div className="testimonial-item">
                            <div className="client-image">
                                <img src="/images/author/author4.jpg" alt="image" />
                            </div>

                            <div className="testimonial-content">
                                <div className="desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
                                </div>

                                <div className="client-info">
                                    <h3>Steven Smith</h3>
                                    <span>Product Manager</span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default OurTestimonials;