import React from 'react';
import { SectionContainer, LeftSectionTitle } from '../../../ui/pdf/pdf';

interface ISummaryProps {
  summary: JSX.Element;
}

export const SummarySection: React.FC<ISummaryProps> = ({ summary }) => {
  return (
    <SectionContainer>
      <LeftSectionTitle>Summary</LeftSectionTitle>
      {summary}
    </SectionContainer>
  );
};
