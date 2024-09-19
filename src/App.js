import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Footer from './components/footer';
import WorkExperience from './components/WorkExperience';
import OutSourceTechTeam from './components/OutSourceTalent';
import OutSourceTechServices from './components/OutSourceTechServices';
import ComingSoon from './components/ComingSoon';

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
