/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { TextAreaUi } from '../../../ui/textarea/textarea';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { SectionSubTitle } from '../../../ui/text/sectionSubTitle';

interface ISummaryProps {
  summary: string;
  setSummary: (payload: string) => void;
}

export const Summary: React.FC<ISummaryProps> = ({ summary, setSummary }) => {
  const [val, setVal] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value);
  };

  const onBlur = () => {
    setSummary(val);
  };

  useEffect(() => {
    setSummary(summary);
  }, [summary]);

  return (
    <Box mb={4}>
      <SectionTitle>Summary</SectionTitle>
      <SectionSubTitle>
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </SectionSubTitle>
      <TextAreaUi value={val} onChange={onChange} onBlur={onBlur} />
    </Box>
  );
};
