import { Box, BoxProps } from '@mui/material';
import React from 'react';

interface IFlexStartCenterProps extends BoxProps {}

export const FlexStartCenter: React.FC<IFlexStartCenterProps> = ({
  children,
  sx,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
