import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { AccordionUi } from '../../../ui/accordion/accordion';
import { SummaryAccordion } from '../../../ui/accordion/summary';

interface ILinkItemProps {
  id: string;
  handleDeleteItem: () => void;
}

export const LinkItem: React.FC<ILinkItemProps> = ({
  id,
  handleDeleteItem,
}) => {
  const [label, setLabel] = useState<string>('');
  const [link, setLink] = useState<string>('');

  const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const onLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  return (
    <AccordionUi
      handleDeleteItem={handleDeleteItem}
      id={id}
      summary={<SummaryAccordion title={label} subtitle={link} />}
      details={
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              label="Label"
              variant="filled"
              fullWidth
              value={label}
              onChange={onLabelChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Link"
              variant="filled"
              fullWidth
              value={link}
              onChange={onLinkChange}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
