import React from 'react';
import { Box, Grid, TextField } from '@mui/material';
import { ImageInput } from '../../../ui/imageInput/imageInput';
import { IDetails } from '../../../../utils/types/resume';
import { SetDetailsFieldsPayload } from '../../../../redux/resume/types';
import { SectionTitleEditable } from '../../../ui/text/sectionTitleEditable';

interface IPersonalDetailsProps {
  details: IDetails;
  sectionName: string;
  setDetailsFields: (payload: SetDetailsFieldsPayload) => void;
  setDetailsPhoto: (payload: string) => void;
}

export const PersonalDetails: React.FC<IPersonalDetailsProps> = ({
  details,
  sectionName,
  setDetailsFields,
  setDetailsPhoto,
}) => {
  const handleUpdateInput = (
    field: keyof Omit<IDetails, 'photo'>,
    value: string,
  ) => {
    setDetailsFields({ field, value });
  };

  return (
    <Box mb={4}>
      <SectionTitleEditable sectionValue={sectionName} section="contacts" />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            variant="filled"
            label="Wanted Job Title"
            fullWidth
            sx={{ mb: 4 }}
            value={details.jobTitle}
            onChange={(e) => {
              handleUpdateInput('jobTitle', e.target.value);
            }}
          />
          <TextField
            variant="filled"
            label="First Name"
            fullWidth
            sx={{ mb: 4 }}
            value={details.firstName}
            onChange={(e) => {
              handleUpdateInput('firstName', e.target.value);
            }}
          />
          <TextField
            variant="filled"
            label="Email"
            fullWidth
            sx={{ mb: 4 }}
            value={details.email}
            onChange={(e) => {
              handleUpdateInput('email', e.target.value);
            }}
          />
          <TextField
            variant="filled"
            label="Country"
            fullWidth
            sx={{ mb: 4 }}
            value={details.country}
            onChange={(e) => {
              handleUpdateInput('country', e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ height: '56px' }} mb={4}>
            <ImageInput image={details.photo} setImage={setDetailsPhoto} />
          </Box>
          <TextField
            variant="filled"
            label="Last Name"
            fullWidth
            sx={{ mb: 4 }}
            value={details.lastName}
            onChange={(e) => {
              handleUpdateInput('lastName', e.target.value);
            }}
          />
          <TextField
            variant="filled"
            label="Phone"
            fullWidth
            sx={{ mb: 4 }}
            value={details.phone}
            onChange={(e) => {
              handleUpdateInput('phone', e.target.value);
            }}
          />
          <TextField
            variant="filled"
            label="City"
            fullWidth
            sx={{ mb: 4 }}
            value={details.city}
            onChange={(e) => {
              handleUpdateInput('city', e.target.value);
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
