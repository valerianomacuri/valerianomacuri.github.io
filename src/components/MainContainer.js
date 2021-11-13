import React from 'react'
import NavBar from './NavBar'
import { NavFooterBar } from './NavFooterBar'

export const MainContainer = ({ children }) => {
    return (
        <>
            <div className="hero">
                <div className="container">
                <NavBar />
                    { children }
                </div>
            </div>
            <NavFooterBar />
            <p className="footer__text">Designed by Leonardo Valeriano</p>
        </>
    )
}
