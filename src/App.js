import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/header";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skils";
import Footer from "./components/footer";

class App extends Component {
    render() {
        return (
            <Container fluid>
                <Header></Header>
                <Container>
                    <About></About>
                    <Education></Education>
                    <Experience></Experience>
                    <Projects></Projects>
                    <Skills></Skills>
                </Container>
                <Footer></Footer>
            </Container>
        );
    }
}

export default App;
