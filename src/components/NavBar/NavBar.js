import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './NavBar.css'
import Headroom from 'react-headroom';

const NavBar = () => {
    return (
        <Headroom>
        <Navbar brand='Nicholas Cowan' id="navbar" right fixed>
            <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
            <NavItem href='components.html'>Components</NavItem>
        </Navbar>
        </Headroom>
    )
}

export default NavBar;