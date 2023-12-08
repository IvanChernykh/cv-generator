import React from 'react';
import { Grid, TextField } from '@mui/material';
import { AccordionUi } from '../../../ui/accordion/accordion';
import { SummaryAccordion } from '../../../ui/accordion/summary';
import { ILink } from '../../../../utils/types/resume';
import {
  LinksFields,
  UpdateSectionItemPayload,
} from '../../../../redux/resume/types';

interface ILinkItemProps {
  linkItem: ILink;
  updateSectionItem: (payload: UpdateSectionItemPayload<LinksFields>) => void;
  handleDeleteItem: () => void;
}

export const LinkItem: React.FC<ILinkItemProps> = ({
  linkItem,
  handleDeleteItem,
  updateSectionItem,
}) => {
  const { id, title, link } = linkItem;

  const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSectionItem({
      id,
      list: 'links',
      field: 'title',
      value: e.target.value,
    });
  };

  const onLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSectionItem({
      id,
      list: 'links',
      field: 'link',
      value: e.target.value,
    });
  };

  return (
    <AccordionUi
      handleDeleteItem={handleDeleteItem}
      id={id}
      summary={<SummaryAccordion title={title} subtitle={link} />}
      details={
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              label="Label"
              variant="filled"
              fullWidth
              value={title}
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
