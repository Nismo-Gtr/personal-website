import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar brand='Nicholas Cowan' id="navbar" right fixed>
            <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
            <NavItem href='components.html'>Components</NavItem>
        </Navbar>
    )
}

export default NavBar;