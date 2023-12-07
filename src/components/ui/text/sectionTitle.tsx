import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

interface ISectionTitleProps extends TypographyProps {}

export const SectionTitle: React.FC<ISectionTitleProps> = ({
  children,
  ...props
}) => {
  return (
    <Typography variant="h6" mb={1} fontWeight={700} {...props}>
      {children}
    </Typography>
  );
};
