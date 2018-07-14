import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './NavBar.css'
import Headroom from 'react-headroom';
import github from '../../assets/github-original.svg';
import mail from '../../assets/letter.svg';
import linkedin from '../../assets/linkedin-original.svg';

const NavBar = () => {
    return (
        <Headroom>
            <Navbar brand='Nicholas Cowan' id="navbar" right fixed>
                <NavItem href='#aboutMe'>About Me</NavItem>
                <NavItem href='#portfolio'>Portfolio</NavItem>
                <NavItem href='https://github.com/Nismo-Gtr'id="navLinks"><img src={github}/></NavItem>
                <NavItem href='https://linkedin.com/in/thenicholascowan' id="navLinks"><img src={linkedin} /></NavItem>
                <NavItem href='mailto:Nick@thenicholascowan.com' id="navLinks"><img src={mail} /></NavItem>
            </Navbar>
        </Headroom>
    )
}

export default NavBar;