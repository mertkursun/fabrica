import React, { Component } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

class CtaArea extends Component {
	render() {
		return (
			<div className="cta-area overx-hidden">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6">
							<ScrollAnimation
								animateIn='fadeInLeft'
								initiallyVisible={true}
								animateOnce={true}
							>
								<div className="cta-content">
									<h3>İş Süreçlerinizi Geliştirecek Her Türlü <b>Bilişim Hizmetini</b> Sağlıyoruz</h3>
								</div>
							</ScrollAnimation>
						</div>

						<div className="col-lg-6 col-md-6 text-right">
							<ScrollAnimation
								animateIn='fadeInRight'
								initiallyVisible={true}
								animateOnce={true}
							>
								<Link href="#contact">
									<a className="btn btn-primary">Bize Ulaşın</a>
								</Link>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CtaArea;