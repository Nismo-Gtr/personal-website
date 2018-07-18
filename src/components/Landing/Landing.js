import React, { Component } from 'react';
import snowing from '../../assets/Snowing-flower.mp4';
import codeIcon from '../../assets/code-icon.svg';
import './Landing.css';

class Landing extends Component {
    render() {
        return (
            <div>
            <div className="content center">
            <h1>Full Stack Web Developer</h1>
            <img src={codeIcon} id="codeIcon"/>
            </div>
            <video id="background-video" loop autoPlay>
                <source src={snowing} />
            </video>
        </div>
        )
    }
}
    
export default Landing;