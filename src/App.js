import './App.css';

// components Imports
import SideBar from './components/SideBar/SideBar';
import Feed from './components/Feed/Feed';
import RightBar from './components/RightBar/RightBar';
import NavBar from './components/NavBar/NavBar';

// frameworks imports
import { Box, Container, Stack } from '@mui/material';

function App() {
  return (
    <Box>
      <Stack direction='column' spacing={2} justifyContent='space-between' >
        <NavBar />
        <Stack direction='row' spacing={2}>
          <SideBar />
          <Feed />
          <RightBar />
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
