import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

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
                            <form className="newsletter-form">
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