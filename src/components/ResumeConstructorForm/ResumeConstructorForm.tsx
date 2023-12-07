import { Container, SxProps, Typography } from '@mui/material';
import React from 'react';
import { Input } from '../ui/Input/Input';
import { FlexCenter } from '../ui/boxes/FlexCenter';
import { PersonalDetails } from './components/PersonalDetails/PersonalDetails';
import { Summary } from './components/Summary/Summary';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import { Links } from './components/Links/Links';
import { Education } from './components/Education/Education';
import { Languages } from './components/Languages/Languages';
import { Courses } from './components/Courses/Courses';
import { Skills } from './components/Skills/Skills';

const containerStyles: SxProps = {
  paddingTop: '60px',
  paddingBottom: '120px',
  paddingLeft: '48px !important',
  paddingRight: '48px !important',
  height: '100vh',
  overflow: 'auto',
  '-ms-overflow-style': 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

export const ResumeConstructorForm: React.FC = () => {
  return (
    <Container sx={containerStyles}>
      <Typography variant="h5" textAlign="center" mb={2}>
        CV Name
      </Typography>
      <FlexCenter sx={{ mb: 8 }}>
        <Input value="Your CV" />
      </FlexCenter>
      <PersonalDetails />
      <Summary />
      <WorkExperience />
      <Education />
      <Links />
      <Skills />
      <Languages />
      <Courses />
    </Container>
  );
};
