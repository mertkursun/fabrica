import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

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

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <section id="contact" className="contact-area ptb-100 bg-image">
            <div className="container">
                <div className="section-title">
                    <span>Get In Touch</span>
                    <h2>Let's <b>Contact</b> Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="contact-info">
                            <i className="icofont-google-map"></i> 
                            <p>Exercisplan 4, 111 49 Stockholm, Sweden</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="contact-info">
                            <i className="icofont-envelope"></i> 
                            <p>infoziran@gmail.com</p>
                            <p>helloziran@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="contact-info">
                            <i className="icofont-phone"></i> 
                            <p>(+124) 412-1243465</p>
                            <p>(+124) 412-2445515</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="contact-info">
                            <i className="icofont-fax"></i> 
                            <p>617-241-60055</p>
                            <p>817-345-56756</p>
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
                                        placeholder="Name" 
                                        className="form-control" 
                                        value={contact.name}
                                        onChange={handleChange} 
                                        required 
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
                                    <input 
                                        type="text" 
                                        name="number" 
                                        placeholder="Phone number" 
                                        className="form-control" 
                                        value={contact.number}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Subject" 
                                        className="form-control" 
                                        value={contact.subject}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea 
                                        name="text" 
                                        cols="30" 
                                        rows="6" 
                                        placeholder="Write your message..." 
                                        className="form-control" 
                                        value={contact.text}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;