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
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar style={{ backgroundColor: "#EF8354" }} >
      <Toolbar className ="myToolbar" > 
      SkyLight
    <IconButton 
       edge="start" 
       color="inherit"
       aria-label="menu"
       onClick={handleClick}
    >
      <MenuIcon sx={{ marginLeft: "auto" }}/>
    </IconButton>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>My destinations</MenuItem>
        <Link to='/dataview'>DataView</Link>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        <Link to='signin'>Logout</Link>
      </Menu>

             
      </Toolbar>
    </AppBar>
  );
};


