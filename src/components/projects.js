import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardContent, CardActions, Button, Typography, Grid, CardMedia, Box } from '@mui/material';

const projects = [
  { title: 'Project 1', description: 'A full-stack web application...', image: 'https://via.placeholder.com/300', link: '#' },
  { title: 'Project 2', description: 'An innovative data visualization tool...', image: 'https://via.placeholder.com/300', link: '#' },
  { title: 'Project 3', description: 'A machine learning model...', image: 'https://via.placeholder.com/300', link: '#' },
  { title: 'Project 4', description: 'An AI-powered chatbot...', image: 'https://via.placeholder.com/300', link: '#' },
  { title: 'Project 5', description: 'A blockchain-based system...', image: 'https://via.placeholder.com/300', link: '#' },
  { title: 'Project 6', description: 'A mobile app for fitness tracking...', image: 'https://via.placeholder.com/300', link: '#' },
  { title: 'Project 7', description: 'A real estate analytics platform...', image: 'https://via.placeholder.com/300', link: '#' },
  { title: 'Project 8', description: 'A personalized e-learning platform...', image: 'https://via.placeholder.com/300', link: '#' },
  { title: 'Project 9', description: 'A fintech personal finance tool...', image: 'https://via.placeholder.com/300', link: '#' },
  { title: 'Project 10', description: 'A cloud-based task manager...', image: 'https://via.placeholder.com/300', link: '#' },
];

const Projects = () => {
  const settings = {
    animation: 'slide',
    indicators: true,
    navButtonsAlwaysVisible: true,
  };

  return (
    <Box sx={{ padding: '50px 0', backgroundColor: '#0c0c0c' }}>
      <Typography 
        variant="h3" 
        align="center" 
        sx={{ 
          fontWeight: 'bold', 
          marginBottom: '40px', 
          color: '#fff', 
          fontFamily: '"Roboto Slab", serif'  // Matching font from landing page
        }}
      >
        My Projects
      </Typography>

      <Carousel {...settings}>
        {[...Array(4)].map((_, slideIndex) => (
          <Grid container spacing={3} justifyContent="center" key={slideIndex}>
            {projects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3.5}  // Thinner width for 3 visible boxes
                key={index}
              >
                <Card
                  sx={{
                    backgroundColor: '#424242',
                    color: '#f9fafb',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 'bold', 
                        marginBottom: '10px', 
                        fontFamily: '"Roboto Slab", serif'  // Matching heading font
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="textSecondary" 
                      sx={{ 
                        color: '#d1d5db', 
                        fontFamily: '"Open Sans", sans-serif'  // Matching body font
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        marginTop: '30px',
                        fontFamily: '"Open Sans", sans-serif',  // Matching button font
                      }}
                    >
                      View Project
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
};

export default Projects;
