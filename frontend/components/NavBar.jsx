import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Outlet, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar style={{backgroundColor: "#4EA3DA"}} >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> 
          SkyLight
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="appbar"
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
            <div className="test"> 
              <Button
                variation="outlined" 
                className="dataviewbtn" 
                style={{ fontSize: '13px', color: "white", backgroundColor: "#F79256" }} 
                component={ Link } 
                to={'/dataview'}> 
                  My Destinations 
              </Button>
              <div className="test2">
              <Button 
                variation="outlined" 
                className="signinbtn" 
                style={{ fontSize: '13px', color: "white", backgroundColor: "#F79256" }} 
                component={ Link } 
                to={'/signin'}> 
                  Logout
              </Button>
              </div>
            </div>
          </Menu>
        </div>

      </Toolbar>
    </AppBar>

  );
              }