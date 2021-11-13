import React from 'react'
import { NavIcons } from '../components/NavIcons'

const AboutMe = () => {
    return (
          <section  className="hero__container" id="about">
            <div className="hero__texts">
                <h1 className="hero__title">Hello, I'm <span className="tracking-in-expand">Frontend Developer</span></h1>
                <h2 className="hero__subtitle">
                Hi, I introduce myself, I am a person who loves the world of programming, I am open to work, I excel at developing frontend applications with React.
                <br />
                <br />
                I have had great achievements such as completing the School of Javascript, or the learning path Frontend with React at Platzi.
                </h2>
                <NavIcons />
                <div className="button__container">
                    <a href=".\assets\documents\Leonardo Valeriano SAMPLE CV HQ.pdf" target="_blank" className="button button--resume animation-change-color">
                    <i className='bx bx-file'></i>Download Resume
                    </a>
                    <a href="https://wa.me/+51934643232" target="_blank"  rel="noreferrer" className="button button--contact animation-change-background">
                        {/* Get a free quote */}
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="hero__image">
                <img className="shadow-drop-2-center" src="./assets/images/photo.png" alt="photo portrait"/>
            </div>
        </section>
    )
}
 export default AboutMe
