import React from 'react';
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import Navbar from './components/navbar';
import Landing from './components/landing';
import ComingSoon from './components/ComingSoon';
import Footer from './components/footer';
import WorkExperience from './components/WorkExperience'; 
import OutSourceTechTeam from './components/OutSourceTalent';
import OutSourceTechServices from './components/OutSourceTechServices';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  // Define the dark theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark', // Enable dark mode
      primary: {
        main: '#90caf9', // Light blue for primary
      },
      secondary: {
        main: '#f48fb1', // Pink for secondary
      },
      background: {
        default: '#121212', // Dark background
        paper: '#1e1e1e',  // Darker background for surfaces like cards
      },
      text: {
        primary: '#ffffff', // White text
        secondary: '#b0b0b0', // Grey text for secondary info
      },
    },
    typography: {
      fontFamily: '"Roboto Slab", "Open Sans", sans-serif', // Default typography for the app
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Resets the CSS to fit the dark theme */}
      <Router basename={process.env.PUBLIC_URL}> {/* Add basename here */}
        <Navbar />
        <Container maxWidth="lg" sx={{ minHeight: '80vh', paddingTop: '50px' }}>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/projects" element={<ComingSoon />} />
            <Route path="/work-experience" element={<WorkExperience />} /> 
            <Route path="/outsource-tech-team" element={<OutSourceTechTeam/>} />
            <Route path="/outsource-tech-services" element={<OutSourceTechServices/>} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
