import React, { Component } from 'react';
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
                    // moreLinks={
                    //     <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    // }
                    links={
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://github/Nismo-Gtr" id="footerLinks"><img src={github}/></a></li>
                            <li><a className="grey-text text-lighten-3" href="https://linkedin.com/in/thenicholascowan"id="footerLinks"><img src={linkedin}/></a></li>
                            <li><a className="grey-text text-lighten-3" href="mailto:Nick@TheNicholasCowan.com"id="footerLinks"><img src={mail}/></a></li>
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