import React, { Component } from 'react';
import Link from 'next/link';

import ScrollAnimation from 'react-animate-on-scroll';

class OurStory extends Component {
    

    render() {
        return (
            <>
                <div className="story-area ptb-100">
                    <div className="container">
                        <div className="story-content">
                            <ScrollAnimation 
                                animateIn='fadeInUp'
                                initiallyVisible={true}
                                animateOnce={true} 
                            >
                                <div className="section-title">
                                    <h2>Projelerinizin Başarıya Ulaşması İçin <b>Her Zaman</b> Yanınızdayız</h2>

                                    <div
                                        className="video-btn popup-youtube"
                                    > 
                                        <Link href="#portfolio">
                                        <a className="btn btn-primary">Demo Başvurusu Yap</a>
                                    </Link>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                
            </>
        );
    }
}

export default OurStory;