import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

interface ISectionSubTitleProps extends TypographyProps {}

export const SectionSubTitle: React.FC<ISectionSubTitleProps> = ({
  children,
  ...props
}) => {
  return (
    <Typography variant="body2" mb={2} {...props}>
      {children}
    </Typography>
  );
};
