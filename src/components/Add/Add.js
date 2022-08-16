import React, { useState } from 'react';
import { Tooltip, Fab, Modal, Box, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { StyledModal, UserBox } from './Add-style';
import { EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange } from '@mui/icons-material';


const Add = () => {

  const [open, setOpen] = useState(false);
  return (
    <Box >
      <Tooltip title="Create Post" sx={{ position: 'fixed', bottom: '20px', left: { xs: 'calc(50% - 25px)', md: '20px' } }}>
        <Fab color="primary" aria-label="add" onClick={() => setOpen(true)} >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} borderRadius={5} p={3} bgcolor={'background.default'} color={'text.primary'}>
          <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
          <UserBox>
            <Avatar src='https://i.postimg.cc/vZCQnP5y/dog1.jpg' sx={{ width: '30px', height: '30px' }} />
            <Typography fontWeight={500} variant='span'>Mahmoud Alsayed</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            label="what is in your mind"
            multiline
            rows={3}
            sx={{ width: '100%' }}
            variant="standard"
          />
          <Stack direction="row" spacing={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup variant="contained" fullWidth aria-label="outlined button group" >
            <Button >Post</Button>
            <Button sx={{ width: '100px' }}><DateRange /></Button>
          </ButtonGroup>
        </Box>
      </StyledModal >
    </Box >
  );
};

export default Add;;