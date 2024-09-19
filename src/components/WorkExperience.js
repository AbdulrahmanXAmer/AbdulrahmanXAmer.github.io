import React from 'react';
import { Container, Typography, Box, Divider, Tooltip } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';

const workExperience = [
  {
    title: 'Data Scientist and Innovation',
    company: 'Sertifi | REMOTE',
    period: '02/2024 - Present',
    details: [
      'Leveraged AI to enhance our reporting framework, introducing predictive analytics and advanced visualizations.',
      'Spearheaded the development of an MVP for a flagship feature projected to generate millions in revenue.',
      'Pioneered the development of Sertifi\'s first-ever data lake, enhancing scalability and access for various departments.',
      'Built a system that uses NLP, cosine similarity, and TF-IDF to analyze historical ticket data for similarity.',
      'Designed and deployed data pipelines and reporting solutions on AWS using Lambda, Docker, API Gateway, and EventBridge.',
      'Created development environments and mentored peers in data science, building infrastructure for successful projects.',
      'Automated cloud deployments using Terraform, ensuring smooth operation of systems.',
    ],
    technologies: ['AWS', 'Lambda', 'Docker', 'Terraform', 'NLP', 'Cosine Similarity'],
  },
  {
    title: 'Data Scientist',
    company: 'ROS | NYC, NY',
    period: '01/2020 - 01/2024',
    details: [
      'Engineered a CNN tool that redefined market analysis, using TensorFlow and Pandas.',
      'Automated ETL pipelines and cloud storage using Python, Selenium, and Linux cron jobs.',
      'Created an NLP-based email ranking system to boost response times by prioritizing important messages.',
      'Developed dynamic CRM features to streamline agent workflows, including dashboards and client management.',
      'Automated ad generation and marketing strategies with Selenium, Flask, and JavaScript.',
      'Used A/B testing to fine-tune marketing campaigns, driving ROI through data-driven decision-making.',
    ],
    technologies: ['TensorFlow', 'Pandas', 'Selenium', 'Python', 'Flask', 'A/B Testing'],
  },
];

const WorkExperience = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ fontFamily: '"Roboto Slab", serif', marginBottom: '40px' }}>
        Work Experience
      </Typography>

      {workExperience.map((experience, index) => (
        <Box key={index} sx={{ marginBottom: '30px' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            {experience.title} | {experience.company}
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic', marginBottom: '20px', color: '#b0b0b0' }}>
            {experience.period}
          </Typography>

          {experience.details.map((detail, idx) => (
            <Typography key={idx} variant="body1" sx={{ marginBottom: '10px', fontFamily: '"Open Sans", sans-serif' }}>
              - {detail.includes('AWS') ? (
                <Tooltip title="Amazon Web Services" arrow>
                  <span style={{ fontWeight: 'bold', color: '#90caf9' }}>AWS</span>
                </Tooltip>
              ) : detail.includes('NLP') ? (
                <Tooltip title="Natural Language Processing" arrow>
                  <span style={{ fontWeight: 'bold', color: '#90caf9' }}>NLP</span>
                </Tooltip>
              ) : (
                detail
              )}
            </Typography>
          ))}

          {/* Icons for technologies */}
          <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            {experience.technologies.includes('AWS') && <CloudIcon sx={{ color: '#90caf9' }} />}
            {experience.technologies.includes('Python') && <CodeIcon sx={{ color: '#90caf9' }} />}
            {experience.technologies.includes('Terraform') && <StorageIcon sx={{ color: '#90caf9' }} />}
            {/* Add more icons based on technologies */}
          </Box>

          {index < workExperience.length - 1 && <Divider sx={{ backgroundColor: '#ffffff30', marginY: '20px' }} />}
        </Box>
      ))}
    </Container>
  );
};

export default WorkExperience;
