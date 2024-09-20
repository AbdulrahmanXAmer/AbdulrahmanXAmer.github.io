import React from 'react';
import { Typography, Container, Button, Grid, Box, Avatar, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildIcon from '@mui/icons-material/Build';
import DataObjectIcon from '@mui/icons-material/DataObject';
import LanguageIcon from '@mui/icons-material/Language';
import MemoryIcon from '@mui/icons-material/Memory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import HubIcon from '@mui/icons-material/Hub';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import FunctionsIcon from '@mui/icons-material/Functions';
import TerminalIcon from '@mui/icons-material/Terminal';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import CachedIcon from '@mui/icons-material/Cached';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import RouterIcon from '@mui/icons-material/Router';
import photo from '../media/profilephoto.jpeg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const skills = [
  { name: 'Python', icon: <CodeIcon /> },
  { name: 'R', icon: <FunctionsIcon /> },
  { name: 'Flask', icon: <DataObjectIcon /> },
  { name: 'SQL', icon: <StorageIcon /> },
  { name: 'Selenium', icon: <BuildIcon /> },
  { name: 'scikit-learn', icon: <PrecisionManufacturingIcon /> },
  { name: 'NumPy', icon: <ScatterPlotIcon /> },
  { name: 'SciPy', icon: <BubbleChartIcon /> },
  { name: 'Pandas', icon: <AutoAwesomeIcon /> },
  { name: 'Keras', icon: <MemoryIcon /> },
  { name: 'TensorFlow', icon: <HubIcon /> },
  { name: 'Deep Learning', icon: <MemoryIcon /> },
  { name: 'Machine Learning', icon: <PrecisionManufacturingIcon /> },
  { name: 'NetworkX', icon: <HubIcon /> },
  { name: 'NLP', icon: <LanguageIcon /> },
  { name: 'Seaborn', icon: <ScatterPlotIcon /> },
  { name: 'Matplotlib', icon: <InsertChartIcon /> },
  { name: 'OOP', icon: <DataObjectIcon /> },
  { name: 'Git', icon: <DeveloperModeIcon /> },
  { name: 'CSS', icon: <AutoAwesomeIcon /> },
  { name: 'HTML', icon: <LanguageIcon /> },
  { name: 'JavaScript', icon: <TerminalIcon /> },
  { name: 'RestAPI', icon: <RouterIcon /> },
  { name: 'Linux', icon: <TerminalIcon /> },
  { name: 'Oracle', icon: <StorageIcon /> },
  { name: 'Cloud Computing', icon: <CloudIcon /> },
  { name: 'Statistics', icon: <BarChartIcon /> },
  { name: 'API Development', icon: <HubIcon /> },
  { name: 'MySQL', icon: <StorageIcon /> },
  { name: 'React', icon: <DeveloperModeIcon /> },
  { name: 'C#', icon: <CodeIcon /> },
  { name: 'Angular', icon: <BuildIcon /> },
  { name: 'AWS', icon: <CloudIcon /> },
  { name: 'CI/CD', icon: <CachedIcon /> },
  { name: 'Data Engineering', icon: <MemoryIcon /> },
  { name: 'Frontend Development', icon: <LaptopChromebookIcon /> },
  { name: 'Database Management', icon: <StorageIcon /> },
  { name: 'Analytics', icon: <InsertChartIcon /> },
  { name: 'LLM', icon: <MenuBookIcon /> },
  { name: 'Cloud Cost Efficiency', icon: <CloudIcon /> },
  { name: 'Terraform', icon: <BuildIcon /> },
  { name: 'Docker', icon: <DeveloperModeIcon /> },
];

const Landing = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '50px', padding: { xs: '10px', sm: '30px' }, fontFamily: '"Open Sans", sans-serif' }}>
      {/* Profile Section */}
      <Paper
        elevation={5} 
        sx={{
          padding: { xs: '20px', sm: '30px' },
          marginBottom: '30px',
          background: 'linear-gradient(135deg, #424242, #303030)',
          borderRadius: '20px',
          color: '#fff',
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Avatar
              alt="Abdulrahman Amer"
              src={photo}
              sx={{
                width: { xs: 200, sm: 350 },
                height: { xs: 200, sm: 350 },
                margin: '0 auto',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                border: '4px solid #fff',
              }}
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: '"Roboto Slab", serif', fontSize: { xs: '2rem', sm: '3rem' } }} gutterBottom>
                Abdulrahman Amer
              </Typography>

              <Box display="flex" justifyContent={{ xs: 'center', sm: 'left' }} alignItems="center" sx={{ marginBottom: '10px' }}>
                <LocationOnIcon sx={{ marginRight: '10px' }} />
                <Typography variant="h6">NYC</Typography>
              </Box>

              <Box display="flex" justifyContent={{ xs: 'center', sm: 'left' }} alignItems="center" sx={{ marginBottom: '10px' }}>
                <PhoneIcon sx={{ marginRight: '10px' }} />
                <Typography variant="h6">347-785-4017</Typography>
              </Box>

              <Box display="flex" justifyContent={{ xs: 'center', sm: 'left' }} alignItems="center" sx={{ marginBottom: '10px' }}>
                <EmailIcon sx={{ marginRight: '10px' }} />
                <Typography variant="h6">rocky11229@gmail.com</Typography>
              </Box>

              <Typography variant="h6" sx={{ fontStyle: 'italic', marginTop: '20px', fontFamily: '"Open Sans", sans-serif' }}>
                Data Scientist | Machine Learning Engineer | Software Developer | Cloud Architect | Sales | Innovation
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* About Section */}
      <Typography variant="body1" paragraph sx={{ fontFamily: '"Open Sans", sans-serif' }}>
        From orchestrating Grammy-winning symphonies to architecting cutting-edge data solutions, my journey fuses creativity with tech mastery.
        Inspired by the improvisational genius of jazz and the intricate beauty of physics, I transitioned from composing music to composing code.
        I bring that same harmony into my work as a data scientist, where I don't just solve problems—I innovate, automate, and elevate.
      </Typography>

      <Typography variant="body1" paragraph sx={{ fontFamily: '"Open Sans", sans-serif' }}>
        Obsessed with perpetual learning, my passion lies in leveraging tech to amplify business success and design impactful solutions. Whether it's optimizing
        cloud infrastructure or unlocking insights with machine learning, my goal is to make the invisible visible—turning complex data into simple, actionable results.
      </Typography>

      {/* Technical Skills Section */}
      <Box my={4}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: '"Roboto Slab", serif' }}>
          Technical Skills
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={2}
                sx={{
                  backgroundColor: '#212121',
                  color: '#ffffff',
                  borderRadius: '10px',
                  transition: 'transform 0.2s, background-color 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#424242',
                  },
                }}
              >
                {skill.icon}
                <Typography variant="body2" sx={{ marginTop: '8px', fontFamily: '"Open Sans", sans-serif' }}>
                  {skill.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Button */}
      <Button
        variant="contained"
        href="https://abdulrahmanxamer.github.io/Me/#/projects"
        color="primary"
        size="large"
        sx={{
          marginTop: '30px',
          fontFamily: '"Open Sans", sans-serif',
          display: 'flex',
          justifyContent: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: { xs: '10px 20px', sm: '12px 24px' },
        }}
      >
        Check Out My Work
      </Button>
    </Container>
  );
};

export default Landing;
