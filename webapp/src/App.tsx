import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

function App() {
  return (
    <Box sx={{padding: '2rem'}}>
      <Typography variant='h2' sx={{mb: '2rem'}}>
        Todo App Home
      </Typography>
      <Divider />
      <Box>
        {/** Put the todo rendering here */}
      </Box>
    </Box>
  );
}

export default App;
