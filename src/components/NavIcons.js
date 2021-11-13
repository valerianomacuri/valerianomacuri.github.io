import React from 'react'

export const NavIcons = () => {

    const social = {
        linkedin: "https://www.linkedin.com/in/valerianomacuri/",
        github: "https://github.com/valerianomacuri",
        facebook: "https://www.facebook.com/macuri.2140"
    }

    return (
        <div className="nav__container--icons">
            <a href={social.linkedin} target="_blank" rel="noreferrer"><i className='nav__icons animation-change-color bx bxl-linkedin-square'></i></a>
            <a href={social.github} target="_blank" rel="noreferrer"><i className='nav__icons animation-change-color bx bxl-github'></i></a>
            <a href={social.facebook} target="_blank" rel="noreferrer"><i className='nav__icons animation-change-color bx bxl-facebook-circle' ></i></a>
        </div>
    )
}
