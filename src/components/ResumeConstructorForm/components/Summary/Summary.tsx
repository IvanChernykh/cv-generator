import { Box } from '@mui/material';
import React, { useState } from 'react';
import { TextAreaUi } from '../../../ui/textarea/textarea';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { SectionSubTitle } from '../../../ui/text/sectionSubTitle';

export const Summary: React.FC = () => {
  const [val, setVal] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value);
  };

  return (
    <Box mb={4}>
      <SectionTitle>Summary</SectionTitle>
      <SectionSubTitle>
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </SectionSubTitle>
      <TextAreaUi value={val} onChange={onChange} />
    </Box>
  );
};
