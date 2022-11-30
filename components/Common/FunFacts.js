import React, { Component } from 'react';
import Link from 'next/link';

class FunFacts extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-100 bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="section-title">
                                <span>Number Speaks</span>
                                <h2>We always ready for a <b>challenge</b></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <Link href="#">
                                    <a className="btn btn-primary">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="counter-wrap">
                                <div className="single-counter">
                                    <h2>1024</h2>
                                    <h3>Successful projects</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <div className="single-counter">
                                    <h2>2023</h2>
                                    <h3>Unique designs</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <div className="single-counter">
                                    <h2>4246</h2>
                                    <h3>Happy Customers</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFacts;