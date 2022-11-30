import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class Faq extends Component {
    render() {
        return (
            <section id="faq" className="faq-area ptb-100 overx-hidden">
                <div className="container">
                    <ScrollAnimation
                        animateIn='fadeInUp'
                        initiallyVisible={true}
                        animateOnce={true}
                    >
                        <div className="section-title">
                            <h2>Sıkça Sorulan <b>Sorular</b></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </ScrollAnimation>

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <ScrollAnimation
                                animateIn='fadeInLeft'
                                initiallyVisible={true}
                                animateOnce={true}
                            >
                                <div className="faq">
                                    <Accordion>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="faq-image">
                                <ScrollAnimation
                                    animateIn='fadeInRight'
                                    initiallyVisible={true}
                                    animateOnce={true}
                                >
                                    <img src="/images/faq-bg.jpg" alt="img" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Faq;