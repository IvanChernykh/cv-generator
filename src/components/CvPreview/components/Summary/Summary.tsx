import React from 'react';
import {
  ItemText,
  SectionContainer,
  LeftSectionTitle,
} from '../../../ui/pdf/pdf';

interface ISummaryProps {
  summary: string;
}

export const SummarySection: React.FC<ISummaryProps> = ({ summary }) => {
  return (
    <SectionContainer>
      <LeftSectionTitle>Summary</LeftSectionTitle>
      <ItemText>{summary}</ItemText>
    </SectionContainer>
  );
};
