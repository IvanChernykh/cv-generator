import React from 'react';
import { AccordionUi } from '../../../ui/accordion/accordion';
import { SummaryAccordion } from '../../../ui/accordion/summary';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { ProjectsFields } from '../../../../redux/resume/types';
import { TextEditor } from '../../../ui/textEditor/textEditor';

interface IProjectItemProps {
  id: string;
  title: string;
  link: string;
  linkToRepo: string;
  desc: string;
  handleDeleteItem: () => void;
  handleUpdateItem: (id: string, value: string, field: ProjectsFields) => void;
}

export const ProjectItem: React.FC<IProjectItemProps> = ({
  id,
  title,
  link,
  linkToRepo,
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
              <TextField
                label="Repository Link"
                variant="filled"
                fullWidth
                sx={{ mb: 2 }}
                value={linkToRepo}
                onChange={(e) => handleChange(e.target.value, 'linkToRepo')}
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
          <Box>
            <TextEditor
              value={desc}
              onChange={(v) => handleChange(v, 'description')}
              onChangeDelta={(v) => handleChange(v, 'descriptionDelta')}
            />
          </Box>
        </Box>
      }
    />
  );
};
