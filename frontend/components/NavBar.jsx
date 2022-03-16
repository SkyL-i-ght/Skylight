import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { flexbox } from '@material-ui/system';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Outlet, Link } from 'react-router-dom';
import LogoIcon from '../assets/SkyLight.png';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className ="myToolbar" > 
      <img src={LogoIcon} />
    <IconButton 
      edge="start"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleMenu}
      color="inherit"
    >
      <MenuIcon sx={{ marginLeft: "auto" }}/>
    </IconButton>
    <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem 
                onClick={handleClose}>My destinations</MenuItem>
                <Link to='/dataview'>DataView</Link>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <Link to='signin'>Logout</Link>
              </Menu>
      </Toolbar>
    </AppBar>
  );
};


