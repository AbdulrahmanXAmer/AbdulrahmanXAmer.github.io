import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Box } from '@mui/material';

const projects = [
  {
    title: 'Project 1',
    description: 'A full-stack web application integrating with various APIs to create a seamless user experience.',
    detailedDescription: 'Includes user authentication, real-time updates, and a React front-end with a Node.js backend.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'An innovative data visualization tool designed to help companies make data-driven decisions.',
    detailedDescription: 'Uses D3.js and Chart.js to enable real-time data interaction and custom dashboards.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Project 3',
    description: 'A machine learning model to predict customer churn using advanced analytics and AI.',
    detailedDescription: 'Predicts customer churn using TensorFlow and scikit-learn, with data preprocessing pipelines.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Project 4',
    description: 'An AI-powered chatbot for customer service automation and improved customer experience.',
    detailedDescription: 'Built using Dialogflow and integrated with Slack and Facebook Messenger for automated responses.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Project 5',
    description: 'A blockchain-based supply chain management system enhancing transparency and efficiency.',
    detailedDescription: 'Blockchain-enabled platform for tracking product movements across a supply chain.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Project 6',
    description: 'A fitness tracking app that syncs real-time data and provides personalized workout suggestions.',
    detailedDescription: 'Uses React Native for front-end and Firebase for real-time data sync, with user personalization.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Project 7',
    description: 'A real estate platform offering detailed property analytics and market insights.',
    detailedDescription: 'Provides property analytics using big data and machine learning algorithms for pricing predictions.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Project 8',
    description: 'A personalized e-learning platform with adaptive learning algorithms for better education.',
    detailedDescription: 'Offers personalized course recommendations and learning paths using adaptive algorithms.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Project 9',
    description: 'A fintech app for managing personal finances, automating savings, and investment tracking.',
    detailedDescription: 'Automates savings, tracks investments, and offers financial insights using AI.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Project 10',
    description: 'A cloud-based task management tool for remote teams with collaborative features.',
    detailedDescription: 'Provides task management, file sharing, and team collaboration, powered by AWS Lambda and S3.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
];

const ProjectsPage = () => {
  return (
    <Container sx={{ marginTop: '50px' }}>
      <Typography variant="h3" align="center" sx={{ fontFamily: '"Roboto Slab", serif', marginBottom: '40px' }}>
        My Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ display: 'flex', backgroundColor: '#424242', color: '#fff', padding: '20px', borderRadius: '10px' }}>
              {/* Image */}
              <CardMedia
                component="img"
                sx={{ width: 200, height: 'auto', borderRadius: '10px', marginRight: '20px' }}
                image={project.image}
                alt={project.title}
              />

              {/* Content */}
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Roboto Slab", serif' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '10px', fontFamily: '"Open Sans", sans-serif' }}>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: '"Open Sans", sans-serif', color: '#d1d5db' }}>
                    {project.detailedDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary" size="medium" href={project.link}>
                    View Project
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
