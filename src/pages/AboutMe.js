import { Avatar, Button, Container, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { NavIcons } from '../components/NavIcons'

const useStyles = makeStyles( theme => ({
    styledButton: {
        backgroundColor: '#eee',
        color: theme.palette.text.primary,
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.main,
            backgroundColor: '#eee',
        }
    },
    styledLink: {
        color: theme.palette.text.primary,
    },
    title: {
        fontWeight: 'bold'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        minHeight: 'calc(100vh - 70px)' 
    },
    avatar: {
        [theme.breakpoints.up('xs')]: {
            width: '50%',
            height: '50%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '90%',
            height: '90%',
        },
        [theme.breakpoints.up('md')]: {
            width: '80%',
            height: '80%',
        }
    },
    avatarContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
}))

const AboutMe = () => {

    const classes = useStyles()
    return (
          <Grid container  className={ classes.container } id="about">
            <Grid item lg={ 8 } sm={ 8 } xs={ 12 } >
                <Typography variant="h4" color="textSecondary" className={ classes.title }>Hello, I'm <span className="tracking-in-expand">Frontend Developer</span></Typography>
                <Typography color="textPrimary">
                Hi, I introduce myself, I am a person who loves the world of programming, I am open to work, I excel at developing frontend applications with React.
                <br />
                <br />
                I have had great achievements such as completing the School of Javascript, or the learning path Frontend with React at Platzi.
                </Typography>
                <NavIcons />
                <Grid container spacing={ 2 }>
                    <Grid item xs={ 12 } sm={ 6 }>
                            <Link href=".\assets\documents\Leonardo Valeriano SAMPLE CV HQ.pdf" target="_blank" className={ classes.styledLink } underline='none'>
                                <Button fullWidth className={ classes.styledButton } variant='contained' disableElevation disableRipple> 
                                    <i className='bx bx-file'></i>Download Resume
                                </Button>
                            </Link>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 }>
                            <Link href="https://wa.me/+51934643232" target="_blank"  rel="noreferrer" underline='none'>
                                <Button fullWidth variant="contained" disableElevation>
                                    Contact Me
                                </Button>
                            </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={ 4 } sm={ 4 } xs={ 12 } className={ classes.avatarContainer }> 
                <Avatar alt="photo portrait" src="./assets/images/photo.png" className={ classes.avatar } />
            </Grid>      
        </Grid>
    )
}
 export default AboutMe
