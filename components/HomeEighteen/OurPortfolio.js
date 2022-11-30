import React, { Component } from 'react';
import Lightbox from "react-image-lightbox";
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
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
			<section id="portfolio" className="portfolio-area ptb-100 bg-image overx-hidden">
				<div className="container">
					<ScrollAnimation
						animateIn='fadeInUp'
						initiallyVisible={true}
						animateOnce={true}
					>
						<div className="section-title">
							<h2><b>Projelerimiz</b></h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</ScrollAnimation>

					{/* Shorting Menu */}
					<ScrollAnimation
						animateIn='fadeInUp'
						initiallyVisible={true}
						animateOnce={true}
					>
						<div className="shorting-menu">
							<button className="filter" data-filter="all">Hepsi</button>
							<button className="filter" data-filter=".energy">Enerji</button>
							<button className="filter" data-filter=".banking">Bankacılık</button>
							<button className="filter" data-filter=".production">Üretim</button>
							<button className="filter" data-filter=".retail">Perakende</button>
						</div>
					</ScrollAnimation>

					<div className="shorting">
						<div className="row" id="mix-wrapper">
							<div className="col-lg-4 col-sm-6 mix energy mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
										<Link href="#">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 0, isOpen: true }) }}
											></a>
										</Link>

										<div className="work-image">
											<img src={images[0]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Gasco</h3>
												<span>Enerji</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>

							<div className="col-lg-4 col-sm-6 mix retail mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
										<Link href="#">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 1, isOpen: true }) }}
											></a>
										</Link>

										<div className="work-image">
											<img src={images[1]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Evinemama</h3>
												<span>Perakende</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>

							<div className="col-lg-4 col-sm-6 mix production mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
										<Link href="#">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 2, isOpen: true }) }}
											></a>
										</Link>

										<div className="work-image">
											<img src={images[2]} alt="Work Image" />

											<div className="work-overlay">
												<h3>SBM</h3>
												<span>Üretim</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>

							<div className="col-lg-4 col-sm-6 mix banking mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
										<Link href="#">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 3, isOpen: true }) }}
											></a>
										</Link>

										<div className="work-image">
											<img src={images[3]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Adib</h3>
												<span>Bankacılık</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>

							<div className="col-lg-4 col-sm-6 mix retail production mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
										<Link href="#">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 4, isOpen: true }) }}
											></a>
										</Link>

										<div className="work-image">
											<img src={images[4]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Ersa Saat</h3>
												<span>Perakende - Üretim</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>

							<div className="col-lg-4 col-sm-6 mix banking mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
										<Link href="#">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 5, isOpen: true }) }}
											></a>
										</Link>

										<div className="work-image">
											<img src={images[5]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Bank Al Habib</h3>
												<span>Bankacılık</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="col-lg-4 col-sm-6 mix banking mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
										<Link href="#">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 5, isOpen: true }) }}
											></a>
										</Link>

										<div className="work-image">
											<img src={images[5]} alt="Work Image" />

											<div className="work-overlay">
												<h3>HBL</h3>
												<span>Bankacılık</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="col-lg-4 col-sm-6 mix retail production mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
										<Link href="#">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 5, isOpen: true }) }}
											></a>
										</Link>

										<div className="work-image">
											<img src={images[5]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Les Benjamins</h3>
												<span>Perakende - Üretim</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
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
