import React, { useState } from 'react';
import { AppBar, Toolbar, InputBase, Typography, Badge, Menu, MenuItem } from '@mui/material';
import { Search, StyledToolbar, Icons, UserBox } from './NavBar-style';
import { Pets } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';





const NavBar = () => {

  const [open, setOpen] = useState(false);

  const handelOpen = () => {
    setOpen(true);
  };

  const handelClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position='sticky' bgcolor='light-blue'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Lama Dev</Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search ><InputBase placeholder='search...' /></Search>
        <Icons sx={{ display: { xs: 'none', sm: 'flex' } }} >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar onClick={handelOpen} />
        </Icons>
        <UserBox sx={{ display: { xs: 'flex', sm: 'none' } }} onClick={handelOpen}>
          <Avatar />
          <Typography>Mahmoud</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handelClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handelClose}>Profile</MenuItem>
        <MenuItem onClick={handelClose}>My account</MenuItem>
        <MenuItem onClick={handelClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;