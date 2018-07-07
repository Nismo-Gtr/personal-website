import React, { Component } from 'react';
import './body.css'
import { Parallax, Footer } from 'react-materialize';
// import PageFooter from '../Footer/footer';
import background from '../../assets/adventure.jpg';
import Portfolio from '../Portfolio/portfolio';
import snowing from './Snowing-flower.mp4';
import AboutMe from '../aboutMe/aboutMe'



class Body extends Component {
    render() {
        return (
            <div>
                <div>
                    <video id="background-video" loop autoPlay>
                        <source src={snowing} />
                    </video>
                    <h1>Full Stack Web Developer</h1>
                </div>
                <div>
                    <AboutMe />
                </div>
                <Parallax imageSrc={background} />
                <div className="section white">
                    <Portfolio />
                </div>
                <Parallax imageSrc={background} />
                <Footer copyrights="2018 Copyright TheNicholasCowan.com"
                    moreLinks={
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    }
                    links={
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    }
                    className='example grey'
                >
                    <h5 className="white-text">Footer Content</h5>
                    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </Footer>
            </div>
        )
    }
}


export default Body;