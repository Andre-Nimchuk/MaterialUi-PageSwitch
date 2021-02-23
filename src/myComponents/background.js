import React from 'react';
import '../App.css';
import Header from './headerBlock.js';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TopWave from '../img/waveTop.png';
import SmallTopWave from '../img/smallWave.png';
import Business from './businessName';
import PhoneBlock from './phoneBlock';

    const useStyles = makeStyles((theme) => ({

        paperStyle: {
            height: '100%',
            width: '100%',
        },

        backStyleColor: {
            height: '100%', 
            width: '100%', 
            display: 'flex',
            justifyContent: 'flex-end',
            [theme.breakpoints.down("md")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            [theme.breakpoints.down("sm")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            alignItems: 'center',
            backgroundColor: '#FFF',
            flexDirection: 'column',
        },

        waveTopBack: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundImage: `url(${TopWave})`,
            backgroundPositionY: 'top',
            backgroundSize: '100% 80%',
            backgroundRepeat: 'no-repeat',
            [theme.breakpoints.down("md")]: {
                backgroundSize: '100% 70%',
            },
            [theme.breakpoints.down("xs")]: {
                backgroundImage: `url(${SmallTopWave})`,
                backgroundSize: '100% 60%',
            },
        },

        textFieldSecondBlock: {
            border: '2px',
            color: '#276AFD',
        },

        
    }));
    const Background = function SectionBackStyle({}) {

        const classes = useStyles();

        const theme = useTheme();
        const matches = useMediaQuery(theme.breakpoints.down('md'));
        const smallest = useMediaQuery(theme.breakpoints.down('xs'));

    return(
        <Grid className={classes.backStyleColor}>
            <Paper elevation={0} className={classes.paperStyle}>
                <Grid className={classes.waveTopBack}>
                    <Header />
                </Grid>
                <Grid>
                    <Business />
                </Grid>
                <Grid>
                    <PhoneBlock />
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Background;
