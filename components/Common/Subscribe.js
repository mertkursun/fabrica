import React, { Component } from 'react';

class Subscribe extends Component {
    render() {
        return (
            <div className="subscribe-area ptb-100">
                <div className="container">
                    <div className="newsletter">
                        <h2>Join Our <b>Newsletter</b></h2>
                        <form className="newsletter-form">
                            <input type="email" className="form-control" placeholder="Your Email Address" name="email" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subscribe;