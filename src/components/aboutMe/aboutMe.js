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
            <div className="section white center" id="aboutMe">
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
                        <Card className='white darken-1 skills skills' textClassName='black-text' actions={[<a href='https://mongodb.com'>MongoDB Homepage</a>]}>
                            <img id="mongo" src={mongo} alt="mongoDB logo" />
                            <p>MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas. MongoDB is developed by MongoDB Inc., and is published under a combination of the GNU Affero General Public License and the Apache License.</p>
                        </Card>
                    </Col>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1 skills' textClassName='black-text' actions={[<a href='https://expressjs.com'>Express Homepage</a>]}>
                            <img id="express" src={express} alt="express logo" />
                            <p>Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js.</p>
                        </Card>
                    </Col>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1 skills' textClassName='black-text' actions={[<a href='https://reactjs.org'>React Homepage</a>]}>
                            <img id="react" src={react} alt="react logo" />
                            <p>In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p>
                            <p>React can be used as a base in the development of single-page or mobile applications. Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.</p>
                        </Card>
                    </Col>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1 skills' textClassName='black-text' actions={[<a href='https://nodejs.org'>Node Homepage</a>]}>
                            <img id="node" src={node} alt="node.js logo" />
                            <p>Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside the browser. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. Node.js lets developers use JavaScript to write Command Line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.</p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1 skills' textClassName='black-text' actions={[<a href='https://mysql.com'>MySql Homepage</a>]}>
                            <img id="mysql" src={mysql} alt="mysql logo" />
                            <p>MySQL is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language. The MySQL development project has made its source code available under the terms of the GNU General Public License, as well as under a variety of proprietary agreements.</p>
                        </Card>
                    </Col>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1 skills' textClassName='black-text' actions={[<a href='https://docs.sequelizejs.com'>Sequelize Homepage</a>]}>
                            <img id="sequelizeLogo" src={sequelLogo} alt="sequelize logo" />
                            <p>Sequelize is a promise-based Node.js ORM for Postgres, MySQL, SQLite and Microsoft SQL Server. It features solid transaction support, relations, read replication and more.</p>
                        </Card>
                    </Col>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1 skills' textClassName='black-text' actions={[<a href='https://getbootstrap.com'>Bootstrap Homepage</a>]}>
                            <img id="bootstrap" src={bootstrap} alt="bootstrap logo" />
                            <p>Bootstrap is a free and open-source front-end framework (library) for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only.</p>
                        </Card>
                    </Col>
                    <Col m={3} s={12} data-aos="flip-right">
                        <Card className='white darken-1 skills' textClassName='black-text' actions={[<a href='https://jquery.com'>JQuery Homepage</a>]}>
                            <img id="jq" src={jq} alt="JQuery logo" />
                            <p>jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. It is free, open-source software using the permissive MIT License. Web analysis indicates that it is the most widely deployed JavaScript library by a large margin.</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AboutMe;