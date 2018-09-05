import React, { Component } from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'
import './body.css'
import { Parallax, Footer } from 'react-materialize';
// import PageFooter from '../Footer/footer';
import background from '../../assets/adventure.jpg';
import Portfolio from '../Portfolio/portfolio';
import AboutMe from '../aboutMe/aboutMe'
import Landing from '../Landing/Landing';
import github from '../../assets/github-original.svg';
import mail from '../../assets/letter.svg';
import linkedin from '../../assets/linkedin-original.svg';
import NavBar from '../NavBar/NavBar';
// import RocketLoader from '../RocketLoader/RocketLoader';
// import anime from 'animejs'




class Body extends Component {
        // componentDidMount() {
        //     <RocketLoader/>
        // }
    render() {
        return (
            <div>
                {/* <RocketLoader/> */}
                <NavBar/>
                <Landing/>
                <AboutMe />
                <Parallax imageSrc={background} />
                <Portfolio />
                <Parallax imageSrc={background}/>
                 {/* <PageFooter/> */}
                 <Footer copyrights="2018 Copyright TheNicholasCowan.com"
                    links={
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://github/Nismo-Gtr" id="footerLinks"><img src={github} alt="Git Hub Logo"/></a></li>
                            <li><a className="grey-text text-lighten-3" href="https://linkedin.com/in/thenicholascowan"id="footerLinks"><img src={linkedin} alt="Linked in Logo"/></a></li>
                            <li><a className="grey-text text-lighten-3" href="mailto:ncowan3@outlook.com"id="footerLinks"><img src={mail} alt="Email Logo"/></a></li>
                        </ul>
                    }
                    className='example grey'
                >
                    <h5 className="white-text">Nicholas Cowan</h5>
                    <p className="grey-text text-lighten-4">Let me build something wonderful for you.</p>
                </Footer> 
            </div>
        )
    }
}


export default Body;