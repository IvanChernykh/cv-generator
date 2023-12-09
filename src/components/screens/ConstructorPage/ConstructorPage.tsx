import React from 'react';
import { Container } from './ConstructorPage.styled';
import ResumeConstructorForm from '../../ResumeConstructorForm';
import CvPreview from '../../CvPreview';

export const ConstructorPage: React.FC = () => {
  // return <CvPreview />;
  return (
    <Container>
      <ResumeConstructorForm />
      <CvPreview />
    </Container>
  );
};
