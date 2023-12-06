import { SxProps, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface IInputProps {
  value?: string;
  label?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  fullWidth?: boolean;
  sx?: SxProps;
}

export const Input: React.FC<IInputProps> = ({
  value,
  label,
  fullWidth,
  variant,
  sx,
}) => {
  const [val, setVal] = useState<string>(value ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    setVal(value ?? '');
  }, [value]);

  return (
    <TextField
      value={val}
      label={label}
      variant={variant || 'standard'}
      fullWidth={fullWidth}
      onChange={handleChange}
      sx={sx}
    />
  );
};
