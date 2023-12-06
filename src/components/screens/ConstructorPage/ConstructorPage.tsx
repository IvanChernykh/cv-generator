import React from 'react';
import { Container } from './ConstructorPage.styled';
import { ResumeConstructorForm } from '../../ResumeConstructorForm/ResumeConstructorForm';

export const ConstructorPage: React.FC = () => {
  return (
    <Container>
      <ResumeConstructorForm />
    </Container>
  );
};