import React from 'react';
import { Container, Typography, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const services = [
  { service: 'AI Chatbot Integration', description: 'Build and integrate AI chatbots for customer service and automation.', price: '$800 - $1,500' },
  { service: 'CI/CD Pipeline Setup', description: 'Automate your deployment process with CI/CD pipelines.', price: '$1,200 - $2,000' },
  { service: 'MVP Development', description: 'Build an MVP for your next big idea, from concept to launch.', price: '$5,000 - $10,000' },
  { service: 'Landing Page Development', description: 'Create a high-conversion landing page for your product or service.', price: '$500 - $1,500' },
  { service: 'API Integration', description: 'Integrate external APIs into your codebase for enhanced functionality.', price: '$600 - $1,200' },
  { service: 'Customer Service Solutions', description: 'Set up customer service infrastructure with AI or human support.', price: '$1,000 - $3,000' },
  { service: 'Database Management', description: 'Manage and optimize your database infrastructure for performance.', price: '$800 - $2,000' },
  { service: 'Cloud Migration', description: 'Migrate your systems to cloud infrastructure with minimal downtime.', price: 'Contact for Pricing' },
  { service: 'Pipeline Assistance', description: 'Assistance in creating or managing data or application pipelines.', price: '$800 - $1,500' },
  { service: 'Tech Consultations', description: 'One-on-one consultation for your tech needs.', price: '$200/hr' },
];

const OutSourceTechServices = () => {
  return (
    <Container sx={{ marginTop: '50px', paddingBottom: '50px' }}>
      {/* Header Section */}
      <Typography variant="h3" align="center" sx={{ fontFamily: '"Roboto Slab", serif', fontWeight: 'bold', marginBottom: '30px' }}>
        Outsource Your Tech Services
      </Typography>
      <Typography variant="body1" align="center" sx={{ fontFamily: '"Open Sans", sans-serif', marginBottom: '50px', maxWidth: '700px', margin: '0 auto', color: '#d1d5db' }}>
        We offer a wide range of tech services to help scale your business, from AI integration to cloud migration. If you have a custom request, reach out for a tailored package!
        Note we offer monthly prices for reccuring service needs. 
      </Typography>

      {/* Service Table */}
      <TableContainer component={Paper} sx={{ backgroundColor: '#1e1e1e', color: '#fff', borderRadius: '15px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontFamily: '"Roboto Slab", serif' }}>Service</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontFamily: '"Roboto Slab", serif' }}>Description</TableCell>
              <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold', fontFamily: '"Roboto Slab", serif' }}>Price Range</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: '#d1d5db', fontFamily: '"Open Sans", sans-serif' }}>{service.service}</TableCell>
                <TableCell sx={{ color: '#d1d5db', fontFamily: '"Open Sans", sans-serif' }}>{service.description}</TableCell>
                <TableCell align="center" sx={{ color: '#d1d5db', fontFamily: '"Open Sans", sans-serif' }}>{service.price}</TableCell>
              </TableRow>
            ))}
            {/* Custom Packages */}
            <TableRow>
              <TableCell sx={{ color: '#90caf9', fontWeight: 'bold', fontFamily: '"Roboto Slab", serif' }}>Custom Packages</TableCell>
              <TableCell sx={{ color: '#90caf9', fontFamily: '"Open Sans", sans-serif' }}>
                Tailored services for your unique business needs.
              </TableCell>
              <TableCell align="center" sx={{ color: '#90caf9', fontWeight: 'bold', fontFamily: '"Open Sans", sans-serif' }}>
                Contact for Pricing
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Calendly Integration */}
      <Box sx={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontFamily: '"Roboto Slab", serif', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
          Schedule a Consultation
        </Typography>
        <Typography variant="body1" sx={{ color: '#d1d5db', fontFamily: '"Open Sans", sans-serif', marginBottom: '20px' }}>
          Discuss your tech needs with us by booking a meeting.
        </Typography>
        <Button
          variant="contained"
          href="https://calendly.com/rocky-coreteqvas/tech-services-meet"
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

export default OutSourceTechServices;
