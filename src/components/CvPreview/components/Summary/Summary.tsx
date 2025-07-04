import React from 'react';
import { SectionContainer, LeftSectionTitle } from '../../../ui/pdf/pdf';

interface ISummaryProps {
  summary: JSX.Element;
  sectionName: string;
}

export const SummarySection: React.FC<ISummaryProps> = ({
  summary,
  sectionName,
}) => {
  return (
    <SectionContainer>
      <LeftSectionTitle>{sectionName}</LeftSectionTitle>
      {summary}
    </SectionContainer>
  );
};
