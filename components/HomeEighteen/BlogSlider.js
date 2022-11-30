import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const options = {
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ],
    responsive:{
        0: {
            items:1,
        },
        768: {
            items:2,
        },
        1200: {
            items:3,
        }
    }
}

class BlogSlider extends Component {

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
            <section id="blog" className="blog-area ptb-100 bg-image">
                <div className="container">
                    <ScrollAnimation 
                        animateIn='fadeInUp'
                        initiallyVisible={true}
                        animateOnce={true} 
                    >  
                        <div className="section-title">
                            <span>Bilgi Güncellemesi!</span>
                            <h2>Son <b>Haberlerimiz</b></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </ScrollAnimation>

                    {this.state.display ? <OwlCarousel 
                    className="blog-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <Link href="#">
                                    <a target="_blank">
                                        <img src="/images/blog/blog1.jpg" alt="image" />
                                    </a>
                                </Link>

                                <div className="post-tag">
                                    <Link href="#">
                                        <a>Technology</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">25 Feb, 2020</span>
                                <h3>
                                    <Link href="#">
                                        <a target="_blank">Lorem ipsum dolor sit amet</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                <Link href="#">
                                    <a className="read-more-btn" target="_blank">
                                        Read More 
                                        <i className="icofont-double-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-blog-post">
                            <div className="blog-image">
                                <Link href="#">
                                    <a target="_blank">
                                        <img src="/images/blog/blog2.jpg" alt="image" />
                                    </a>
                                </Link>

                                <div className="post-tag">
                                    <Link href="#">
                                        <a>Agency</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">27 Feb, 2020</span>
                                <h3>
                                    <Link href="#">
                                        <a target="_blank">Lorem ipsum dolor sit amet</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                
                                <Link href="#">
                                    <a className="read-more-btn" target="_blank">
                                        Read More 
                                        <i className="icofont-double-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-blog-post">
                            <div className="blog-image">
                                <Link href="#">
                                    <a target="_blank">
                                        <img src="/images/blog/blog3.jpg" alt="image" />
                                    </a>
                                </Link>

                                <div className="post-tag">
                                    <Link href="#">
                                        <a>IT</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">28 Feb, 2020</span>
                                <h3>
                                    <Link href="#">
                                        <a target="_blank">Lorem ipsum dolor sit amet</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                
                                <Link href="#">
                                    <a className="read-more-btn" target="_blank">
                                        Read More 
                                        <i className="icofont-double-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-blog-post">
                            <div className="blog-image">
                                <Link href="#">
                                    <a target="_blank">
                                        <img src="/images/blog/blog4.jpg" alt="image" />
                                    </a>
                                </Link>

                                <div className="post-tag">
                                    <Link href="#">
                                        <a>Creative</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <span className="date">29 Feb, 2020</span>
                                <h3>
                                    <Link href="#">
                                        <a target="_blank">Lorem ipsum dolor sit amet</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                
                                <Link href="#">
                                    <a className="read-more-btn" target="_blank">
                                        Read More 
                                        <i className="icofont-double-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default BlogSlider;