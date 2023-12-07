import React from 'react';
import { Box, FormControlLabel, Grid, Switch, Typography } from '@mui/material';
import { Input } from '../../../ui/Input/Input';
import { AccordionUi } from '../../../ui/accordion/accordion';
import { TextAreaUi } from '../../../ui/textarea/textarea';
import { DatePickerUi } from '../../../ui/datePicker/datePicker';
import { Colors } from '../../../../helpers/constants/colors';

interface IBackgroundDescProps {
  id: string;
  handleDeleteItem: () => void;
  inputLabelOne: string;
  inputLabelTwo: string;
  type: 'workExpeprience' | 'education' | 'course';
}

export const BackgroundDescription: React.FC<IBackgroundDescProps> = ({
  id,
  inputLabelOne,
  inputLabelTwo,
  type,
  handleDeleteItem,
}) => {
  return (
    <AccordionUi
      handleDeleteItem={handleDeleteItem}
      id={id}
      summary={<>(Empty)</>}
      details={
        <Box>
          <Grid container spacing={4} mb={2}>
            <Grid item xs={6}>
              <Input
                label={inputLabelOne}
                variant="filled"
                fullWidth
                sx={{ mb: 2 }}
              />
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    gap: 2,
                  }}
                >
                  <Box>
                    <DatePickerUi
                      label="Start Date"
                      views={['month', 'year']}
                      sx={{ background: Colors.grayBg }}
                    />
                    {type !== 'course' && (
                      <Box>
                        <FormControlLabel
                          control={<Switch />}
                          label="Currently work here"
                          sx={{
                            '.MuiTypography-root': { fontSize: '0.8rem' },
                          }}
                        />
                      </Box>
                    )}
                  </Box>
                  <DatePickerUi
                    label="End Date"
                    views={['month', 'year']}
                    sx={{ background: Colors.grayBg, mb: 1 }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Input
                label={inputLabelTwo}
                variant="filled"
                fullWidth
                sx={{ mb: 2 }}
              />
              {type !== 'course' && (
                <Input label="City" variant="filled" fullWidth sx={{ mb: 2 }} />
              )}
            </Grid>
          </Grid>
          {type !== 'course' && (
            <>
              <Typography variant="body2" mb={1}>
                Description
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'stretch' }}>
                <TextAreaUi />
              </Box>
            </>
          )}
        </Box>
      }
    />
  );
};
