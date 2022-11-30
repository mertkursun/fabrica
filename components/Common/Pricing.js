import React, { Component } from 'react';
import Link from 'next/link';

class Pricing extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-slider-body");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "active";
    }

    render() {
        return (
            <section id="pricing" className="pricing-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Latest and Best</span>
                        <h2>Our <b>Pricing</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            {/* Tabs Nav */}
                            <div className="tab-slider-nav">
                                <ul className="tab-slider-tabs">
                                    <li
                                        className="tab-slider-trigger active"
                                        onClick={(e) => this.openTabSection(e, 'monthly')}
                                    >
                                        Monthly
                                    </li>
                                    <li onClick={(e) => this.openTabSection(e, 'yearly')}> 
                                        Yearly
                                    </li>
                                </ul>
                            </div>
                        
                            <div className="tab-slider-container">
                                <div id="monthly" className="tab-slider-body">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-table">
                                                <div className="pricing-header">
                                                    Basic
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>
                                                    145
                                                    <span>/ Monthly</span>
                                                </div>

                                                <ul className="pricing-features">
                                                    <li><b>10 GB</b> Hosting</li>
                                                    <li>2 Unique Users</li>
                                                    <li><b>12 GB</b> Capacity</li>
                                                    <li>Weekly Backups</li>
                                                    <li><b>15 Domain</b> Names</li>
                                                    <li>Support <b>24/7</b></li>
                                                </ul>

                                                <Link href="#">
                                                    <a className="btn btn-primary">Purchase Now</a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-table">
                                                <div className="pricing-header">
                                                    Standard
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup> 
                                                    250 
                                                    <span>/ Monthly</span>
                                                </div>

                                                <ul className="pricing-features">
                                                    <li><b>10 GB</b> Hosting</li>
                                                    <li>2 Unique Users</li>
                                                    <li><b>12 GB</b> Capacity</li>
                                                    <li>Weekly Backups</li>
                                                    <li><b>15 Domain</b> Names</li>
                                                    <li>Support <b>24/7</b></li>
                                                </ul>

                                                <Link href="#">
                                                    <a className="btn btn-primary">Purchase Now</a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                            <div className="pricing-table">
                                                <div className="pricing-header">
                                                    Premium
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>
                                                    325
                                                    <span>/ Monthly</span>
                                                </div>

                                                <ul className="pricing-features">
                                                    <li><b>10 GB</b> Hosting</li>
                                                    <li>2 Unique Users</li>
                                                    <li><b>12 GB</b> Capacity</li>
                                                    <li>Weekly Backups</li>
                                                    <li><b>15 Domain</b> Names</li>
                                                    <li>Support <b>24/7</b></li>
                                                </ul>

                                                <Link href="#">
                                                    <a className="btn btn-primary">Purchase Now</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="yearly" className="tab-slider-body">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-table">
                                                <div className="pricing-header">
                                                    Basic
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup> 
                                                    345 
                                                    <span>/ Yearly</span>
                                                </div>

                                                <ul className="pricing-features">
                                                    <li><b>10 GB</b> Hosting</li>
                                                    <li>2 Unique Users</li>
                                                    <li><b>12 GB</b> Capacity</li>
                                                    <li>Weekly Backups</li>
                                                    <li><b>15 Domain</b> Names</li>
                                                    <li>Support <b>24/7</b></li>
                                                </ul>

                                                <Link href="#">
                                                    <a className="btn btn-primary">Purchase Now</a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-table">
                                                <div className="pricing-header">
                                                    Standard
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>
                                                    550
                                                    <span>/ Yearly</span>
                                                </div>

                                                <ul className="pricing-features">
                                                    <li><b>10 GB</b> Hosting</li>
                                                    <li>2 Unique Users</li>
                                                    <li><b>12 GB</b> Capacity</li>
                                                    <li>Weekly Backups</li>
                                                    <li><b>15 Domain</b> Names</li>
                                                    <li>Support <b>24/7</b></li>
                                                </ul>

                                                <Link href="#">
                                                    <a className="btn btn-primary">Purchase Now</a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                            <div className="pricing-table">
                                                <div className="pricing-header">
                                                    Premium
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>
                                                    725
                                                    <span>/ Yearly</span>
                                                </div>

                                                <ul className="pricing-features">
                                                    <li><b>10 GB</b> Hosting</li>
                                                    <li>2 Unique Users</li>
                                                    <li><b>12 GB</b> Capacity</li>
                                                    <li>Weekly Backups</li>
                                                    <li><b>15 Domain</b> Names</li>
                                                    <li>Support <b>24/7</b></li>
                                                </ul>

                                                <Link href="#">
                                                    <a className="btn btn-primary">Purchase Now</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Pricing;