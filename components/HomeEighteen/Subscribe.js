import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { toast } from 'react-toastify';


class Subscribe extends Component {
    render() {
        return (
            <div className="subscribe-area ptb-100">
                <div className="container">
                    <ScrollAnimation
                        animateIn='fadeInUp'
                        initiallyVisible={true}
                        animateOnce={true}
                    >
                        <div className="newsletter">
                            <h2><b>Bültenimize</b> Katılın</h2>
                            <form className="newsletter-form" onSubmit={(e) => {
                                e.preventDefault();
                                toast.success('Bültenimize abone oldunuz.', {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                });
                            }}>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Adresiniz"
                                    name="email"
                                    required
                                />
                                <button type="submit">Abone Ol</button>
                            </form>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        );
    }
}

export default Subscribe;