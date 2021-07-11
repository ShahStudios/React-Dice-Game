import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavBtnLink to="/signup">Sign In</NavBtnLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar