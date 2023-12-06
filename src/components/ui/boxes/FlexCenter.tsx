import { Box, SxProps } from '@mui/material';
import React from 'react';

interface IFlexCenterProps {
  children: React.ReactNode;
  sx?: SxProps;
}

export const FlexCenter: React.FC<IFlexCenterProps> = ({ children, sx }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', ...sx }}>
      {children}
    </Box>
  );
};
