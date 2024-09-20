import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const ComingSoon = () => {
  return (
    <Container 
      maxWidth="md" 
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '80vh',
        textAlign: 'center',
        color: '#ffffff',
      }}
    >
      <Typography variant="h2" sx={{ fontFamily: '"Roboto Slab", serif', fontWeight: 'bold', marginBottom: '20px' }}>
        Coming Soon
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: '"Open Sans", sans-serif', color: '#b0b0b0', marginBottom: '40px' }}>
        We're working hard to bring you this content. Stay tuned for updates!
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Button 
          variant="contained" 
          color="primary" 
          href="https://abdulrahmanxamer.github.io/Me/" 
          sx={{ fontWeight: 'bold', fontFamily: '"Open Sans", sans-serif' }}
        >
          Go Back Home
        </Button>

      </Box>
    </Container>
  );
};

export default ComingSoon;
