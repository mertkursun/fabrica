import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {
    render() {
        return (
            <div className="error-area ptb-100">
                <div className="container">
                    <div className="error-content">
                        <img src="/images/404.png" alt="error" />
                        <h3>404 - Page not found!</h3>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                        <Link href="/">
                            <a className="btn btn-primary">Go To Homepage</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;