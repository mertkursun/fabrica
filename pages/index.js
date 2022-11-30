import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBannerNineteen from '../components/PageBanners/MainBannerNineteen';
import OurFeatures from '../components/HomeEighteen/OurFeatures';
import AboutUs from '../components/HomeEighteen/AboutUs';
import CtaArea from '../components/HomeEighteen/CtaArea';
import OurServices from '../components/HomeEighteen/OurServices';
import OurPortfolio from '../components/HomeEighteen/OurPortfolio';
import FunFacts from '../components/HomeEighteen/FunFacts';
import OurStory from '../components/HomeEighteen/OurStory';
import OurTestimonials from '../components/HomeEighteen/OurTestimonials';
import Faq from '../components/HomeEighteen/Faq';
import BlogSlider from '../components/HomeEighteen/BlogSlider';
import Partner from '../components/HomeEighteen/Partner';
import Subscribe from '../components/HomeEighteen/Subscribe';
import ContactForm from '../components/HomeEighteen/ContactForm';
import Footer from '../components/Layouts/Footer';

class Index18 extends Component {
    render() {
        return (
            <>
                <Navbar /> 
                <MainBannerNineteen />
                <OurFeatures />
                <AboutUs />
                <CtaArea />
                <OurServices />
                <OurPortfolio />
                <FunFacts /> 
                <OurTestimonials />
                <OurStory />
                <Faq /> 
                <BlogSlider /> 
                <CtaArea /> 
                <Partner /> 
                <Subscribe />
                <ContactForm />
                <Footer />
            </>
        );
    }
}

export default Index18;