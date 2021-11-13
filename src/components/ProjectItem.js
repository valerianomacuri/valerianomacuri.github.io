import React from 'react'

export const ProyectItem = ({picture, app, description, repository, apk}) => {
    return (
        <div className='proyect-card'>
            <img className="proyect-picture" src={ picture } />
            <div className="proyect-texts">
                <p className="proyect-description">{ description }</p>
                <div className="proyect-icons">
                    <a className="proyect-icons--item" href={ repository } target="_blank"><i className='bx bxl-github'></i>Get the github repository</a>
                    {
                        app && <a className="proyect-icons--item" href={ apk } target="_blank"><i className='bx bxl-android'></i>Download for Android</a>
                    }
                </div>
            </div>
        </div>
    )
}
