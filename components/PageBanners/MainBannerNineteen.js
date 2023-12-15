import React, { Component } from 'react';
import Link from 'next/link';
import { send } from 'emailjs-com';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


import 'react-toastify/dist/ReactToastify.css';

const SELECT_DATA = [
	{ value: "SAP Emarsys Customer Engagement", label: "SAP Emarsys Customer Engagement" },
	{ value: "SAP Marketing On-premise & Cloud", label: "SAP Marketing On-premise & Cloud" },
	{ value: "SAP Cloud for Sales and Service", label: "SAP Cloud for Sales and Service" },
	{ value: "SAP Customer Data Cloud", label: "SAP Customer Data Cloud" },
	{ value: "SAP Commerce Cloud", label: "SAP Commerce Cloud" },
	{ value: "Mobil Çözümler", label: "Mobil Çözümler" },
	{ value: "Web Çözümleri", label: "Web Çözümleri" },
	{ value: "Stratejik Danışmanlık", label: "Stratejik Danışmanlık" },
	{ value: "Destek Projeleri", label: "Destek Projeleri" },
]

class MainBannerNineteen extends Component {

	state = {
		isOpen: false,
		phone: ""
	}
	openModal = () => {
		this.setState({ isOpen: true })
	}




	render() {
		return (
			<>
				<ToastContainer />
				<div id="home" className="main-banner main-banner-with-form item-bg2">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12">
										<div className="main-banner-content">
											<h1>En İyi <b>SAP</b> Müşteri Deneyimi</h1>
											<p>Dünya genelinde müşterilerinin ve tüm toplum üyelerinin güvenli ve emniyetli bir bilgi alanında sürdürülebilir bir şekilde yaşamalarını, çalışmalarını ve gelişmelerini sağlamak için varız.</p>
											<p>Müşteri deneyiminizi bir üst seviyeye çıkartmak, mobil veya web çözümlerinizde yanınızda olmamızı isterseniz bizimle iletişime geçebilirsiniz.</p>

											<div className="btn-box">
												<Link href="#services">
													<a className="btn btn-primary">Servislerimiz</a>
												</Link>
											</div>
										</div>
									</div>

									<div className="col-lg-5 col-md-12 offset-lg-1 offset-md-0">
										<div className="banner-form">
											<form onSubmit={(e) => {
												const sendData = {
													name: e.currentTarget[0]?.value,
													email: e.currentTarget[1]?.value,
													company: e.currentTarget[2]?.value,
													phone: this.state.phone,
													productInfo: e.currentTarget[5]?.value,
												}
												e.preventDefault();
												send(
													'fabricabt',
													'fabricabt_template',
													sendData,
													'HnQJJ1dtQOK-zCaFu'
												)
													.then((response) => {
														toast.success('Başvurunuz iletilmiştir. En kısa sürede dönüş sağlayacağız', {
															position: "top-right",
															autoClose: 5000,
															hideProgressBar: false,
															closeOnClick: true,
															pauseOnHover: true,
															draggable: true,
															progress: undefined,
															theme: "colored",
														});

														console.log('SUCCESS!', response.status, response.text);
													})
													.catch((err) => {
														toast.error('Form gönderilirken hata oluştu. Tekrar deneyiniz.', {
															position: "top-right",
															autoClose: 5000,
															hideProgressBar: false,
															closeOnClick: true,
															pauseOnHover: true,
															draggable: true,
															progress: undefined,
															theme: "colored",
														});
														console.log('FAILED...', err);
													});

											}}>
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
														required
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
													<PhoneInput
														country={'tr'}
														className="phoneInput"
														value={this.state.phone}
														//placeholder="Telefon Numarası"
														enableTerritories
														onChange={phone => {
															this.setState({ phone })
														}}
														required
													/>
												</div>
												<div className="form-group">
													<Select
														className="form-group"
														classNamePrefix="select"
														isClearable={true}
														isSearchable={true}
														placeholder="Ürün Bilgisi"
														name="color"
														options={SELECT_DATA}
														required
													/>
												</div>
												<div className="text-center">
													<button type="submit" className="btn btn-primary">Başvuru Yap</button>
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