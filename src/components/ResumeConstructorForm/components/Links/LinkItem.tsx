import React from 'react';
import { Grid } from '@mui/material';
import { Input } from '../../../ui/Input/Input';
import { AccordionUi } from '../../../ui/accordion/accordion';

interface ILinkItemProps {
  id: string;
  handleDeleteItem: () => void;
}

export const LinkItem: React.FC<ILinkItemProps> = ({
  id,
  handleDeleteItem,
}) => {
  return (
    <AccordionUi
      handleDeleteItem={handleDeleteItem}
      id={id}
      summary={<>(Empty)</>}
      details={
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Input label="Label" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Input label="Link" variant="filled" fullWidth />
          </Grid>
        </Grid>
      }
    />
  );
};
