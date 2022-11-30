import React, { Component } from 'react';
import Link from 'next/link';

class WeAreBestCompany extends Component {
    render() {
        return (
            <div className="call-to-action ptb-100">
                <div className="container">
                    <div className="call-to-action-content">
                        <div className="section-title">
                            <span>We are a Best Company</span>
                            <h2>Ready to <b>Work</b> With Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link href="#contact">
                                <a className="btn btn-primary">Contact Us</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeAreBestCompany;