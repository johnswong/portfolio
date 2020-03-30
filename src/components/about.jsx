import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class About extends Component {
    render() {
        return (
            <Container fluid className="component" id="about">
                <Row>
                    <Col className="content">
                        <div
                            className="selfie-img"
                            style={{
                                backgroundImage: "url(images/selfie.png)"
                            }}
                        />
                        <div className="about-social">
                            <a href="mailto:johnswong14@gmail.com">
                                <i className="fa fa-envelope fa-2x"></i>
                            </a>
                            &nbsp;
                            <a
                                href="https://github.com/johnswong14"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-github fa-2x"></i>
                            </a>
                            &nbsp;
                            <a
                                href="https://www.linkedin.com/in/johnswong14"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                        </div>
                        <div className="name">Johnson Wong</div>
                        <div className="position">Software Engineer</div>
                        <div className="about me">
                            Hello, world! I'm Johnson, a Computer Science
                            graduate from San Francisco State University based
                            in San Francisco, CA. Having a strong experience in
                            technical troubleshooting and a knack for
                            problem-solving, has helped me create some amazing
                            things. I enjoy building things that live on the
                            internet and love exploring new technologies. I'm
                            currently seeking a role as a Full Stack or Backend
                            Engineer.
                            <br></br>
                            <br></br>
                            Aside from my tech-savvy self, I enjoy finding and
                            listening to music. In my downtime, I would relax by
                            queueing up tracks and mixing them together. Yes,
                            I'm also a DJ! When I'm not in my developer or DJ
                            shoes, I'm looking at collecting shoes. Fun fact, I
                            currently own 80+ pairs of sneakers 🤯
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
