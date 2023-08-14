import React from 'react';
import { styled } from '@mui/material/styles';
import dataProject from '../data/readData';
import Project from '../components/ReadListItem';
import Grid from '@mui/material/Grid';

const useStyles = styled((theme) => ({
    root: {
        textAlign: 'center',
        fontFamily: 'Montserrat',
        height: 'auto',
        width: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        background: '#FFEBC1',
        backgroundPosition: 'center',
    },
    titleWrap: {
        textAlign: 'center',
        // paddingBottom: '30px',
        display: 'table',
        margin: '0 auto',
    },
    titleColor: {
        // backgroundColor: '#faf0af',
        borderRadius: '25px',
        height: 80,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#8E3200',
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: '60px',
        width: 'auto',
    },
    set: {
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
        display: 'none',
    },
    headerPos1: {
        padding: theme.spacing(0, 1),
    },
    headerPos2: {
        padding: theme.spacing(0, 1),
    },
    headerPos3: {
        padding: theme.spacing(0, 1),
    },
    container: {
        paddingBottom: '40px',
    },
}));

export default function Mywork(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            {/* Title */}

            <div className={classes.titleWrap}>
                <div className={classes.titleColor}>
                    <h1 className={classes.title}>List</h1>
                </div>
            </div>

            {/* Body */}
            <div>
                <Grid container className={classes.container}>
                    <Grid item xs={12} md={12}>
                        {dataProject.map((project, i) => (
                            <Project project={project} />
                        ))}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}