import React, { Component } from 'react';
import Link from 'next/link';

class WhoWeAre extends Component {
    render() {
        return (
            <section id="who-we-are" className="who-we-are ptb-100 bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="section-title">
                                <span>Who We Are</span>
                                <h2>We stand out of the <b>Ziran</b></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <Link href="#portfolio">
                                    <a className="btn btn-primary">Our Work</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="content">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                <ul>
                                    <li>We are Professional</li>
                                    <li>We are Passionate</li>
                                    <li>We are Creative</li>
                                    <li>We are Designer</li>
                                    <li>We are Unique</li>
                                    <li>We are Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhoWeAre;