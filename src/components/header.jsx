import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

export default class Header extends Component {
    render() {
        return (
            <Navbar
                collapseOnSelect
                expand="sm"
                bg="light"
                variant="light"
                sticky="top"
            >
                <Navbar.Brand href="./">
                    <div
                        className="brand-img"
                        style={{
                            backgroundImage: "url(images/brand_logo_bold.png)"
                        }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Col sm="auto">
                            <Nav.Link href="#about">About</Nav.Link>
                        </Col>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link
                            className="resume-btn"
                            href="resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
