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
	responsive: {
		0: {
			items: 2,
		},
		480: {
			items: 3,
		},
		768: {
			items: 4,
		},
		1200: {
			items: 5,
		}
	}
}

class Partner extends Component {

	_isMounted = false;
	state = {
		display: false
	}
	componentDidMount() {
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
						<h2>Mutlu <b>Ortaklarımız</b></h2>
					</div>

					{this.state.display ? <OwlCarousel
						className="partner-slides owl-carousel owl-theme"
						{...options}
					>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/ido.jpg" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/ipragaz.jpg" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/alfanar.jpg" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/adib.jpg" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/hbl.jpg" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/jbs.jpg" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/sbm.jpg" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/gasco.jpg" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/tani.jpg" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/ersasaat.jpg" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/lesbenjamins.jpg" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/zb-logo.png" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/alhabib-logo.png" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/ks-logo.png" alt="img" />
							</a>
						</div>
						<div className="partner-item">
							<a target="_blank">
								<img src="/images/works/evinemama.png" alt="img" />
							</a>
						</div>
					</OwlCarousel> : ''}
				</div>
			</section>
		);
	}
}

export default Partner;