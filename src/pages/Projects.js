import React from 'react'
import { ProyectItem } from '../components/ProjectItem'
import { ProyectsList } from '../components/ProjectsList'

const data = [
    {
        picture: './assets/images/rn-pokedex.jpg',
        description: 'This application was made with react native, typescript. I consumed the API from pokeapi.co. You can look for your favorite pokemon and know its characteristics',
        app: true,
        repository: 'https://github.com/valerianomacuri/rn-pokedex',
        apk: '',
    },
    {
        picture: './assets/images/rn-netflix.jpg',
        description: 'This application was made with react native, typescript. I consumed the API from The Movie Database. You can search for the most popular movies, the most recent ones, in premieres and know their synopsis, and the cast',
        app: true,
        repository: 'https://github.com/valerianomacuri/react-native-netflix',
        apk: '',
    },
    {
        picture: './assets/images/merch.png',
        description: 'Ecommerce application that integrates the Paypal API, typescript, react hooks and react router were used for this project.',
        app: false,
        repository: 'https://github.com/valerianomacuri/programming-merch',
        apk: '',
    },
    {
        picture: './assets/images/jondev-notes.png',
        description: 'This app allows you to save notes and to-do lists, use as storage localStorage',
        app: false,
        repository: 'https://github.com/valerianomacuri/jondev-notes',
        apk: '',
    },
    {
        picture: './assets/images/netflix.jpg',
        description: 'It is a netflix landing page clone made with HTML and CSS',
        app: false,
        repository: 'https://github.com/valerianomacuri/netflix',
        apk: '',
    },
    {
        picture: './assets/images/doge-exchange.jpg',
        description: 'Application made with react consuming the CoinGecko API',
        app: false,
        repository: 'https://github.com/valerianomacuri/doge-exchange',
        apk: '',
    }
]

const Projects = () => {
    return (
            <div className="body__container">
                <h1 className="hero__title" id="projects">I have done some projects like ...</h1>
                    {/* <Slider /> */}
                    <ProyectsList>
                        {
                            data.map((item, index )=> 
                                <ProyectItem 
                                    key={ index }
                                    app={item.app}  
                                    picture={item.picture} 
                                    description={item.description} 
                                    repository={item.repository}
                                    apk={ item.apk } 
                                />
                            )
                        }
                    </ProyectsList>
            </div>
    )
}

export default Projects
 