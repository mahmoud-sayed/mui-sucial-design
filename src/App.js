import './App.css';

// components Imports
import SideBar from './components/SideBar/SideBar';
import Feed from './components/Feed/Feed';
import RightBar from './components/RightBar/RightBar';
import NavBar from './components/NavBar/NavBar';

// frameworks imports
import { Box, Container, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './components/Add/Add';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Stack direction='column' spacing={2} justifyContent='space-between' >
          <NavBar />
          <Stack direction='row' spacing={2} justifyContent='space-between'>
            <SideBar mode={mode} setMode={setMode} />
            <Feed />
            <RightBar />
          </Stack>
          <Add />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
