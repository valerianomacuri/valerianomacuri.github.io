import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { IconToolList } from '../components/IconToolList'

const useStyles = makeStyles( theme => ({
    title: {
        fontWeight: 'bold'
    }
}))


const Stack = () => {

    const classes = useStyles()
    return (
        <Grid container direction='column' spacing={ 4 }>
            <Grid item>
                <Typography className={ classes.title } variant='h4' id="stack">Stack</Typography>
            </Grid>
            <Grid item>
                <IconToolList />
            </Grid>
        </Grid>   
    )
}
export default Stack