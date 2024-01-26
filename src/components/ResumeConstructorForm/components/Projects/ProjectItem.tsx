import React from 'react';
import { AccordionUi } from '../../../ui/accordion/accordion';
import { SummaryAccordion } from '../../../ui/accordion/summary';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { TextAreaUi } from '../../../ui/textarea/textarea';
import { ProjectsFields } from '../../../../redux/resume/types';

interface IProjectItemProps {
  id: string;
  title: string;
  link: string;
  desc: string;
  handleDeleteItem: () => void;
  handleUpdateItem: (id: string, value: string, field: ProjectsFields) => void;
}

export const ProjectItem: React.FC<IProjectItemProps> = ({
  id,
  title,
  link,
  desc,
  handleDeleteItem,
  handleUpdateItem,
}) => {
  const handleChange = (value: string, field: ProjectsFields) => {
    handleUpdateItem(id, value, field);
  };

  return (
    <AccordionUi
      id={id}
      handleDeleteItem={handleDeleteItem}
      summary={<SummaryAccordion title={title} />}
      details={
        <Box>
          <Grid container spacing={4} mb={2}>
            <Grid item xs={6}>
              <TextField
                label="Project Name"
                variant="filled"
                fullWidth
                sx={{ mb: 2 }}
                value={title}
                onChange={(e) => handleChange(e.target.value, 'title')}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Project Link"
                variant="filled"
                fullWidth
                sx={{ mb: 2 }}
                value={link}
                onChange={(e) => handleChange(e.target.value, 'link')}
              />
            </Grid>
          </Grid>
          <Typography variant="body2" mb={1}>
            Description
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'stretch' }}>
            <TextAreaUi
              value={desc}
              onChange={(e) => handleChange(e.target.value, 'description')}
            />
          </Box>
        </Box>
      }
    />
  );
};
