import React from 'react';
import { Box, BoxProps } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ButtonUi } from '../button/button';
import { Colors } from '../../../utils/constants/colors';

interface IAccordionProps extends BoxProps {
  id: string;
  summary: React.ReactNode;
  details: React.ReactNode;
  handleDeleteItem: () => void;
}

export const AccordionUi: React.FC<IAccordionProps> = ({
  sx,
  id,
  summary,
  details,
  handleDeleteItem,
  ...props
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        '&:hover': {
          '.delete-btn': {
            opacity: 1,
          },
        },
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      <Accordion
        sx={{
          width: '100%',
          boxShadow: 'none',
          border: `1px solid ${Colors.gray}`,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
          {summary}
        </AccordionSummary>
        <AccordionDetails>{details}</AccordionDetails>
      </Accordion>
      <Box width={40} mt={1}>
        <ButtonUi
          className="delete-btn"
          sx={{
            opacity: 0,
            transition: 'all .15s',
            '&:hover': {
              '.delete-icon': { color: Colors.red },
            },
          }}
          onClick={handleDeleteItem}
        >
          <DeleteOutlineIcon
            className="delete-icon"
            color="disabled"
            sx={{ transition: 'color .15s' }}
          />
        </ButtonUi>
      </Box>
    </Box>
  );
};
