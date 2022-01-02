import { Fragment } from "react"
import { IconButton, makeStyles } from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const social = {
    linkedin: "https://www.linkedin.com/in/valerianomacuri/",
    github: "https://github.com/valerianomacuri",
    facebook: "https://www.facebook.com/macuri.2140"
}

const useStyles = makeStyles( theme => ({
    anchor: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}))

export const NavIcons = () => {

    const classes = useStyles()
    return (
        <Fragment>
            <IconButton aria-label="linkedin-button" onClick={ f => f }> 
                <a href={social.linkedin} target="_blank" rel="noreferrer" className={ classes.anchor }><LinkedInIcon /></a>
            </IconButton>
            <IconButton aria-label="linkedin-button" onClick={ f => f }> 
                <a href={social.github} target="_blank" rel="noreferrer" className={ classes.anchor }><GitHubIcon /></a>
            </IconButton>
            <IconButton aria-label="linkedin-button" onClick={ f => f }> 
                <a href={social.facebook} target="_blank" rel="noreferrer" className={ classes.anchor }><FacebookIcon /></a>
            </IconButton>      
        </Fragment>
    )
}
