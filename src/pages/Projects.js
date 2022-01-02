import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const data = [
    {
        picture: './assets/images/journal-app.png',
        description: 'Application to create, save, modify and delete notes, where you can also upload images, to access it you have to login, either with an email or with a gmail account. This application was made with React, Javascript, Redux (for state management), Firebase (for authentication), Cloudinary (for uploading images).',
        app: false,
        repository: 'https://github.com/valerianomacuri/journal-app',
        apk: '',
    },
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
        picture: './assets/images/gif-expert-app.png',
        description: 'Application made with react, you can search for your favorite gifs, it shows you gifs of 20 results, the API of Giphy developers is consumed.',
        app: false,
        repository: 'https://github.com/valerianomacuri/react-gifexpertapp',
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

const useStyles = makeStyles( theme => ({
    title: {
        fontWeight: 'bold'
    },
    cardContent: {
        minHeight: '170px',
        textAlign: 'center'
    },
    cardActions: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '70px'
    },
    styledLink: {
        color: theme.palette.secondary.main,
        fontWeight: 'bold'
    },
    button:{
        color: 'yellow'
    }
}))

const Projects = () => {

    const classes = useStyles()

    return (
            <Grid container direction='column' spacing={ 4 }>
                    <Grid item>
                        <Typography variant="h4" id="projects" className={ classes.title }>I have done some projects like ...</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={ 4 }>
                            {
                                data.map((item, index )=> 
                                    // <ProyectItem 
                                    //     key={ index }
                                    //     app={item.app}  
                                    //     picture={item.picture} 
                                    //     description={item.description} 
                                    //     repository={item.repository}
                                    //     apk={ item.apk } 
                                    // />
                                    <Grid item xs={ 12 } sm={ 6 } key={ index }>
                                        <Card variant='outlined'>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                image={ item.picture }
                                            />
                                            <CardContent
                                                className={ classes.cardContent }
                                            >
                                                <Typography variant="body2" color="text.secondary">
                                                    { item.description }
                                                </Typography>
                                            </CardContent>
                                            <CardActions className={ classes.cardActions }>
                                                <Link href={ item.repository } target="_blank" className={ classes.styledLink }><i className='bx bxl-github'></i>Get the github repository</Link>
                                                {
                                                    item.app && <Link href={ item.apk } target="_blank" className={ classes.styledLink }><i className='bx bxl-android'></i>Download for Android</Link>
                                                }
                                            </CardActions>
                                            </Card>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Grid>
            </Grid>
    )
}

export default Projects
 