import React from 'react';
import { Container, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const services = [
  { specialization: 'QA Engineering', entry: '$6', junior: '$8', midSenior: '$9', senior: '$10' },
  { specialization: 'Data Science', entry: '$6', junior: '$8', midSenior: '$9', senior: '$10' },
  { specialization: 'Machine Learning', entry: '$6', junior: '$8', midSenior: '$9', senior: '$10' },
  { specialization: 'DevOps', entry: '$6', junior: '$8', midSenior: '$9', senior: '$10' },
  { specialization: 'Networking', entry: '$6', junior: '$8', midSenior: '$9', senior: '$10' },
  { specialization: 'UI/UX', entry: '$6', junior: '$8', midSenior: '$9', senior: '$10' },
  { specialization: 'Frontend Development', entry: '$6', junior: '$8', midSenior: '$9', senior: '$10' },
  { specialization: 'Backend Development', entry: '$6', junior: '$8', midSenior: '$9', senior: '$10' },
  { specialization: 'Cloud Solutions', entry: '$6', junior: '$8', midSenior: '$9', senior: '$10' },
];

const OutSourceTechTeam = () => {
  return (
    <Container sx={{ marginTop: '50px', paddingBottom: '50px' }}>
      {/* Header Section */}
      <Typography variant="h3" align="center" sx={{ fontFamily: '"Roboto Slab", serif', fontWeight: 'bold', marginBottom: '30px' }}>
        Outsource Your Tech Team from Egypt
      </Typography>
      <Typography variant="body1" align="center" sx={{ fontFamily: '"Open Sans", sans-serif', marginBottom: '50px', maxWidth: '600px', margin: '0 auto', color: '#d1d5db' }}>
        We offer highly skilled tech professionals with degrees in Computer Science from Egypt, with competitive rates based on experience level. Our team is ready to help you elevate your business.
      </Typography>

      {/* Pricing Table */}
      <TableContainer component={Paper} sx={{ backgroundColor: '#1e1e1e', color: '#fff', borderRadius: '15px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontFamily: '"Roboto Slab", serif' }}>Specialization</TableCell>
              <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', fontFamily: '"Roboto Slab", serif' }}>Entry Level</TableCell>
              <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', fontFamily: '"Roboto Slab", serif' }}>Junior</TableCell>
              <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', fontFamily: '"Roboto Slab", serif' }}>Mid-Senior</TableCell>
              <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', fontFamily: '"Roboto Slab", serif' }}>Senior</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: '#d1d5db', fontFamily: '"Open Sans", sans-serif' }}>{service.specialization}</TableCell>
                <TableCell align="center" sx={{ color: '#d1d5db', fontFamily: '"Open Sans", sans-serif' }}>{service.entry}</TableCell>
                <TableCell align="center" sx={{ color: '#d1d5db', fontFamily: '"Open Sans", sans-serif' }}>{service.junior}</TableCell>
                <TableCell align="center" sx={{ color: '#d1d5db', fontFamily: '"Open Sans", sans-serif' }}>{service.midSenior}</TableCell>
                <TableCell align="center" sx={{ color: '#d1d5db', fontFamily: '"Open Sans", sans-serif' }}>{service.senior}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Calendly Integration */}
      <Box sx={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontFamily: '"Roboto Slab", serif', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
          Book a Consultation
        </Typography>
        <Typography variant="body1" sx={{ color: '#d1d5db', fontFamily: '"Open Sans", sans-serif', marginBottom: '20px' }}>
          Schedule a time with me to discuss your needs and how we can help you hire the perfect tech team.
        </Typography>
        <Button
          variant="contained"
          href="https://calendly.com/rocky-coreteqvas/outsourcing-tech-team-s"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontWeight: 'bold', backgroundColor: '#90caf9', '&:hover': { backgroundColor: '#64b5f6' } }}
        >
          Book a Meeting
        </Button>
      </Box>
    </Container>
  );
};

export default OutSourceTechTeam;
