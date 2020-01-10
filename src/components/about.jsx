import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About</span>
                                            <h2 className="colorlib-heading">Who Is Johnson?</h2>
                                            <p>Johnson is a Computer Science graduate from San Francisco State University. Having a strong experience in technical troubleshooting and a knack for problem-solving, has helped him create some amazing things. He loves exploring new technologies and is currently focusing on deepening his knowledge in web/mobile application development.</p>
                                            <p>Aside from his tech-savvy self, he enjoys finding and listening to music. In his downtime, he would relax by queueing up tracks and blending them together. Yes, he is a DJ! When he's not in his engineering or DJing shoes, he's looking at collecting shoes! He currently owns 50+ pairs of sneakers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-6 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web Development</h3>
                                        <p>I have experience building websites using JavaScript, React, HTML, and CSS.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Data Structures & Algorithms (DSA)</h3>
                                        <p>Coming from a Computer Science background, I have a good grasp over fundamental concepts of DSA.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}