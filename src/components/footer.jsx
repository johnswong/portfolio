import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Footer extends Component {
    render() {
        return (
            <Container fluid className="footer">
                <Container>
                    <Row className="mx-0">
                        <Col sm="12" md>
                            <div className="footer-copyright">
                                Copyright © 2020 Johnson Wong. All rights
                                reserved.
                            </div>
                        </Col>
                        <Col sm="12" md="auto">
                            <div className="about-social">
                                <a href="mailto:johnswong14@gmail.com">
                                    <i className="fa fa-envelope fa-lg"></i>
                                </a>
                                &nbsp;
                                <a
                                    href="https://github.com/johnswong14"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-github fa-lg"></i>
                                </a>
                                &nbsp;
                                <a
                                    href="https://www.linkedin.com/in/johnswong14"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-linkedin fa-lg"></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}
