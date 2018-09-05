import React, { Component } from 'react'
import './BackgroundVideo.css'
import snowing from '../../assets/Snowing-flower.mp4';


class BackgroundVideo extends Component {


    render() {
        return (
            <video id="background-video" muted autoPlay loop>
                <source src={snowing} />
            </video>
        )
    }
}

export default BackgroundVideo; 