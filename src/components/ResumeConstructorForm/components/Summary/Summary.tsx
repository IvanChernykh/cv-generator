import React from 'react';
import { Box } from '@mui/material';
import { TextAreaUi } from '../../../ui/textarea/textarea';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { SectionSubTitle } from '../../../ui/text/sectionSubTitle';

interface ISummaryProps {
  summary: string;
  setSummary: (payload: string) => void;
}

export const Summary: React.FC<ISummaryProps> = ({ summary, setSummary }) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value);
  };

  return (
    <Box mb={4}>
      <SectionTitle>Summary</SectionTitle>
      <SectionSubTitle>
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </SectionSubTitle>
      <TextAreaUi value={summary} onChange={onChange} />
    </Box>
  );
};
