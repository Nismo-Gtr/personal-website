import React, { Component } from 'react'
import { Row, Col, Card } from 'react-materialize';
import AOS from 'aos';
import sequelLogo from '../../assets/sequelize-original-wordmark.svg';
import mysql from '../../assets/mysql-original-wordmark.svg';
import bootstrap from '../../assets/bootstrap-plain-wordmark.svg';
import jq from '../../assets/jquery-original-wordmark.svg';
import react from '../../assets/react-original-wordmark.svg';
import express from '../../assets/express-original-wordmark.svg';
import mongo from '../../assets/mongodb-original-wordmark.svg'
import node from '../../assets/nodejs-original-wordmark.svg'
import person from '../../assets/user.svg';
import description from '../../assets/format-align-center.svg';
import './aboutMe.css'


class AboutMe extends Component {
    componentDidMount() {
        AOS.init({
            duration: 600
        })
    }
    render() {
        return (
            <div className="section white center">
                <Row>
                    <Col s={12}>
                        <img id="person" src={person} alt="Personal Avatar" />
                    </Col>
                </Row>
                <Row>
                    <Col s={12}>
                        <h2>About Me</h2>
                    </Col>
                </Row>
                <Row>
                    <Col s={12}>
                        <p id="brandStatement">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
                <Row>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1' textClassName='white-text' actions={[<a href='https://mongodb.com'>MongoDB Homepage</a>]}>
                            <img id="mongo" src={mongo} alt="mongoDB logo" />
                            <img id="description" src={description} alt="" />
                        </Card>
                    </Col>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1' textClassName='white-text' actions={[<a href='https://expressjs.com'>Express Homepage</a>]}>
                            <img id="express" src={express} alt="express logo" />
                            <img id="description" src={description} alt="" />
                        </Card>
                    </Col>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1' textClassName='white-text' actions={[<a href='https://reactjs.org'>React Homepage</a>]}>
                            <img id="react" src={react} alt="react logo" />
                            <img id="description" src={description} alt="" />
                        </Card>
                    </Col>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1' textClassName='white-text' actions={[<a href='https://nodejs.org'>Node Homepage</a>]}>

                            <img id="node" src={node} alt="node.js logo" />
                            <img id="description" src={description} alt="" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1' textClassName='white-text' actions={[<a href='https://mysql.com'>MySql Homepage</a>]}>
                            <img id="mysql" src={mysql} alt="mysql logo" />
                            <img id="description" src={description} alt="" />
                        </Card>
                    </Col>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1' textClassName='white-text' actions={[<a href='https://docs.sequelizejs.com'>Sequelize Homepage</a>]}>
                            <img id="sequelizeLogo" src={sequelLogo} alt="sequelize logo" />
                            <img id="description" src={description} alt="" />
                        </Card>
                    </Col>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1' textClassName='white-text' actions={[<a href='https://getbootstrap.com'>Bootstrap Homepage</a>]}>
                            <img id="bootstrap" src={bootstrap} alt="bootstrap logo" />
                            <img id="description" src={description} alt="" />
                        </Card>
                    </Col>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1' textClassName='white-text' actions={[<a href='https://jquery.com'>JQuery Homepage</a>]}>

                            <img id="jq" src={jq} alt="JQuery logo" />
                            <img id="description" src={description} alt="" />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AboutMe;