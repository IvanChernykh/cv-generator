import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ButtonUi } from '../button/button';
import { ButtonProps } from '@mui/material';

interface IAddMoreBtnProps extends ButtonProps {
  text: string;
  addFirst?: boolean;
}

export const AddMoreBtn: React.FC<IAddMoreBtnProps> = ({
  sx,
  text,
  addFirst,
  ...props
}) => {
  return (
    <ButtonUi
      {...props}
      startIcon={<AddIcon />}
      sx={{
        fontWeight: 700,
        justifyContent: 'start',
        width: 'calc(100% - 41px)',
        ...sx,
      }}
    >
      {addFirst ? `Add ${text}` : `Add one more ${text}`}
    </ButtonUi>
  );
};
