import React, { Component } from 'react';
import Link from 'next/link';

import ScrollAnimation from 'react-animate-on-scroll';

class OurStory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			intervalId: 0,
		}
	};

	onScrollStep = () => {
		if (window.pageYOffset === 0) {
			clearInterval(this.state.intervalId);
		}
		
		window.scroll(0, window.pageYOffset - 150);
	}

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
									<h2>Rekabette <b>Öne Çıkmak</b> İster Misiniz?</h2>

									<div
										className="video-btn popup-youtube"
									>
										<a className="btn btn-primary" onClick={() => {
											let intervalId = setInterval(this.onScrollStep, "15.50");
											this.setState({ intervalId: intervalId });
										}}>Başvuru Yap</a>
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