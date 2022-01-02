import { makeStyles, Tooltip, Typography } from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    img: {
        display: 'inline-block',
        width: 120,
        [theme.breakpoints.down('xs')]: {
            width: 80
        }
    }
}))

export const IconTool = ({
    tool,
    rotate="",
    titleTooltip=""
}) => {

    const classes = useStyles()
    return (
            <Tooltip title={ <Typography variant='h6'>{ tool }</Typography> } placement='top'>
                <img className={ classes.img } src={`./assets/svg/${ tool }.svg`}/>
            </Tooltip>
    )
} 
