import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>DICE GAME</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                <NavLink to="/signin">Sign In</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar