import React, { Component } from 'react';
import './body.css'
import { Parallax, Footer } from 'react-materialize';
// import PageFooter from '../Footer/footer';
import background from '../../assets/adventure.jpg';
import Portfolio from '../Portfolio/portfolio';
import AboutMe from '../aboutMe/aboutMe'
import Landing from '../Landing/Landing';



class Body extends Component {
    render() {
        return (
            <div>
                <Landing/>
                <div>
                    <AboutMe />
                </div>
                <Parallax imageSrc={background} />
                <div className="section white">
                    <Portfolio />
                </div>
                <Parallax imageSrc={background} />
                {/* <PageFooter/> */}
                <Footer copyrights="2018 Copyright TheNicholasCowan.com"
                    moreLinks={
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    }
                    links={
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!" id="footerLinks">Link 1</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!"id="footerLinks">Link 2</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!"id="footerLinks">Link 3</a></li>
                        </ul>
                    }
                    className='example grey'
                >
                    <h5 className="white-text">Footer Content</h5>
                    <p className="grey-text text-lighten-4">Let me build something wonderful for you.</p>
                </Footer>
            </div>
        )
    }
}


export default Body;