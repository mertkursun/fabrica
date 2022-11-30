import React, { Component } from 'react';

class OurFeatures extends Component {
    render() {
        return (
            <section className="features-area ptb-100 bg-image">
                <div className="container">
                    <div className="section-title">
                        <span>Our Features</span>
                        <h2>We Always Try To <b>Understand</b> Users Expectation</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-edit"></i>
                                </div>
                                <h3>Creative Design</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features active">
                                <div className="icon">
                                    <i className="icofont-upload-alt"></i>
                                </div>
                                <h3>Market Strategy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-pie-chart"></i>
                                </div>
                                <h3>Business Growth</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurFeatures;