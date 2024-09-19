import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';
import OutSourceTechTeam from './components/OutSourceTechTeam';
import OutSourceTechServices from './components/OutSourceTechServices';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<ComingSoon />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/outsource-tech-team" element={<OutSourceTechTeam />} />
        <Route path="/outsource-tech-services" element={<OutSourceTechServices />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
