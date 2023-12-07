import React from 'react';
import { TextareaAutosize, TextareaAutosizeProps } from '@mui/material';

interface ITextAreaUiProps extends TextareaAutosizeProps {}

export const TextAreaUi: React.FC<ITextAreaUiProps> = ({ ...props }) => {
  return (
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
      {...props}
    />
  );
};
