import React, { Component } from 'react'
import './DownArrow.css'
import anime from 'animejs'





class DownArrow extends Component {

componentDidMount() {
    anime({
        targets: '#downArrow path',
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: 11000,
        duration: 1500,
        easing: 'easeInSine'
    });

    anime({
        targets: '#downArrow path',
        delay: 12500,
        fillOpacity: 1
    })
    anime({
        targets: '#downArrow path',
        translateY: '3.5vh',
        duration: 1000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });
}

    render() {
        return (
            // <div id="downArrow">
                <a href="#aboutMe" id="downArrow">
                <svg version="1.1" xmlns="#aboutMe" viewBox="0 0 175 175" xmlnsXlink="#aboutMe" enableBackground="new 0 0 175 175">
                 <g fill="white" fillOpacity="0" fillRule="evenodd" stroke="rgba(0,0,0,.4)" strokeWidth="5" className="lines">
                    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                </g>
                </svg>
                </a>
                // </div >
        )
    }
}

export default DownArrow;