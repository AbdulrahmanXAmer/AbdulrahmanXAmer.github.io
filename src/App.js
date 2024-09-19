import React from 'react';
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Footer from './components/footer';
import WorkExperience from './components/WorkExperience';
import OutSourceTechTeam from './components/OutSourceTalent';
import OutSourceTechServices from './components/OutSourceTechServices';
import ComingSoon from './components/ComingSoon';

const App = () => {
  // Define the dark theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark', // Enable dark mode
      primary: {
        main: '#90caf9', // Adjust as needed
      },
      secondary: {
        main: '#f48fb1',
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
      <CssBaseline /> {/* Reset CSS and apply theme */}
      <Router>
        <Navbar />
        <Container maxWidth="lg" sx={{ minHeight: '80vh', paddingTop: '50px' }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<ComingSoon />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/outsource-tech-team" element={<OutSourceTechTeam />} />
            <Route path="/outsource-tech-services" element={<OutSourceTechServices />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
