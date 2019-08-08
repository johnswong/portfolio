import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-work" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Work</span>
                                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: 'url(images/PTQlogo2.png)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/jwong38/online-chess-game">Online Chess Game</a></h3>
                                            <span>Node.js, Express, Handlebars, JavaScript, HTML, CSS, and MySQL</span>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: 'url(images/tankwars.png)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/jwong38/tank-wars-game">Tank Wars game</a></h3>
                                            <span>Java using JavaFX library and Swing API</span>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                                <div className="project" style={{ backgroundImage: 'url(images/brickbreaker.png)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/jwong38/brick-breaker-game">Brick Breaker Game</a></h3>
                                            <span>Java using JavaFX library and Swing API</span>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                                <div className="project" style={{ backgroundImage: 'url(images/img-4.jpg)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="work.html">Work 04</a></h3>
                                            <span>Application</span>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: 'url(images/img-5.jpg)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="work.html">Work 05</a></h3>
                                            <span>Graphic, Logo</span>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: 'url(images/img-6.jpg)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="work.html">Work 06</a></h3>
                                            <span>Web Design</span>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}