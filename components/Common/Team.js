import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Link from 'next/link';

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ],
    responsive: {
        0: {
            items:1,
        },
        576: {
            items:2,
        },
        992: {
            items:3,
        }
    }
}

class Team extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section id="team" className="team-area ptb-100 bg-image">
                <div className="container">
                    <div className="section-title">
                        <span>Meet Our expert</span>
                        <h2>Our Creative <b>Team</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="team-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="team-box">
                            <img src="/images/team/team1.jpg" alt="team-image" />

                            <div className="box-content">
                                <div className="box-inner-content">
                                    <h3 className="title">Steven Smitn</h3>
                                    <span className="post">Web Developer</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="team-box">
                            <img src="/images/team/team2.jpg" alt="team-image" />
                            
                            <div className="box-content">
                                <div className="box-inner-content">
                                    <h3 className="title">Alina Eva</h3>
                                    <span className="post">UI/UX Designer</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="team-box">
                            <img src="/images/team/team3.jpg" alt="team-image" />
                            
                            <div className="box-content">
                                <div className="box-inner-content">
                                    <h3 className="title">James Anderson</h3>
                                    <span className="post">Photographer</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="team-box">
                            <img src="/images/team/team4.jpg" alt="team-image" />
                            
                            <div className="box-content">
                                <div className="box-inner-content">
                                    <h3 className="title">Eva Lucy</h3>
                                    <span className="post">Web Designer</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default Team;