import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Experience extends Component {
    render() {
        return (
            <Container fluid className="component" id="experience">
                <Row>
                    <Col className="component-header">
                        <div className="component-header-title">Experience</div>
                        <div className="keyline"></div>
                    </Col>
                </Row>
                <Row>
                    <Col className="content">
                        <div className="experience-item">
                            <div className="job">
                                <span className="job-name">Apple</span>
                                <div className="duration">
                                    Oct 2018 - Present
                                </div>
                            </div>
                            <div className="job">
                                <span className="title">
                                    Technical Specialist
                                </span>
                                <div className="location">
                                    San Francisco, CA
                                </div>
                            </div>
                            <div className="description">
                                <ul>
                                    <li>
                                        Troubleshoot customers’ mobile device(s)
                                        such as iPhone, iPad and Apple Watch, as
                                        well as iCloud related issues
                                    </li>
                                    <li>
                                        Present options and solutions to
                                        customers after troubleshooting in order
                                        for them to make an informed decision
                                    </li>
                                    <li>
                                        Multi-task by attending to different
                                        customers in a timely manner
                                    </li>
                                    <li>
                                        Assist peers with troubleshooting
                                        customer devices
                                    </li>
                                    <li>
                                        Share feedback amongst peers to improve
                                        external and internal customer
                                        experience
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="experience-item">
                            <div className="job">
                                <span className="job-name">Jobvite</span>
                                <div className="duration">
                                    Jun 2018 - Aug 2018
                                </div>
                            </div>
                            <div className="job">
                                <span className="title">DevOps/IT Intern</span>
                                <div className="location">San Mateo, CA</div>
                            </div>
                            <div className="description">
                                <ul>
                                    <li>
                                        Responded to help desk tickets that
                                        involved office-related technical issues
                                        in a timely manner
                                    </li>
                                    <li>
                                        Configured computers for new hires
                                        according to company needs and standards
                                    </li>
                                    <li>
                                        Helped migrate a local server, where
                                        builds for the mobile platform took
                                        place, to the cloud, and insured
                                        specific build tools were installed and
                                        running properly
                                    </li>
                                    <li>
                                        Managed the company’s active directory
                                        by organizing and updating users and
                                        groups
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="experience-item">
                            <div className="job">
                                <span className="job-name">Apple</span>
                                <div className="duration">
                                    Aug 2017 - Oct 2018
                                </div>
                            </div>
                            <div className="job">
                                <span className="title">
                                    Product Specialist
                                </span>
                                <div className="location">
                                    San Francisco, CA
                                </div>
                            </div>
                            <div className="description">
                                <ul>
                                    <li>
                                        Focus on uncovering customer needs and
                                        present a complete solution by utilizing
                                        probing and positioning skills, as well
                                        as product-service knowledge
                                    </li>
                                    <li>
                                        Guide customers in setting up their
                                        device(s), and invite them to learn more
                                        about their device(s)
                                    </li>
                                    <li>
                                        Provide technical support for Apple
                                        applications and software issues
                                        including software reset, iCloud setup,
                                        password reset, Apple Pay, and e-mail
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
