import React, {useState} from 'react';
import '../App.css';
import Switch from '@material-ui/core/Switch';
import { Grid, TextField, Button, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GoogleImage from '../img/google.png';
import BottomImage from '../img/btottomImage.png';
import BottomGreenMob from '../img/greenMob.png';
import BottomRedMob from '../img/redMap.png';

const useStyles = makeStyles((theme) => ({

    formSecondBlock: {
        height: '900px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-bottom',
        marginTop: '200px',
        background: 'linear-gradient(180deg, rgba(222, 241, 255, 0) 16%, rgba(122, 198, 255, 0.22) 48.59%, rgba(140, 206, 255, 0.383891) 57.84%, rgba(151, 210, 255, 0.482225) 66.2%, rgba(180, 222, 255, 0.321484) 87.78%, rgba(238, 247, 255, 0) 100.56%)',
        [theme.breakpoints.down("xs")]: {
            height: '1200px',
            marginTop: '70px',
        },
    },

    secondBlockButton: {
        height: '900px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-bottom',
        [theme.breakpoints.down("xs")]: {
            height: '1400px',
        },
    },

    headerTextStyle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },

    textDecoration: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Liberation Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '40px',
        lineHeight: '150.02%',
        letterSpacing: '0.015em',
        color: '#000000',
        [theme.breakpoints.down("xs")]: {
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
        },
    },

    parImg: {
        display: 'flex',
        alignItems: 'center',
    },

    googleStyle: {
        height: '35px',
        marginLeft: '6px',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '0px',
            height: '32px',
        },
    },

    secondTextStyleTitle: {
        fontFamily: 'Liberation Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '23px',
        lineHeight: '150%',
        letterSpacing: '0.015em',
        color: '#616161',
    },

    bottomImage: {
        paddingTop: '56px',
    },

    switcherStyle: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },

}));

const PhoneBlock = function SectionBusinessStyle({}) {
    const [state, setState] = React.useState({
        checkedB: false,
      });

      const [toggle, setToggle] = useState(false);

      const toggler = () => {
          toggle ? setToggle(false) : setToggle(true);
      }

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const classes = useStyles();

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const smallest = useMediaQuery(theme.breakpoints.down('xs'));

    return(
        <Grid className={classes.formSecondBlock}>
            <Grid  className={classes.secondBlockButton}>
                <Grid className={classes.headerTextStyle}>
                    <Grid>
                        <p className={classes.textDecoration}>
                        Don't lose your customers to<p className={classes.parImg}><img className={classes.googleStyle} src={GoogleImage}/>oogle search
                        </p></p>
                    </Grid>
                    <Grid>
                        <p className={classes.secondTextStyleTitle}>They might go elsewhere</p>
                    </Grid>
                    <Grid>
                    <Hidden xsDown>
                    <img className={classes.imgSize} src={BottomImage}/>
                    </Hidden>
                    </Grid>
                    <Hidden mdUp>
                    <Grid className={classes.bottomImage}>
                    {toggle ? <span><img className={classes.imgSize} src={BottomGreenMob}/></span> : <span><img className={classes.imgSize} src={BottomRedMob}/></span>}
                        <Grid className={classes.switcherStyle}>
                            <Switch
                                checked={state.checkedB}
                                onChange={handleChange}
                                onClick={toggler}
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </Grid>
                    </Grid>
                    </Hidden>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PhoneBlock;