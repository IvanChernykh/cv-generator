import { Box, TextareaAutosize, Typography } from '@mui/material';
import React, { useState } from 'react';

export const Summary: React.FC = () => {
  const [val, setVal] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value);
  };

  return (
    <Box mb={4}>
      <Typography variant="h6" mb={2}>
        Summary
      </Typography>
      <Typography variant="body2" mb={2}>
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </Typography>
      <TextareaAutosize
        style={{
          width: '100%',
          resize: 'none',
          fontFamily: 'inherit',
          fontSize: '1rem',
          padding: '10px',
          background: 'rgba(0, 0, 0, 0.06)',
          border: 'none',
          outline: 'none',
        }}
        minRows={5}
        value={val}
        onChange={onChange}
      />
    </Box>
  );
};
