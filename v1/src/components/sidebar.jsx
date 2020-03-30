import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                            <h1 id="colorlib-logo"><a href="">Johnson Wong</a></h1>
                            <span className="position"><b>Software Engineer</b></span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#introduction" data-nav-section="introduction">Introduction</a></li>
                                    <li><a href="#about" data-nav-section="about">About</a></li>
                                    <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                                    <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                                    <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                                    <li><a href="#education" data-nav-section="education">Education</a></li>
                                    <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a className="btn btn-primary btn-learn" href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume <i className="icon-download4" /></a></li>
                                <li><a href="mailto:johnswong14@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail" /></a> &nbsp;
                                <a href="https://linkedin.com/in/johnswong14" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a> &nbsp;
                                <a href="https://github.com/jwong38" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a> &nbsp;</li>
                            </ul>
                        </nav>
                        <div className="colorlib-footer">
                            <p><small>
                                Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                                Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration
                            </small></p>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}
