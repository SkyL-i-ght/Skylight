import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { flexbox } from '@material-ui/system';


const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar className ="myToolbar" > 
       SkyLight
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon sx={{ marginLeft: "auto" }}/>
    </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
