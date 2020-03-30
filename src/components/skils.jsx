import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Skills extends Component {
    render() {
        return (
            <Container fluid className="component" id="skills">
                <Row>
                    <Col className="component-header">
                        <div className="component-header-title">Skills</div>
                        <div className="keyline"></div>
                    </Col>
                </Row>
                <Row>
                    <Col className="content">
                        <Row>
                            <Col sm="6" md>
                                <div className="skills-item">
                                    <span className="skill-name">
                                        Programming Languages
                                    </span>
                                    <div className="description">
                                        <ul>
                                            <li>JavaScript (ES6)</li>
                                            <li>Python</li>
                                            <li>PHP</li>
                                            <li>Java</li>
                                            <li>C++</li>
                                            <li>C</li>
                                            <li>SQL</li>
                                            <li>Swift</li>
                                            <li>HTML5</li>
                                            <li>CSS</li>
                                            <li>PowerShell</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="6" md>
                                <div className="skills-item">
                                    <span className="skill-name">
                                        Libraries & Frameworks
                                    </span>
                                    <div className="description">
                                        <ul>
                                            <li>Node.js</li>
                                            <li>Express</li>
                                            <li>jQuery</li>
                                            <li>Bootstrap</li>
                                            <li>React</li>
                                            <li>Handlebars</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="6" md>
                                <div className="skill-item">
                                    <span className="skill-name">
                                        Tools & Platforms
                                    </span>
                                    <div className="description">
                                        <ul>
                                            <li>Git & GitHub</li>
                                            <li>Command Line</li>
                                            <li>Postman</li>
                                            <li>Firebase</li>
                                            <li>AWS</li>
                                            <li>Google Cloud</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="6" md>
                                <div className="skills-item">
                                    <div className="skill">
                                        <span className="skill-name">
                                            Spoken Languages
                                        </span>
                                    </div>
                                    <div className="description">
                                        <ul>
                                            <li>English</li>
                                            <li>Cantonese</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
