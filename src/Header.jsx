import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BookIcon from '@material-ui/icons/Book';

const Header = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                <BookIcon/>
                <h2>Reminder Notes</h2>
                </Toolbar>
            </AppBar>
     
        </>
    );
}

export default Header;