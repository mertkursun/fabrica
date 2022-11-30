import React, { Component } from 'react';
import Lightbox from "react-image-lightbox";
import Link from 'next/link';
const isServer = typeof window === 'undefined';
const mixitup = !isServer ? require('mixitup') : null;

const images = [
    "/images/works/work1.jpg",
    "/images/works/work2.jpg",
    "/images/works/work3.jpg",
    "/images/works/work4.jpg",
    "/images/works/work5.jpg",
    "/images/works/work6.jpg",
];

class OurPortfolio extends Component {

    state = {
        photoIndex: 0,
        isOpen: false
    };

    componentDidMount() {
        mixitup("#mix-wrapper", {
            animation: {
                effects: "fade rotateZ(0deg)",
                duration: 700
            },
            classNames: {
                block: "programs",
                elementFilter: "filter-btn",
            },
            selectors: {
                target: ".mix-target"
            }
        });
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <section id="portfolio" className="portfolio-area ptb-100 bg-image">
                <div className="container">
                    <div className="section-title">
                        <span>Our Latest Work</span>
                        <h2>Our <b>Portfolio</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    {/* Shorting Menu */}
                    <div className="shorting-menu">
                        <button className="filter" data-filter="all">All</button>
                        <button className="filter" data-filter=".design">Design</button>
                        <button className="filter" data-filter=".seo">SEO</button>
                        <button className="filter" data-filter=".branding">Branding</button>
                        <button className="filter" data-filter=".print">Print</button>
                        <button className="filter" data-filter=".video">Video</button>
                    </div>
           
                    <div className="shorting">
                        <div className="row" id="mix-wrapper">
                            <div className="col-lg-4 col-sm-6 mix design mix-target">
                                <div className="single-work">
                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 0, isOpen: true })}}
                                        ></a>
                                    </Link>

                                    <div className="work-image">
                                        <img src={images[0]} alt="Work Image" />

                                        <div className="work-overlay">
                                            <h3>Digital Marketing</h3>
                                            <span>UI/UX</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 mix print seo mix-target">
                                <div className="single-work">
                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 1, isOpen: true })}}
                                        ></a>
                                    </Link>

                                    <div className="work-image">
                                        <img src={images[1]} alt="Work Image" />

                                        <div className="work-overlay">
                                            <h3>React Project</h3>
                                            <span>SEO</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 mix video branding mix-target">
                                <div className="single-work">
                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 2, isOpen: true })}}
                                        ></a>
                                    </Link>

                                    <div className="work-image">
                                        <img src={images[2]} alt="Work Image" />

                                        <div className="work-overlay">
                                            <h3>Branding Marketing</h3>
                                            <span>Branding</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 mix design print mix-target">
                                <div className="single-work">
                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 3, isOpen: true })}}
                                        ></a>
                                    </Link>

                                    <div className="work-image">
                                        <img src={images[3]} alt="Work Image" />

                                        <div className="work-overlay">
                                            <h3>Printing Design</h3>
                                            <span>Print</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 mix branding video mix-target">
                                <div className="single-work">
                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 4, isOpen: true })}}
                                        ></a>
                                    </Link>

                                    <div className="work-image">
                                        <img src={images[4]} alt="Work Image" />

                                        <div className="work-overlay">
                                            <h3>Video Marketing</h3>
                                            <span>Video</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 mix seo design mix-target">
                                <div className="single-work">
                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 5, isOpen: true })}}
                                        ></a>
                                    </Link>

                                    <div className="work-image">
                                        <img src={images[5]} alt="Work Image" />

                                        <div className="work-overlay">
                                            <h3>Web Design</h3>
                                            <span>Design</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </section>
        );
    }
}

export default OurPortfolio;
