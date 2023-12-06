import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Input } from '../../../ui/Input/Input';

interface IPersonalDetailsProps {}

export const PersonalDetails: React.FC<IPersonalDetailsProps> = () => {
  return (
    <Box mb={4}>
      <Typography variant="h6" mb={2}>
        Personal Details
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Input
            variant="filled"
            label="Wanted Job Title"
            fullWidth
            sx={{ mb: 4 }}
          />
          <Input variant="filled" label="First Name" fullWidth sx={{ mb: 4 }} />
          <Input variant="filled" label="Email" fullWidth sx={{ mb: 4 }} />
          <Input variant="filled" label="LinkedIn" fullWidth sx={{ mb: 4 }} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: 'flex', flexDirection: 'column-reverse' }}
        >
          {/* TODO: add name */}
          <Input variant="filled" label="Last Name" fullWidth sx={{ mb: 4 }} />
          <Input variant="filled" label="Phone" fullWidth sx={{ mb: 4 }} />
          <Input variant="filled" label="City" fullWidth sx={{ mb: 4 }} />
        </Grid>
      </Grid>
    </Box>
  );
};
