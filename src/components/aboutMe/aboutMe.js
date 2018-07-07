import React, { Component } from 'react'
import { Row, Col, Card } from 'react-materialize';
import AOS from 'aos';
import react from '../../assets/react-original-wordmark.svg';
import express from '../../assets/express-original-wordmark.svg';
import mongo from '../../assets/mongodb-original-wordmark.svg'
import node from '../../assets/nodejs-original-wordmark.svg'
import person from '../../assets/account-circle.svg';
import description from '../../assets/format-align-center.svg';


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
            </div>
        )
    }
}

export default AboutMe;