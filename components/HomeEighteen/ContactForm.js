import React, { useState } from 'react'
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-input-2'
import { send } from 'emailjs-com';



// Form initial state
const INITIAL_STATE = {
	name: "",
	email: "",
	number: "",
	subject: "",
	text: ""
};

const ContactForm = () => {

	const [contact, setContact] = useState(INITIAL_STATE);
	const [phone, setPhone] = useState("")

	const handleChange = e => {
		const { name, value } = e.target;
		setContact(prevState => ({ ...prevState, [name]: value }));
		// console.log(contact)
	}

	const handleSubmit = (e) => {
		const { name, email, number, subject, text } = contact;
		const sendData = {
			name: name,
			email: email,
			number: phone,
			subject: subject,
			text: text,
		}
		e.preventDefault();
		send(
			'contact',
			'template_contact',
			sendData,
			'HnQJJ1dtQOK-zCaFu'
		)
			.then((response) => {
				toast.success('Bilgileriniz iletilmiştir. En kısa sürede dönüş sağlayacağız.', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
				setContact(INITIAL_STATE);
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
	};

	return (
		<>
			<section id="contact" className="contact-area ptb-100 bg-image">
				<div className="container">
					<div className="section-title">
						<h2>Bize <b>Ulaşın</b></h2>
						<p>Daha fazla bilgi için iletişime geçmekten çekinmeyin, en kısa sürede sizinle iletişime geçeceğiz.</p>
					</div>

					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="contact-info">
								<i className="icofont-google-map"></i>
								<p>Ginza Güneşli Rezidans, İstanbul</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="contact-info">
								<i className="icofont-envelope"></i>
								<p>info@fabricabt.com</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="contact-info">
								<i className="icofont-iphone"></i>
								<p>+90 (534) 233 63 92</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="contact-info">
								<i className="icofont-phone"></i>
								<p>+90 (212) 550 06 00</p>
							</div>
						</div>
					</div>

					<div className="contact-form">
						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="text"
											name="name"
											placeholder="Ad - Soyad"
											className="form-control"
											value={contact.name}
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="text"
											name="email"
											placeholder="Email"
											className="form-control"
											value={contact.email}
											onChange={handleChange}
											required
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<PhoneInput
											country={'tr'}
											className="phoneInput"
											value={phone}
											placeholder="Telefon Numarası"
											enableTerritories
											onChange={phone => {
												setPhone(phone)
											}}
											required
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="form-group">
										<input
											type="text"
											name="subject"
											placeholder="Firma Adı"
											className="form-control"
											value={contact.subject}
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<textarea
											name="text"
											cols="30"
											rows="6"
											placeholder="Lütfen neye ihtiyacınız olduğunu yazın"
											className="form-control"
											value={contact.text}
											onChange={handleChange}
											required
										/>
									</div>
								</div>
								<div className="col-md-12 text-center">
									<button type="submit" className="btn btn-primary">Gönder</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}

export default ContactForm;