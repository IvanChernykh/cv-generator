import React from 'react';
import { Box } from '@mui/material';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { SectionSubTitle } from '../../../ui/text/sectionSubTitle';
import { TextEditor } from '../../../ui/textEditor/textEditor';

interface ISummaryProps {
  summary: string;
  setSummary: (payload: string) => void;
  setSummaryDelta: (payload: string) => void;
}

export const Summary: React.FC<ISummaryProps> = ({
  summary,
  setSummary,
  setSummaryDelta,
}) => {
  const onChange = (val: string) => {
    setSummary(val);
  };

  return (
    <Box mb={4}>
      <SectionTitle>Summary</SectionTitle>
      <SectionSubTitle>
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </SectionSubTitle>
      <TextEditor
        value={summary}
        onChange={onChange}
        onChangeDelta={setSummaryDelta}
      />
    </Box>
  );
};
