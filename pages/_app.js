import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/icofont.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import "../node_modules/react-sweet-progress/lib/style.css";
import 'react-image-lightbox/style.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

// For RTL Version Style
// import '../public/css/rtl.css';

import App from 'next/app';
import Head from "next/head";
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>FabricaBT</title>
                </Head>

                <Component {...pageProps} />
                
                

                {/* Go Top Button */}
                <GoTop scrollStepInPx="150" delayInMs="15.50" />
            </>
        );
    }
}