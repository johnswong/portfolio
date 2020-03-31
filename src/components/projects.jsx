import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

export default class Projects extends Component {
    render() {
        return (
            <Container fluid className="component" id="projects">
                <Row>
                    <Col className="component-header">
                        <div className="component-header-title">Projects</div>
                        <div className="keyline"></div>
                    </Col>
                </Row>
                <Row>
                    <Col className="content">
                        <CardDeck className="mt-2">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="images/SFSU_Gator_Trader_2.png"
                                />
                                <Card.Body>
                                    <Card.Title>SFSU Gator Trader</Card.Title>
                                    <Card.Text>
                                        A group project for my senior software
                                        engineering class. We were tasked with
                                        building a web app with the intention of
                                        providing a platform exclusive to SFSU
                                        students to buy and sell school
                                        materials and etc. I took on the role of
                                        back-end lead and GitHub Master.
                                    </Card.Text>
                                    <br></br>
                                    <Card.Text>
                                        <span className="technology">
                                            Node.js
                                        </span>
                                        <span className="technology">
                                            Express
                                        </span>
                                        <span className="technology">
                                            MySQL
                                        </span>
                                        <span className="technology">
                                            Handlebars
                                        </span>
                                        <span className="technology">CSS</span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                        <a
                                            href="https://github.com/johnswong14/SFSU-Gator-Trader"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-github fa-2x"></i>
                                        </a>
                                        &nbsp; &nbsp;
                                        <a
                                            href="https://sfsugatortrader.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-external-link fa-2x"></i>
                                        </a>
                                    </small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="images/PTQ_2.png"
                                />
                                <Card.Body>
                                    <Card.Title>Online Chess Game</Card.Title>
                                    <Card.Text>
                                        A group project for my web development
                                        class. This online chess game was built
                                        using the chess.js, chessboard.js and
                                        chessboard3.js APIs. The game features
                                        3D chessboards, customizations of game
                                        settings and chess pieces, and a
                                        leaderboard. For this project, I took on
                                        the role of back-end lead.
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="technology">
                                            Node.js
                                        </span>
                                        <span className="technology">
                                            Express
                                        </span>
                                        <span className="technology">
                                            MySQL
                                        </span>
                                        <span className="technology">
                                            Handlebars
                                        </span>
                                        <span className="technology">CSS</span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                        <a
                                            href="https://github.com/johnswong14/online-chess-game"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-github fa-2x"></i>
                                        </a>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                        <CardDeck className="mt-4">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="images/stockx.png"
                                />
                                <Card.Body>
                                    <Card.Title>StockX Spreadsheet</Card.Title>
                                    <Card.Text>
                                        StockX is an online marketplace known
                                        for primarily reselling sought after
                                        sneakers and clothes. This script will
                                        scrape StockX for the market price of a
                                        particular item and update the price in
                                        a spreadsheet.
                                    </Card.Text>
                                    <br></br>
                                    <Card.Text>
                                        <span className="technology">
                                            Python
                                        </span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                        <a
                                            href="https://github.com/johnswong14/stockx-spreadsheet"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-github fa-2x"></i>
                                        </a>
                                    </small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="images/tank_wars_2.png"
                                />
                                <Card.Body>
                                    <Card.Title>Tank Wars Game</Card.Title>
                                    <Card.Text>
                                        Desktop app built for my software
                                        development class. This a two player
                                        game that allows you and a friend to go
                                        head to head with tanks. The map is
                                        designed for user tactics and stealthy
                                        maneuvers. It is also destructible!
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="technology">Java</span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                        <a
                                            href="https://github.com/johnswong14/tank-wars-game"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-github fa-2x"></i>
                                        </a>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
        );
    }
}
