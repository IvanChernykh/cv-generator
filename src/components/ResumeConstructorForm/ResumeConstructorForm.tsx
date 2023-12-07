/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Container, SxProps, TextField, Typography } from '@mui/material';
import { FlexCenter } from '../ui/boxes/FlexCenter';
import PersonalDetails from './components/PersonalDetails';
import Summary from './components/Summary';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import { Links } from './components/Links/Links';
import { Education } from './components/Education/Education';
import { Languages } from './components/Languages/Languages';
import { Courses } from './components/Courses/Courses';
import { Skills } from './components/Skills/Skills';

interface IResumeConstructorFormProps {
  cvName: string;
  setCvName: (payload: string) => void;
}

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

export const ResumeConstructorForm: React.FC<IResumeConstructorFormProps> = ({
  cvName,
  setCvName,
}) => {
  const [cvNameValue, setCvNameValue] = useState<string>(cvName);

  const onBlurCvName = () => {
    setCvName(cvNameValue);
  };

  useEffect(() => {
    setCvName(cvName);
  }, [cvName]);

  return (
    <Container sx={containerStyles}>
      <Typography variant="h5" textAlign="center" mb={2}>
        CV Name
      </Typography>
      <FlexCenter sx={{ mb: 8 }}>
        <TextField
          value={cvNameValue}
          onChange={(e) => setCvNameValue(e.target.value)}
          onBlur={onBlurCvName}
        />
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
