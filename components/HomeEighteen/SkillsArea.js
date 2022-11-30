import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import ScrollAnimation from 'react-animate-on-scroll';

class SkillsArea extends Component {
    render() {
        return (
            <section id="skill" className="skill-area overx-hidden">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            
                            <div className="skill-content ptb-100">
                                <ScrollAnimation 
                                    animateIn='fadeInUp'
                                    initiallyVisible={true}
                                    animateOnce={true} 
                                >
                                    <div className="section-title">
                                        <span>We Are Awesome</span>
                                        <h2>Some of Our <b>Skills</b></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>

                                    <div className="skills">
                                        <div className="skill-item">
                                            <div className="skill-header">
                                                <h3 className="skill-title">Branding</h3>
                                            </div>
                                            <div className="skill-bar">
                                                <Progress 
                                                    percent={80} 
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="skill-item">
                                            <div className="skill-header">
                                                <h3 className="skill-title">Marketing</h3>
                                            </div>
                                            <div className="skill-bar">
                                                <Progress 
                                                    percent={85} 
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="skill-item">
                                            <div className="skill-header">
                                                <h3 className="skill-title">Design</h3>

                                            </div>
                                            <div className="skill-bar">
                                                <Progress 
                                                    percent={90} 
                                                />
                                            </div>
                                        </div>

                                        <div className="skill-item">
                                            <div className="skill-header">
                                                <h3 className="skill-title">Development</h3>
                                            </div>
                                            <div className="skill-bar">
                                                <Progress 
                                                    percent={95} 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="skill-image">
                                <img src="/images/skill-bg.jpg" alt="skill-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SkillsArea;