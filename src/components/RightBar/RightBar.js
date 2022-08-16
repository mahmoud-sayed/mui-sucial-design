import React from 'react';
import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography, List, ListItem, Divider, ListItemText, ListItemAvatar } from '@mui/material';

const RightBar = () => {

  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box sx={{ position: 'fixed', overFlow: 'scroll' }} width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7} >
          <Avatar alt="Remy Sharp" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
          <Avatar alt="Travis Howard" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
          <Avatar alt="Cindy Baker" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
          <Avatar alt="Agnes Walker" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
          <Avatar alt="Trevor Henderson" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
          <Avatar alt="Cindy Baker" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
          <Avatar alt="Agnes Walker" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
          <Avatar alt="Trevor Henderson" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
          <Avatar alt="Cindy Baker" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
          <Avatar alt="Agnes Walker" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
          <Avatar alt="Trevor Henderson" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
        </AvatarGroup>
        <Typography mt={4} mb={2} variant='h6' fontWeight={100}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={180} gap={8}>
          <ImageListItem>
            <img src='https://i.postimg.cc/vZCQnP5y/dog1.jpg' alt='image name' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://i.postimg.cc/vZCQnP5y/dog1.jpg' alt='image name' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://i.postimg.cc/vZCQnP5y/dog1.jpg' alt='image name' />
          </ImageListItem>

        </ImageList>
        <Typography mt={4} mb={2} variant='h6' fontWeight={100}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://i.postimg.cc/vZCQnP5y/dog1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;