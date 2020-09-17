import React from 'react'
import './Header.css'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
            <PersonOutlineIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinderLogo" />
            <IconButton>
            <ForumIcon />
            </IconButton>
            
        </div>
    )
}


export default Header