import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class OurStory extends Component {
    
    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="story-area ptb-100">
                    <div className="container">
                        <div className="story-content">
                            <div className="section-title">
                                <span>Our Story</span>
                                <h2>We are always with you to <b>make</b> your project Success</h2>

                                <div
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="icofont-ui-play"></i>
                                </div>
                            </div>
                        </div>
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

export default OurStory;