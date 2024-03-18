import { Button, ButtonProps } from '@mui/material';
import React, { useEffect } from 'react';

interface IButtonUiProps extends ButtonProps {}

export const ButtonUi: React.FC<IButtonUiProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <Button {...props} sx={{ textTransform: 'none', ...sx }}>
      {children}
    </Button>
  );
};
