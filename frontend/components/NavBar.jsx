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
import LogoIcon from '../assets/SkyLight2.png';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className="appbar" style={{ backgroundColor: "#EF8354" }} >
      <Toolbar className ="myToolbar" > 
      <img className="logo" src={LogoIcon} />
    <IconButton 
      
      aria-label="access logout or user destinations"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleMenu}
      color="inherit"
    >
      <MenuIcon className ="hamburger" sx={{ marginLeft: "auto" }}/>
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


