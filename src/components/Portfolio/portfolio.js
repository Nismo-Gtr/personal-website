import React, { Component } from 'react'
import { Row, Col, Card, CardTitle } from 'react-materialize';
import homeOffice from '../../assets/home-office.jpg';
import trivia from '../../assets/trivia-time.png'
import friendFinder from '../../assets/Friend-Finder.png';
import burger from '../../assets/Build-a-burger.png';
import clickGame from '../../assets/click-game.png'
import AOS from 'aos';
import './portfolio.css';

class Portfolio extends Component {

    componentDidMount() {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine'
        });
    }

    render() {
        return (
            <div className="row container" id="portfolio">
                <h2 className="header center">Portfolio</h2>
                <Row>
                    <div data-aos="fade-right" data-aos-delay={100}>
                        <Col m={4} s={12}>
                            <Card header={<CardTitle reveal image={trivia} waves='light' />}
                                title="Trivia Time!"
                                reveal={<p>A trivia game that pulls the question on the fly from the OpenTrivia api. Built using react, react-router, OpenTrivia api, axios, and react-materialize<br />
                                    <a href="https://nismo-gtr.github.io/TriviaGame/">Play Trivia Time!</a></p>}>
                            </Card>
                        </Col>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={100}>
                        <Col m={4} s={12}>
                            <Card header={<CardTitle reveal image={clickGame} waves='light' />}
                                title="React Click Game"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="https://nismo-gtr.github.io/friend-card-memory/">World Cup of Clicks</a></p>}>
                            </Card>
                        </Col>
                    </div>
                    <div data-aos="fade-left" data-aos-delay={100}>
                        <Col m={4} s={12}>
                            <Card header={<CardTitle reveal image={burger} waves='light' />}
                                title="Build a Burger App"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="https://burgerh.herokuapp.com/burgers">Build a Burger Here!</a></p>}>
                            </Card>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div data-aos="fade-right" data-aos-delay={600}>
                        <Col m={4} s={12}>
                            <Card header={<CardTitle reveal image={friendFinder} waves='light' />}
                                title="Friend Finder"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="https://friendfindernjc.herokuapp.com/">Friend Finder App</a></p>}>
                            </Card>
                        </Col>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={600}>
                        <Col m={4} s={12}>
                            <Card header={<CardTitle reveal image={homeOffice} waves='light' />}
                                title="Gettaway App"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="#">This is a link</a></p>}>
                            </Card>
                        </Col>
                    </div>
                    <div data-aos="fade-left" data-aos-delay={600}>
                        <Col m={4} s={12}>
                            <Card header={<CardTitle reveal image={homeOffice} waves='light' />}
                                title="Card Title"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="#">This is a link</a></p>}>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </div>
        )
    }
}

export default Portfolio;