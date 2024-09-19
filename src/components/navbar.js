import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, Box, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerItems = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-around' }}>
      {[
        { text: 'About Me', link: '/' },
        { text: 'Projects', link: '/projects' },
        { text: 'Work Experience', link: '/work-experience' },
        { text: 'Outsource Your Tech Team', link: '/outsource-tech-team' },
        { text: 'Outsource Tech Services', link: '/outsource-tech-services' },
      ].map((item, index) => (
        <React.Fragment key={item.text}>
          <ListItem 
            button 
            component={Link} 
            to={item.link} 
            onClick={toggleDrawer(false)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light hover effect
              }
            }}
          >
            <ListItemText 
              primary={item.text}
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '16px',
                color: '#ffffff', // Explicitly set text color to white
                textAlign: 'center',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0%',
                  height: '2px',
                  left: '50%',
                  bottom: 0,
                  backgroundColor: '#90caf9', // Underline color (light blue to match theme)
                  transition: 'width 0.3s ease, left 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                  left: '0%',
                },
              }}
            />
          </ListItem>
          {index < 4 && <Divider sx={{ backgroundColor: '#ffffff30', my: 1 }} />} {/* Add dividers except after the last item */}
        </React.Fragment>
      ))}
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#0c0c0c' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Roboto Slab", serif',
              fontWeight: 'bold',
              fontSize: '20px',
              color: '#ffffff', // Ensure the app name/logo is white
            }}
          >
       
          </Typography>

          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ fontSize: '30px', color: '#ffffff' }} /> {/* Ensure icon is white */}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: 250, backgroundColor: '#424242', color: '#fff' }, // Dark theme for the drawer
        }}
      >
        <List sx={{ height: '100%', padding: '20px 0' }}>{drawerItems}</List>
      </Drawer>
    </>
  );
};

export default Navbar;
