import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const useStyles = styled((theme, props) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 50,
        padding: '40px 70px 40px 50px',
        // height: '450px',
        height: 'auto',
        width: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: 'rgba(224, 159, 135, 0.3)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    set: {
        [theme.breakpoints.up('md')]: {
            margin: '0 auto',
        },
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        // padding: 'auto',
        // margin:'auto'
        margin: 'auto',
        paddingBottom: 'auto',
    },
    project: {
        color: '#8E3200',
        // height: 400,
        paddingTop: '40px !important',
        [theme.breakpoints.up('md')]: {
            textAlign: 'justify',
        },
        textAlign: 'center',
    },
    names: {
        fontSize: '28px',
        fontFamily: 'Roboto Slab',
        margin: 0,
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
        },
    },
    tools: {
        color: '#ad7c4c',
        fontFamily: 'Roboto Slab',
        margin: 0,
        fontStyle: 'italic',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
        },
    },
    descripts: {
        fontFamily: 'Montserrat',
        fontSize: '20px',
        textAlign: 'justify',
    },
    button: {
        [theme.breakpoints.up('md')]: {
            fontSize: '14px',
            marginRight: 50,
        },
        fontSize: '11px',
        marginRight: 0,
        fontFamily: 'Roboto Slab',
    },
    imgWrap: {
        width: 'auto',
        height: 350,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pic: {
        margin: 'auto',
        height: 'auto',
        maxWidth: '100%',
        paddingLeft: 0,
        [theme.breakpoints.up('md')]: {
            // paddingLeft: (props) => (props.project.type === 'phone' ? 150 : 0),
        },
        // display: 'block',
    },
}));

export default function Project(props) {
    const classes = useStyles(props);

    return (
        <div>
            <Container maxWidth="md" sx={{ mt: 10, border: 1, p: 4, borderRadius: 2, }}>
                <Grid container sx={{alignItems:'center' }}>
                    <Grid
                        item
                        xs={12}
                        md={5}
                        direction='column'
                        className={classes.imgWrap}
                    >
                        <img
                            width='180px'
                            className={classes.pic}
                            src={props.project.img}
                            alt={props.project.name}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={7}
                        direction='column'
                        className={classes.project}
                        sx={{ color: '#8E3200', }}
                        align='center'
                    >
                        <Typography variant='h3' sx={{ fontSize: 28 }} align='left'>
                            {' '}
                            {props.project.name}
                        </Typography>
                        <Typography variant='h4' sx={{ fontSize: 20 }} id={props.project.id} align='left'>
                            {' '}
                            {props.project.author}
                        </Typography>
                        <Typography className={classes.descripts} align='left'>
                            {' '}
                            <b>Total Episodes: {props.project.episodes}</b>
                        </Typography>
                        <Typography className={classes.descripts} align='left'>
                            {' '}
                            {props.project.description}
                        </Typography>
                        <Grid container center>
                            {props.project.webURL != null ? (
                                // <Grid item xs>
                                    <Button
                                        color='secondary'
                                        className={classes.button}
                                        size='medium'
                                        variant='outlined'
                                        href={props.project.webURL}
                                        target='_blank'
                                    >
                                        {' '}
                                        button
                                    </Button>
                                // </Grid>
                            ) : null}
                            {props.project.gitURL != null ? (
                                // <Grid item xs>
                                    <Button
                                        color='secondary'
                                        className={classes.button}
                                        size='medium'
                                        variant='outlined'
                                        href={props.project.gitURL}
                                        target='_blank'
                                    >
                                        {' '}
                                        button
                                    </Button>
                                // </Grid>
                            ) : null}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}