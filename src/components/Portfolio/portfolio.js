import React, { Component } from 'react'
import { Row, Col, Card, CardTitle } from 'react-materialize';
// import homeOffice from '../../assets/home-office.jpg';
import trivia from '../../assets/trivia-time.png'
import friendFinder from '../../assets/Friend-Finder.png';
import burger from '../../assets/Build-a-burger.png';
import clickGame from '../../assets/click-game.png'
import AOS from 'aos';
import './portfolio.css';
import ghLogo from '../../assets/github-original.svg'

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
                    <div>
                        <Col m={6} s={12}>
                            <Card header={<CardTitle reveal image={trivia} waves='light' />}
                                title="Trivia Time!"
                                reveal={<div><p>A trivia game that pulls questions live from OpenTrivia api. Built using react, react-router, OpenTrivia api, axios, and react-materialize</p><br />
                                     <ul>
                                        <li id="heading">Built Using</li><br/><br/>
                                        <li>React.js</li><br/><br/>
                                        <li>React Router</li><br/><br/>
                                        <li>OpenTrivia API</li><br/><br/>
                                        <li>Axios</li><br/><br/>
                                        <li>React-Materialize</li><br/>
                                    </ul>
                                    <a href="https://github.com/Nismo-Gtr/TriviaGame"><img src={ghLogo} className="ghLogo" alt="Git Hub Logo"></img></a><br/>
                                    <a href="https://nismo-gtr.github.io/TriviaGame/">Play Trivia Time!</a></div>}>
                            </Card>
                        </Col>
                    </div>
                    <div>
                        <Col m={6} s={12}>
                            <Card header={<CardTitle reveal image={clickGame} waves='light' />}
                                title="React Click Game"
                                reveal={<div><p>Memory based click game built using React.</p><br />
                                    <ul>
                                        <li id="heading">Built Using</li><br/><br/>
                                        <li>React.js</li><br/><br/>
                                    </ul>
                                    <a href="https://github.com/Nismo-Gtr/friend-card-memory"><img src={ghLogo} className="ghLogo" alt="Git Hub Logo"></img></a><br/>
                                    <a href="https://nismo-gtr.github.io/friend-card-memory/">World Cup of Clicks</a></div>}>
                            </Card>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div>
                        <Col m={6} s={12}>
                            <Card header={<CardTitle reveal image={friendFinder} waves='light' />}
                                title="Friend Finder"
                                reveal={<div><p>Friend Finder Survey liat matches you wili friends based on your answers. Built using React.</p><br />
                                    <ul>
                                        <li id="heading">Built Using</li><br/><br/>
                                        <li>JavaScript</li><br/><br/>
                                        <li>Express.js</li><br/><br/>
                                        <li>Node.js</li><br/><br/>
                                    </ul>
                                    <a href="https://github.com/Nismo-Gtr/findFriends"><img src={ghLogo} className="ghLogo" alt="Git Hub Logo"></img></a><br/>
                                    <a href="https://friendfindernjc.herokuapp.com/">Friend Finder App</a></div>}>
                            </Card>
                        </Col>
                    </div>
                    <div data-aos="fade-left" data-aos-delay={100}>
                        <Col m={6} s={12}>
                        <Card header={<CardTitle reveal image={burger} waves='light' />}
                                title="Build a Burger App"
                                reveal={<div><p>App that let's you create your dream Burger, lien devour it.</p><br/>
                                    <ul>
                                        <li id="heading">Built Using</li><br/><br/>
                                        <li>JavaScript</li><br/><br/>
                                        <li>Express.js</li><br/><br/>
                                        <li>Node.js</li><br/><br/>
                                        <li>Handlebars</li><br/><br/>
                                        <li>mySql</li><br/><br/>
                                    </ul> 
                                    <a href="https://github.com/Nismo-Gtr/burger"><img src={ghLogo} className="ghLogo" alt="Git Hub Logo"></img></a><br/>
                                    <a href="https://burgerh.herokuapp.com/burgers">Build a Burger Here!</a></div>}>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </div>
        )
    }
}

export default Portfolio;