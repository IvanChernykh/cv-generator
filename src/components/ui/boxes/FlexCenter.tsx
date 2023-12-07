import { Box, BoxProps } from '@mui/material';
import React from 'react';

interface IFlexCenterProps extends BoxProps {}

export const FlexCenter: React.FC<IFlexCenterProps> = ({ children, sx }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', ...sx }}>
      {children}
    </Box>
  );
};
