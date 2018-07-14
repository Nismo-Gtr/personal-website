import React, { Component } from 'react'
import { Row, Col, Card, CardTitle } from 'react-materialize';
import homeOffice from '../../assets/home-office.jpg';
import friendFinder from '../../assets/Friend-Finder.png';
import burger from '../../assets/Build-a-burger.png';
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
                        <Col m={4}>
                            <Card header={<CardTitle reveal image={friendFinder} waves='light' />}
                                title="Friend Finder"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="https://friendfindernjc.herokuapp.com/">Friend Finder App</a></p>}>

                            </Card>
                        </Col>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={100}>
                        <Col m={4}>
                            <Card header={<CardTitle reveal image={burger} waves='light' />}
                                title="Build a Burger App"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="https://burgerh.herokuapp.com/burgers">Build a Burger Here!</a></p>}>
                            </Card>
                        </Col>
                    </div>
                    <div data-aos="fade-left" data-aos-delay={100}>
                        <Col m={4}>
                            <Card header={<CardTitle reveal image={homeOffice} waves='light' />}
                                title="Card Title"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="#">This is a link</a></p>}>
                            </Card>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div data-aos="fade-right" data-aos-delay={600}>
                        <Col m={4}>
                            <Card header={<CardTitle reveal image={homeOffice} waves='light' />}
                                title="Card Title"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="#">This is a link</a></p>}>
                            </Card>
                        </Col>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={600}>
                        <Col m={4}>
                            <Card header={<CardTitle reveal image={homeOffice} waves='light' />}
                                title="Card Title"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="#">This is a link</a></p>}>
                            </Card>
                        </Col>
                    </div>
                    <div data-aos="fade-left" data-aos-delay={600}>
                        <Col m={4}>
                            <Card header={<CardTitle reveal image={homeOffice} waves='light' />}
                                title="Card Title"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="#">This is a link</a></p>}>
                            </Card>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div data-aos="fade-right" data-aos-delay={900}>
                        <Col m={4}>
                            <Card header={<CardTitle reveal image={homeOffice} waves='light' />}
                                title="Card Title"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="#">This is a link</a></p>}>
                            </Card>
                        </Col>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={900}>
                        <Col m={4}>
                            <Card header={<CardTitle reveal image={homeOffice} waves='light' />}
                                title="Card Title"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.<br />
                                    <a href="#">This is a link</a></p>}>
                            </Card>
                        </Col>
                    </div>
                    <div data-aos="fade-left" data-aos-delay={900}>
                        <Col m={4}>
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