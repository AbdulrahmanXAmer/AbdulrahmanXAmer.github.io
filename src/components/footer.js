import React from 'react';
import { Container, Typography, Link, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '20px 0',
        backgroundColor: '#0c0c0c',  // Dark theme
        color: '#f9fafb',  // White text
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        {/* Name and Copyright */}
        <Typography variant="body1" sx={{ fontFamily: '"Roboto Slab", serif', marginBottom: '10px' }}>
          © 2024 Abdulrahman Amer
        </Typography>

        {/* Social Links */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '10px' }}>
          <Link href="https://github.com/AbdulrahmanXAmer" target="_blank" color="inherit" underline="none">
            <IconButton color="inherit">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/abdulrahman-amer-588a2b309/" target="_blank" color="inherit" underline="none">
            <IconButton color="inherit">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Link>
          
        </Box>

        {/* All Rights Reserved */}
        <Typography variant="body2" sx={{ fontFamily: '"Open Sans", sans-serif', fontSize: '14px' }}>
          All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
