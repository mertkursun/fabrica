import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import ScrollAnimation from 'react-animate-on-scroll';

const options = {
	loop: true,
	nav: false,
	dots: true,
	autoplayHoverPause: true,
	autoplay: true,
	margin: 30,
	navText: [
		"<i class='icofont-rounded-left'></i>",
		"<i class='icofont-rounded-right'></i>"
	],
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 1,
		},
		1024: {
			items: 1,
		}
	}
}

class OurTestimonials extends Component {

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
			<section id="testimonials" className="testimonial-area ptb-100 bg-image">
				<div className="container">
					<ScrollAnimation
						animateIn='fadeInUp'
						initiallyVisible={true}
						animateOnce={true}
					>
						<div className="section-title">
							<h2>Müşteri <b>Değerlendirmeleri</b></h2>
							<p>Bizi bir de iş ortaklarımızdan/müşterilerimizden dinleyin.</p>
						</div>
					</ScrollAnimation>

					{this.state.display ? <OwlCarousel
						className="testimonial-slides owl-carousel owl-theme"
						{...options}
					>
						<div className="testimonial-item">
						<div className="client-image">
							<i class="icofont-user-female"></i>
							</div>

							<div className="testimonial-content">
								<div className="desc">
									<p>FabricaBT ile Emarsys entegrasyon kurulumu süresince çalışma fırsatımız oldu. Implementasyonun yazılımsal ve teknik aşamalarının sorunsuz ilerlemesinin dışında yaptığımız her toplantı ve görüşme bizim için kafa açan bir eğitim niteliğinde geçti.</p>
									<p>Titiz çalışmaları ve her konuyu detaylı olarak bilgilendirmeleri sayesinde kullandığımız sistemin/ürünün amacını bir kez daha net bir şekilde kavradık. FabricaBT'nin projenin başından sonuna kadar teknik ve iletişim anlamında profesyonel yaklaşımı bize hem keyifli hem de sıkıntısız bir kurulum süreci yaşattı. </p>
									<p>Tüm ekibe emek, destek ve sabırları için bir kez daha teşekkür ederiz.</p>
								</div>

								<div className="client-info">
									<h3>Deniz Erbaş</h3>
									<span>Ersa Saat & Shop Casio Pazarlama Yöneticisi</span>
								</div>
							</div>
						</div>

						<div className="testimonial-item">
							<div className="client-image">
							<i class="icofont-user-male"></i>
							</div>

							<div className="testimonial-content">
								<div className="desc">
									<p>Emarsys entegrasyon sürecinde tanıştık, özveri ile mesai saati gözetmeden bu sürecimizin sorunsuz geçmesi sağlandı.</p>
									<p>EVİNEMAMA ailesi olarak çok teşekkür ederiz. Bundan sonraki süreçte de kendilerine başarılar diliyorum.</p>
								</div>

								<div className="client-info">
									<h3>Barış Olutbay</h3>
									<span>Evinemama Genel Müdürü</span>
								</div>
							</div>
						</div>

						<div className="testimonial-item">
						<div className="client-image">
							<i class="icofont-user-male"></i>
							</div>

							<div className="testimonial-content">
								<div className="desc">
									<p>We have known the Fabrica team for a long time and now work as their customers. And found them very much customer centric. They have skillful professional team and supportive all the time. I would recommed to work with them as they are cooperative more then a vendor.</p>
									<p>We worked together for SAP Marketing 1909 and we get support from them. They have complete product knowledge and topics are completed in the given timeline.</p>
								</div>

								<div className="client-info">
									<h3>Muhammed Shahid Akhtar</h3>
									<span>JBS Marketing Team Leader</span>
								</div>
							</div>
						</div>

						</OwlCarousel> : ''}
				</div>
			</section>
		);
	}
}

export default OurTestimonials;