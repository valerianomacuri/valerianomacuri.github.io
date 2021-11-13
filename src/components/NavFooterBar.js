import React, { useEffect, useState } from 'react'

export const NavFooterBar = () => {
    const [active, setActive] = useState({})
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const about = document.getElementById('about').getBoundingClientRect().top
            const projects = document.getElementById('projects').getBoundingClientRect().top
            const stack = document.getElementById('stack').getBoundingClientRect().top
            setActive({
                about,
                projects,
                stack
            })
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    useEffect(() => {
        console.log(active)
    })

    return (
        <nav className="nav--footer">
            <a href="#about"><i className={`nav__icons bx bx-home ${ active.about <= 0 && active.projects > 0 ? "nav__items--active" : ""}`}></i></a>
            <a href="#projects"><i className={`nav__icons bx bxs-component ${ active.projects <= 0 && active.stack > 0 ? "nav__items--active" : ""}`}></i></a>
            <a href="#stack"><i className={`nav__icons bx bxs-network-chart ${ active.stack <= 0 ? "nav__items--active" : ""}`} ></i></a>
        </nav>
    )
}
