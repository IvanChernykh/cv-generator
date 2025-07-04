import React from 'react';
import { Box } from '@mui/material';
import { SectionSubTitle } from '../../../ui/text/sectionSubTitle';
import { TextEditor } from '../../../ui/textEditor/textEditor';
import { SectionTitleEditable } from '../../../ui/text/sectionTitleEditable';

interface ISummaryProps {
  summary: string;
  sectionName: string;
  setSummary: (payload: string) => void;
  setSummaryDelta: (payload: string) => void;
}

export const Summary: React.FC<ISummaryProps> = ({
  summary,
  sectionName,
  setSummary,
  setSummaryDelta,
}) => {
  const onChange = (val: string) => {
    setSummary(val);
  };

  return (
    <Box mb={4}>
      <SectionTitleEditable sectionValue={sectionName} section="summary" />
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
