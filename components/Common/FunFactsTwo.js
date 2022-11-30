import React, { Component } from 'react';

class FunFactsTwo extends Component {
    render() {
        return (
            <div className="funfacts-area-two ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <i className="icofont-checked"></i>
                                <h3>820</h3>
                                <p>Successful Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <i className="icofont-ui-user"></i>
                                <h3>6523</h3>
                                <p>Satisfied Customers</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <i className="icofont-win-trophy"></i>
                                <h3>50</h3>
                                <p>Awards Winning</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <i className="icofont-crown-king"></i>
                                <h3>20</h3>
                                <p>Year Of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFactsTwo;