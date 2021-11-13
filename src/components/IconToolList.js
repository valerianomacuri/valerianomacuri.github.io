import React from 'react'
import { IconTool } from './IconTool'

export const IconToolList = () => {

    const tools = [
        "html",
        "css",
        "javascript",
        "react",
        "typescript",
        "redux",
        "jest",
        "git",
        "github",
        "sass",
        "npm",
    ]
    
    return (
        <div className="abilities__grid">
            {
                tools.map( item => {
                    if(item === "react") {
                        return <IconTool key={item} tool={item} rotate="animation-rotate" />
                    } else {
                        return <IconTool key={item} tool={item} />
                    }
                }) 
            }  
        </div>
    )
}
