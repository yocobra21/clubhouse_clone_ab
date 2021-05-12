import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
    welcomeStep: {
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 50

    },
}));




export default function WelcomeStep() {

    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <>
            <Paper elevation={10} className={classes.welcomeStep}>
                Welcome step
                <Button fullWidth={false} variant="outlined" color="primary">
                    Get your username
                </Button>
                <Link href="#" onClick={preventDefault}>
                    Sign in
                </Link>
            </Paper>
        </>
    )
}
