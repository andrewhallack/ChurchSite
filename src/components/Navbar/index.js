import React from 'react';
import {Nav, Burger, NavLogo, NavMenu, NavLink, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {

    return (
        <>
            <Nav id="navbar">
                <NavLogo to="/">
                    <h1>The Holy Protection</h1>
                </NavLogo>
                <Burger onClick={toggle}/>
                <NavMenu>
                    <NavLink to='/' exact activeStyle>Home</NavLink>
                    <NavLink to='/about' activeStyle>About Us</NavLink>
                    <NavLink to='/calendar' activeStyle>Calendar</NavLink>
                    <NavLink to='/news' activeStyle>News</NavLink>
                    <NavLink to='/announcements' activeStyle>Announcements</NavLink>
                    <NavLink to='/contact-us' activeStyle>Contact Us</NavLink>
                </NavMenu>
                <NavBtn>
                   <NavBtnLink to='/donate'>Donate</NavBtnLink> 
                </NavBtn>
            </Nav>
        </>
    );
}

export default Navbar
