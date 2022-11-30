import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import ScrollAnimation from 'react-animate-on-scroll';

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div id="home" className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content text-center">
                                    <ScrollAnimation 
                                        animateIn='fadeInDown'
                                        initiallyVisible={true}
                                        animateOnce={true} 
                                    > 
                                        <span>We Are Creative</span> 
                                    </ScrollAnimation>

                                    <ScrollAnimation 
                                        animateIn='fadeInUp'
                                        initiallyVisible={true}
                                        animateOnce={true} 
                                    >
                                        <h1>The Best <b>Digital</b> Experience</h1>
                                    </ScrollAnimation>

                                    <ScrollAnimation 
                                        animateIn='fadeInDown'
                                        initiallyVisible={true}
                                        animateOnce={true} 
                                    > 
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                                    </ScrollAnimation>

                                    <ScrollAnimation 
                                        animateIn='fadeInUp'
                                        initiallyVisible={true}
                                        animateOnce={true} 
                                    >  
                                        <div className="btn-box">
                                            <Link href="#contact">
                                                <a className="btn btn-primary">Get Started</a>
                                            </Link>
                                            
                                            <span>or</span>

                                            <div
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                className="video-btn popup-youtube"
                                            > 
                                                <i className="icofont-ui-play"></i> Watch Video
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* Shape Images */}
                    <div className="shape1">
                        <img src="/images/shapes/shape1.png" alt="shape1" />
                    </div>
                    <div className="shape2 rotateme">
                        <img src="/images/shapes/shape2.png" alt="shape2" />
                    </div>
                    <div className="shape3 rotateme">
                        <img src="/images/shapes/shape3.png" alt="shape3" />
                    </div>
                    <div className="shape4">
                        <img src="/images/shapes/shape4.png" alt="shape4" />
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default MainBanner;