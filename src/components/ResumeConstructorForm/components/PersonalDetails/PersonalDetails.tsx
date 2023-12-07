import { Box, Grid, TextField } from '@mui/material';
import React from 'react';
import { ImageInput } from '../../../ui/imageInput/imageInput';
import { SectionTitle } from '../../../ui/text/sectionTitle';

interface IPersonalDetailsProps {}

export const PersonalDetails: React.FC<IPersonalDetailsProps> = () => {
  return (
    <Box mb={4}>
      <SectionTitle>Personal Details</SectionTitle>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            variant="filled"
            label="Wanted Job Title"
            fullWidth
            sx={{ mb: 4 }}
          />
          <TextField
            variant="filled"
            label="First Name"
            fullWidth
            sx={{ mb: 4 }}
          />
          <TextField variant="filled" label="Email" fullWidth sx={{ mb: 4 }} />
          <TextField
            variant="filled"
            label="LinkedIn"
            fullWidth
            sx={{ mb: 4 }}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ height: '56px' }} mb={4}>
            <ImageInput />
          </Box>
          <TextField
            variant="filled"
            label="Last Name"
            fullWidth
            sx={{ mb: 4 }}
          />
          <TextField variant="filled" label="Phone" fullWidth sx={{ mb: 4 }} />
          <TextField variant="filled" label="City" fullWidth sx={{ mb: 4 }} />
        </Grid>
      </Grid>
    </Box>
  );
};
