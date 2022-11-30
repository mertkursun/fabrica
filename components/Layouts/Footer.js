import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-7">
                            <p>
                                <i className="icofont-copyright"></i>{currentYear} FabricA BT Danışmanlık LTD. ŞTİ - Tüm Hakları Saklıdır
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-5">
                            <ul>
                                <li>
                                    <Link href="#">
                                        <a><i className="icofont-facebook"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a><i className="icofont-twitter"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a><i className="icofont-instagram"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a><i className="icofont-linkedin"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a><i className="icofont-pinterest"></i></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;