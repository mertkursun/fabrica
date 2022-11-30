import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
	ssr: false
});

class MainBannerNineteen extends Component {

	state = {
		isOpen: false,
	}
	openModal = () => {
		this.setState({ isOpen: true })
	}

	render() {
		return (
			<>
				<div id="home" className="main-banner main-banner-with-form item-bg2">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12">
										<div className="main-banner-content">
											<h1>En İyi <b>SAP</b> Müşteri Deneyimi</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

											<div className="btn-box">
												<Link href="#services">
													<a className="btn btn-primary">Servislerimiz</a>
												</Link>
											</div>
										</div>
									</div>

									<div className="col-lg-5 col-md-12 offset-lg-1 offset-md-0">
										<div className="banner-form">
											<form>
												<h2><b>Demo</b> Başvuru Formu</h2>
												<div className="form-group">
													<input
														type="text"
														name="name"
														placeholder="Ad - Soyad"
														className="form-control"
													/>
												</div>

												<div className="form-group">
													<input
														type="email"
														name="email"
														placeholder="Email"
														className="form-control"
													/>
												</div>

												<div className="form-group">
													<input
														type="text"
														name="compnay"
														placeholder="Firma Adı"
														className="form-control"
													/>
												</div>

												<div className="form-group">
												<input
														type="text"
														name="number"
														placeholder="Telefon Numarası"
														className="form-control"
													/>
												</div>

												<div className="text-center">
													<button type="submit" className="btn btn-primary">Başvurusu Yap</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default MainBannerNineteen;