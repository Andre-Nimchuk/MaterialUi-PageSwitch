import React from 'react';
import '../App.css';
import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({

    formSecondBlock: {
        height: '400px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("xs")]: {
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '-300px',
        },
    },

    secondBlockButton: {
        height: '400px',
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down("md")]: {
            width: '90%',
        },
        [theme.breakpoints.down("xs")]: {
            height: '720px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },
    },

    secondBlockHeader: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '40px',
        [theme.breakpoints.down("xs")]: {
            marginBottom: '40px',
        },
    },

    inputFieldAndButton: {
        height: '300px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        [theme.breakpoints.down("xs")]: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        },
    },

    ButtonBlockPosition: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },

    textField: {
        height: '50px',
    },

    buttonDisStyle: {
        width: '250px',
        height: '50px',
        background: '#276AFD',
        borderRadius: '10px',
        color: '#fff',
        fontFamily: 'Liberation Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '1px',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
        [theme.breakpoints.down("md")]: {
            width: '200px',
        },
    },

    notchedOutline: {
        height: '50px',
        borderWidth: '3px',
        borderColor: '#276AFD'
    },

    numberStyle: {
        fontFamily: 'Liberation Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '60px',
        lineHeight: '150%',
        textTransform: 'capitalize',
        color: '#276AFD',
        marginTop: '20px',
        [theme.breakpoints.down("xs")]: {
            fontSize: '45px',
            marginTop: '20px',
        }
    },

    titleStyle: {
        fontFamily: 'Liberation Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '34px',
        lineHeight: '150.02%',
        letterSpacing: '0.015em',
    },

    textStyle: {
        fontFamily: 'Liberation Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '21px',
        lineHeight: '400.02%',
        [theme.breakpoints.down("md")]: {
            fontSize: '16px',
        },
    },
}));

const Business = function SectionBusinessStyle({}) {

    const classes = useStyles();

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smallest = useMediaQuery(theme.breakpoints.down('xs'));

    return(
        <Grid className={classes.formSecondBlock}>
            <Grid  className={classes.secondBlockButton}>
                <Grid className={classes.secondBlockHeader}>
                    <h1>Simple as:</h1>
                </Grid>

                <Grid className={classes.inputFieldAndButton}>
                    <Grid className={classes.ButtonBlockPosition}>
                        <Grid className={classes.numberStyleSecond}>
                        <p className={classes.numberStyle}>1</p>
                        </Grid>
                        <Grid>
                            <p className={classes.textStyle}>Enter your business name</p>
                        </Grid>
                        <Grid className={classes.postionOfInput}>
                            <TextField 
                                id="outlined-basic"
                                label="Business name" 
                                className="inputRounded"
                                variant="outlined"
                                placeholder="Business name" 
                                fullWidth
                                name="title" 
                                InputProps={{
                                    classes: {
                                    notchedOutline: classes.notchedOutline,
                                    },
                                    inputMode: "numeric"
                                }}
                            /> 
                        </Grid>
                    </Grid>
                    <Grid className={classes.ButtonBlockPosition}>
                        <Grid className={classes.numberStyleSecond}>
                        <p className={classes.numberStyle}>2</p>
                        </Grid>
                        <Grid>
                            <p className={classes.textStyle}>Start rewarding your customers </p>
                        </Grid>
                        <Grid className={classes.postionOfInput}>
                            <Button variant="contained" className={classes.buttonDisStyle} disableElevation>
                             create  template
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid className={classes.ButtonBlockPosition}>
                        <Grid className={classes.numberStyleSecond}>
                        <p className={classes.numberStyle}>3</p>
                        </Grid>
                        <Grid>
                                <p className={classes.textStyle}>Final step</p>
                        </Grid>
                        <Grid className={classes.postionOfInput}>
                            <Button variant="contained" className={classes.buttonDisStyle} disableElevation>
                                start now
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Business;