import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyle from './style'

const Footer = () => {
    const classes = useStyle();
    const year = new Date().getFullYear();
    return (
        <>
       
        <AppBar position="fixed" className={classes.appBar} >
                <Toolbar>
                <footer>
                <marquee behavior="scroll" direction="left" scrollamount="8">copyright &copy; {year} </marquee>
                {/* <p>copyright &copy; {year} </p> */}
        </footer>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Footer;

