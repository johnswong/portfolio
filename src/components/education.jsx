import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Education extends Component {
    render() {
        return (
            <Container fluid className="component" id="education">
                <Row>
                    <Col className="component-header">
                        <div className="component-header-title">Education</div>
                        <div className="keyline"></div>
                    </Col>
                </Row>
                <Row>
                    <Col className="content">
                        <div className="education-item">
                            <div className="school">
                                <span className="school-name">
                                    San Francisco State University
                                </span>
                                <div className="duration">
                                    Aug 2017 - Dec 2019
                                </div>
                            </div>
                            <div className="school">
                                <span className="degree">
                                    Bachelor of Science in Computer Science
                                </span>
                                <div className="location">
                                    San Francisco, CA
                                </div>
                            </div>
                            <div className="description">
                                Relevant Coursework:
                                <ul>
                                    <li>
                                        Introduction to Computer Programming
                                    </li>
                                    <li>Data Structures</li>
                                    <li>Machine Structures</li>
                                    <li>Programming Methodology</li>
                                    <li>Software Development</li>
                                    <li>Operating System Principles</li>
                                    <li>Analysis of Algorithms</li>
                                    <li>Programming Languages</li>
                                    <li>Software Engineering</li>
                                    <li>Computer Networks</li>
                                    <li>System Administration</li>
                                    <li>Internet App Design & Dev</li>
                                    <li>Introduction to Database Systems</li>
                                    <li>
                                        Interactive Multimedia Application
                                        Development
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
