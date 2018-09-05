import React, { Component } from 'react';
import snowing from '../../assets/Snowing-flower.mp4';
import redwood from '../../assets/redwood.jpg';
import CodeIcon from '../CodeIcon/CodeIcon.js'
import anime from 'animejs'
// import BackgroundVideo from '../BackgroundVideo/BackgroundVideo'
// import Initials from '../Initials/Initials'
import './Landing.css';
// import MenuButton from '../MenuButton/MenuButton';
// import DownArrow from '../DownArrow/DownArrow';





class Landing extends Component {

    componentDidMount() {
        anime({
            targets: 'h1',
            delay: 8000,
            easing: 'easeInOutSine',
            opacity: 1,
            duration: 2000
        })
    }

    render() {
        return (

                <div className="content">
                {/* <h1>Full Stack Web Developer</h1> */}
                <CodeIcon/>
                {/* <DownArrow/> */}
                {/* <BackgroundVideo id="background-video"/> */}
                <img src={redwood} id="redwood" alt="Redwood trees" />
                <video id="background-video" muted autoPlay loop>
                    <source src={snowing} />
                </video>
            </div>
        )
    }
}

export default Landing;