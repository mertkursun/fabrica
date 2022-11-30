import React, { Component } from 'react';
import Link from 'next/link';

class CtaAreaTwo extends Component {
    render() {
        return (
            <div className="cta-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <div className="cta-content">
                                <h3>Create lovely & smart <b>websites</b> faster!</h3>
                                <span>Start to build your awesome websites</span>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-right">
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

export default CtaAreaTwo;