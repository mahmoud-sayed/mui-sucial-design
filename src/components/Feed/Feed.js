import React from 'react';
import { Box } from '@mui/material';
import Posts from '../posts/Posts';



const Feed = () => {
  return (
    <Box flex={4}>
      <Posts /><Posts /><Posts /><Posts /><Posts /><Posts />
    </Box>
  );
};

export default Feed;