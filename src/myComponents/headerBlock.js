import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeaderLogo from '../img/headerLogo.png';
import HeaderPhoto from '../img/Saly-10.png';
import RightSide from '../img/RightSide.png';
import '../App.css';

const useStyles = makeStyles((theme) => ({
    HeaderBlocksLocation: {
        height: '100%', 
        width: '100%', 
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '100px',
        paddingTop: '70px',
        [theme.breakpoints.down("xs")]: {
            paddingLeft: '20px',
            paddingTop: '40px',
        },
    },

    defaultStyleBlock: {
        height: '100%', 
        width: '100%', 
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },

    mobileInfo: {
        height: '40px', 
        width: '100%', 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },

    moboBlock: {
        width: '90%',
    },

    headerLogo: {
        height: '10%', 
        width: '100%', 
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundImage: `url(${HeaderLogo})`,
        backgroundRepeat: 'no-repeat',
        paddingBottom: '40px',
        [theme.breakpoints.down("md")]: {
            backgroundSize: '10%',
            paddingBottom: '5px',
        },
    },

    styleHeaderText: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontFamily: 'Liberation Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '60px',
        lineHeight: '200%',
        paddingBottom: '30px',
        [theme.breakpoints.down("md")]: {
            fontSize: '30px',
            lineHeight: '300%',
            paddingBottom: '5px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '17px',
            lineHeight: '300%',
        },
    },

    styleParagraph: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontFamily: 'Liberation Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '150.02%',
        [theme.breakpoints.down("md")]: {
            fontSize: '20px',
            lineHeight: '170%',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '15px',
            lineHeight: '150.02%',
        },
    },

    HeaderPhotoBack: {
        height: '100%', 
        width: '100%', 
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundImage: `url(${HeaderPhoto})`,
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down("md")]: {
            backgroundSize: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
        },
        [theme.breakpoints.down("xs")]: {
            backgroundImage: 'none',
            backgroundSize: '0%',
            width: '0%',
        },
    },
}));

const Header = function SectionHeadStyle({}) {

    const classes = useStyles();

    return(
        <Grid className={classes.HeaderBlocksLocation}>
                        <Grid className={classes.defaultStyleBlock}>
                        <Hidden smUp>
                        <Grid className={classes.moboBlock}>
                            <Grid className={classes.mobileInfo}>
                                <Grid>
                                    <p>9:41</p>
                                </Grid>
                                <Grid>
                                    <img src={RightSide}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Hidden>
                            <Grid className={classes.headerLogo}></Grid>
                            <Grid className={classes.styleHeaderText}>
                                <h1>Everybody Gets 
                                <p>Rewarded!</p>
                                </h1>
                            </Grid>
                            <Grid className={classes.styleParagraph}>
                                <p>
                                Turn your evdasdasdaeryday customer into a loyal one.
                                <p>It’s never been easier.</p>
                                </p>
                            </Grid>
                        </Grid>
                        <Grid className={classes.HeaderPhotoBack}></Grid>
                    </Grid>
    );
}

export default Header;