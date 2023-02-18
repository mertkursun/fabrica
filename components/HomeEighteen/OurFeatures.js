import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class OurFeaturesTwo extends Component {
	render() {
		return (
			<section className="features-area ptb-100">
				<div className="container">
					<ScrollAnimation
						animateIn='fadeInLeft'
						initiallyVisible={true}
						animateOnce={true}

					>
						<div className="section-title">
							<span>Verdiğimiz Hizmetler</span>
							<h2>Müşterilerimize <b>En İyi</b> Hizmeti Sunuyoruz</h2>
						</div>
					</ScrollAnimation>

					<div className="row">
						<div className="col-lg-4 col-md-6">
							<ScrollAnimation
								animateIn='fadeInUp'
								initiallyVisible={true}
								animateOnce={true}
							>
								<div className="single-features">
									<div className="image sap">
										<img src="/images/sap.png" alt="about" />
									</div>
									<h3>SAP Çözümleri</h3>
									<p>SAP müşteri deneyimi ürün ailesi içerisindeki ürünler için uçtan uca proje ve destek süreçleri</p>
									<br></br>
								</div>
							</ScrollAnimation>
						</div>

						<div className="col-lg-4 col-md-6">
							<ScrollAnimation
								animateIn='fadeInUp'
								initiallyVisible={true}
								animateOnce={true}
							>
								<div className="single-features active">
								<div className="image stra">
										<img src="/images/target.png" alt="about" />
									</div>
									<h3>Stratejik Çözümler</h3>
									<p>Uygulama kullanımı ve müşteri ihtiyaçlarının yönetilmesi</p>
									<br></br>
								</div>
							</ScrollAnimation>
						</div>

						<div className="col-lg-4 col-md-6">
							<ScrollAnimation
								animateIn='fadeInUp'
								initiallyVisible={true}
								animateOnce={true}
							>
								<div className="single-features">
								<div className="image software">
										<img src="/images/web.png" alt="about" />
									</div>
									<h3>Yazılım Geliştirme</h3>
									<p>Mobil uygulama, web sitesi, dış kaynak, test otomasyon üzerinde müşteri ihtiyaçlarının karşılanması</p>
								</div>
							</ScrollAnimation>
						</div>


					</div>
				</div>
			</section>
		);
	}
}

export default OurFeaturesTwo;