import React from 'react'
import { NavIcons } from './NavIcons'


const NavBar = () => {
    return (
        <nav className="nav">
            <NavIcons />
            <div className="nav__container--items">
                <a
                    href="#about"
                    className={`nav__items animation-change-color ${ false ? "nav__items--active" : ""}`}
                >AboutMe</a>
                <a
                    href="#projects"
                    className={`nav__items animation-change-color ${ false ? "nav__items--active" : ""}`}
                >Projects</a>
                <a
                    href="#stack"
                    className={`nav__items animation-change-color ${  false ? "nav__items--active" : ""}`}
                >Stack</a>
            </div>
        </nav>
        
    )
}

export default NavBar