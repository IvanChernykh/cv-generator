import React from 'react';
import { Container, SxProps, TextField, Typography } from '@mui/material';
import { FlexCenter } from '../ui/boxes/FlexCenter';
import PersonalDetails from './components/PersonalDetails';
import Summary from './components/Summary';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Links from './components/Links';
import Languages from './components/Languages';
import Courses from './components/Courses';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TopPanel from './components/TopPanel';

interface IResumeConstructorFormProps {
  cvName: string;
  setCvName: (payload: string) => void;
}

const containerStyles: SxProps = {
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
  const onChangeCvName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvName(e.target.value);
  };

  return (
    <Container sx={containerStyles}>
      <TopPanel />
      <Typography variant="h5" textAlign="center" mb={2}>
        CV Name
      </Typography>
      <FlexCenter sx={{ mb: 8 }}>
        <TextField value={cvName} onChange={onChangeCvName} />
      </FlexCenter>
      <PersonalDetails />
      <Summary />
      <WorkExperience />
      <Projects />
      <Education />
      <Links />
      <Skills />
      <Languages />
      <Courses />
    </Container>
  );
};
