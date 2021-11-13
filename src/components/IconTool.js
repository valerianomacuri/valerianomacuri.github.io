import React from 'react'

export const IconTool = ({
    tool,
    rotate="",
}) => {


    return (
            <div className="abilities__container-icon tooltip">
                <img className={`abilities__icon animation-zoom ${rotate}`} src={`./assets/svg/${tool}.svg`}/>
                <div class="top">
                    <h3 style={{
                        textAlign: 'center',
                    }}>{ tool }</h3>
                    <i></i>
                </div>
            </div>
    )
}
