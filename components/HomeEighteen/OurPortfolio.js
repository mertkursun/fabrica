import React, { Component } from 'react';
import Lightbox from "react-image-lightbox";
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
const isServer = typeof window === 'undefined';
const mixitup = !isServer ? require('mixitup') : null;

const images = [
	"/images/works/ido.jpg",
	"/images/works/ipragaz.jpg",
	"/images/works/alfanar.jpg",
	"/images/works/adib.jpg",
	"/images/works/hbl.jpg",
	"/images/works/jbs.jpg",
	"/images/works/sbm.jpg",
	"/images/works/gasco.jpg",
	"/images/works/tani.jpg",
	"/images/works/ersasaat.jpg",
	"/images/works/evinemama.png",
	"/images/works/alhabib-logo.png",
	"/images/works/lesbenjamins.jpg",
	"/images/works/zb-logo.png",
	"/images/works/ks-logo.png",
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
							<p>SAP Projeleri / NonSAP Projeler</p>
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
							<button className="filter" data-filter=".service">Hizmet</button>
							<button className="filter" data-filter=".energy">Enerji</button>
							<button className="filter" data-filter=".banking">Bankacılık</button>
							<button className="filter" data-filter=".production">Üretim</button>
							<button className="filter" data-filter=".retail">Perakende</button>
						</div>
					</ScrollAnimation>

					<div className="shorting">
						<div className="row" id="mix-wrapper">
							<div className="col-lg-4 col-sm-6 mix service mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 0, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[0]} alt="Work Image" />

											<div className="work-overlay">
												<h3>IDO</h3>
												<span>Hizmet</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>

							<div className="col-lg-4 col-sm-6 mix energy mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 1, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[1]} alt="Work Image" />

											<div className="work-overlay">
												<h3>İpragaz</h3>
												<span>Enerji</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>

							<div className="col-lg-4 col-sm-6 mix energy production mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 2, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[2]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Alfanar</h3>
												<span>Enerji, Üretim</span>
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
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 3, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[3]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Adib (Abu Dhabi Islamic Bank)</h3>
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
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 3, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[4]} alt="Work Image" />

											<div className="work-overlay">
												<h3>HBL (Habib Bank Limited)</h3>
												<span>Bankacılık</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>

							<div className="col-lg-4 col-sm-6 mix service mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 4, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[5]} alt="Work Image" />

											<div className="work-overlay">
												<h3>JBS (Jaffer Business Systems)</h3>
												<span>Hizmet</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>

							<div className="col-lg-4 col-sm-6 mix retail service mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 5, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[6]} alt="Work Image" />

											<div className="work-overlay">
												<h3>SBM (Saudi Business Machines)</h3>
												<span>Perakende, Hizmet</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="col-lg-4 col-sm-6 mix energy mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 5, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[7]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Gasco (National Gas Indust. Co.)</h3>
												<span>Enerji</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="col-lg-4 col-sm-6 mix service mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 5, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[8]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Tanı Pazarlama</h3>
												<span>Hizmet</span>
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
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 5, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[9]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Ersa Saat & Shop Casio</h3>
												<span>Perakende</span>
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
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 5, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[10]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Evinemama</h3>
												<span>Perakende</span>
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
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 5, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[11]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Alhabib Bedding</h3>
												<span>Üretim, Perakende</span>
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
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 5, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[12]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Les Benjamins</h3>
												<span>Üretim, Perakende</span>
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
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 5, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[13]} alt="Work Image" />

											<div className="work-overlay">
												<h3>Ziraat Bankası</h3>
												<span>Bankacılık</span>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="col-lg-4 col-sm-6 mix service mix-target">
								<ScrollAnimation
									animateIn='fadeInLeft'
									initiallyVisible={true}
									animateOnce={true}
								>
									<div className="single-work">
											<a
												className="popup-btn"
												onClick={e => { e.preventDefault(); this.setState({ photoIndex: 5, isOpen: false }) }}
											></a>

										<div className="work-image">
											<img src={images[14]} alt="Work Image" />

											<div className="work-overlay">
												<h3>KoçSistem</h3>
												<span>Hizmet</span>
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
