import { AppBar, makeStyles, Toolbar, Typography, useTheme, Drawer, IconButton, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Fragment, useEffect, useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ReorderIcon from '@material-ui/icons/Reorder';
import { NavIcons } from './NavIcons'
import { useWidth } from '../hooks/useWidth';

const drawerWidth = 240

const useStyles = makeStyles( theme => ({
    spacing: {
        flexGrow: 1
    },
    navItems: {
        textDecoration: 'none',
        fontWeight: 'bold',
        color: theme.palette.text.primary,
        padding: '10px 15px',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    toolbar: {
        padding: 0
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    
    },
    drawerPaper: {
    width: drawerWidth,
    },
    itemText: {
        fontWeight: 'bold',
        color: theme.palette.text.primary,
    }
}))

const NavBar = () => {

    const classes = useStyles()
    const width = useWidth()
    const [ section, setSection ] = useState('')
    const [open, setOpen] = useState(false)

    // first option
    const handleChangeSection = async( href ) => {
        await setOpen( false )
        document.querySelector( `[href="${ href }"]` ).click()
    }

    // second option

    const handleChange = ( href ) => {
        setOpen( false )
        setSection( href )
    }



    useEffect( () => {
        if ( section !== '' ) {
            document.querySelector( `[href="${ section }"]` ).click()
        }
    }, [ section ])
    return (
        <Fragment>
            <AppBar elevation={ 0 } position='relative'>
                <Toolbar className={ classes.toolbar }>
                    <NavIcons />
                    <div className={ classes.spacing } />
                    {
                        width === 'xs'
                        && <IconButton onClick={ () => setOpen( true ) }> <MenuIcon /> </IconButton>
                    }
                    <Typography
                        component="a"
                        href="#about"
                        // className={`nav__items animation-change-color ${ false ? "nav__items--active" : ""}`}
                        className={ classes.navItems }
                    >AboutMe</Typography>
                    <Typography
                        component="a"
                        href="#projects"
                        // className={`nav__items animation-change-color ${ false ? "nav__items--active" : ""}`}
                        className={ classes.navItems }
                    >Projects</Typography>
                    <Typography
                        component="a"
                        href="#stack"
                        // className={`nav__items animation-change-color ${  false ? "nav__items--active" : ""}`}
                        className={ classes.navItems }
                    >Stack</Typography>
                </Toolbar>
            </AppBar>
            <Drawer
              variant="temporary"
              anchor="left"
              open={ open }
              onClose={ () => setOpen( false )}
              className={ classes.drawer }
              classes={{
                  paper: classes.drawerPaper
              }}
            >
              <List>
                    <ListItem 
                        button
                        onClick={ () => handleChange('#about') }
                    >
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{ className: classes.itemText }}
                        >
                           AboutMe 
                        </ListItemText>                            
                    </ListItem>
                    <ListItem 
                        button
                        onClick={ () => handleChange('#projects') }
                    >
                        <ListItemIcon>
                            <AppsIcon />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{ className: classes.itemText }}
                        >
                           Projects 
                        </ListItemText>                            
                    </ListItem>
                    <ListItem 
                        button
                        onClick={ () => handleChange('#stack') }
                    >
                        <ListItemIcon>
                            <ReorderIcon />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{ className: classes.itemText }}
                        >
                           Stack 
                        </ListItemText>                            
                    </ListItem>
              </List>
            </Drawer>
        </Fragment>
        
    )
}

export default NavBar