/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import moment from 'moment';
import {
  Box,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { AccordionUi } from '../../../ui/accordion/accordion';
import { DatePickerUi } from '../../../ui/datePicker/datePicker';
import { Colors } from '../../../../utils/constants/colors';
import { SummaryAccordion } from '../../../ui/accordion/summary';
import { TextEditor } from '../../../ui/textEditor/textEditor';

interface IBackgroundDescProps {
  id: string;
  inputOne: string;
  inputTwo: string;
  inputLabelOne: string;
  inputLabelTwo: string;
  description?: string;
  city?: string;
  type: 'workExpeprience' | 'education' | 'course';
  startEndDate: string;
  handleDeleteItem: () => void;
  updateDescription?: (value: string) => void;
  updateDescriptionDelta?: (value: string) => void;
  updateStartEndDate: (value: string) => void;
  updateCity?: (value: string) => void;
  updateInputOne: (value: string) => void;
  updateInputTwo: (value: string) => void;
}

export const getItemTitle = (inpOne: string, inpTwo: string) => {
  if (inpOne && inpTwo) {
    return `${inpOne} at ${inpTwo}`;
  }
  return inpOne || inpTwo || '';
};

const getSummaryDate = (
  startDate: Date | null,
  endDate: Date | null,
  toPresent: boolean,
): string => {
  const formattedStartDate = moment(startDate).format('MMM, yyyy');
  const formattedEndDate = moment(endDate).format('MMM, yyyy');
  const isStartDateValid = moment(startDate).isValid();
  const isEndDateValid = moment(endDate).isValid();
  if (
    startDate &&
    isStartDateValid &&
    ((endDate && isEndDateValid) || toPresent)
  ) {
    return `${formattedStartDate} - ${
      toPresent ? 'Present' : formattedEndDate
    }`;
  }

  if (startDate) {
    return isStartDateValid ? formattedStartDate : '';
  }
  return isEndDateValid ? formattedEndDate : '';
};

const convertDateString = (date: string | undefined) => {
  return date && moment(date).isValid() ? moment(date, 'MMM, YYYY') : null;
};

const getValueFromFormattedDate = (
  startEndDate: string,
): [Date | null, Date | null, boolean] => {
  const [formattedStart, formattedEnd] = startEndDate.split(' - ');

  const toPresent = !!(
    formattedStart?.includes('Present') || formattedEnd?.includes('Present')
  );

  const startDate = convertDateString(formattedStart);
  const endDate = convertDateString(formattedEnd);

  return [startDate as Date | null, endDate as Date | null, toPresent];
};

export const BackgroundDescription: React.FC<IBackgroundDescProps> = ({
  id,
  inputOne,
  inputTwo,
  inputLabelOne,
  inputLabelTwo,
  type,
  city,
  description,
  startEndDate,
  handleDeleteItem,
  updateDescription,
  updateDescriptionDelta,
  updateStartEndDate,
  updateCity,
  updateInputOne,
  updateInputTwo,
}) => {
  const userModifiedDateRef = useRef<boolean>(false);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [toPresent, setToPresent] = useState<boolean>(false);

  const onChangeInputOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateInputOne(e.target.value);
  };
  const onChangeInputTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateInputTwo(e.target.value);
  };

  const onChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCity?.(e.target.value);
  };

  const onChangeStartDate = (date: Date | null) => {
    setStartDate(date);
    userModifiedDateRef.current = true;
  };
  const onChangeEndDate = (date: Date | null) => {
    setEndDate(date);
    userModifiedDateRef.current = true;
  };

  const handleToPresentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToPresent(e.target.checked);
    userModifiedDateRef.current = true;
  };

  const formattedDate = useMemo(() => {
    return getSummaryDate(startDate, endDate, toPresent);
  }, [startDate, endDate, toPresent]);

  useEffect(() => {
    if (userModifiedDateRef.current) {
      updateStartEndDate(formattedDate);
      userModifiedDateRef.current = false;
    }
  }, [formattedDate]);

  useEffect(() => {
    if (startEndDate) {
      const [start, end, present] = getValueFromFormattedDate(startEndDate);

      setStartDate(start);
      end && setEndDate(end);
      present && setToPresent(true);
    }
  }, [startEndDate]);

  return (
    <AccordionUi
      handleDeleteItem={handleDeleteItem}
      id={id}
      summary={
        <SummaryAccordion
          title={getItemTitle(inputOne, inputTwo)}
          subtitle={formattedDate}
        />
      }
      details={
        <Box>
          <Grid container spacing={4} mb={2}>
            <Grid item xs={6}>
              <TextField
                label={inputLabelOne}
                variant="filled"
                fullWidth
                sx={{ mb: 2 }}
                value={inputOne}
                onChange={onChangeInputOne}
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
                      value={startDate}
                      onChange={onChangeStartDate}
                      disableFuture
                    />
                    {type !== 'course' && (
                      <Box>
                        <FormControlLabel
                          control={
                            <Switch
                              value={toPresent}
                              checked={toPresent}
                              onChange={handleToPresentChange}
                            />
                          }
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
                    value={endDate}
                    onChange={onChangeEndDate}
                    disabled={toPresent}
                    disableFuture
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label={inputLabelTwo}
                variant="filled"
                fullWidth
                sx={{ mb: 2 }}
                value={inputTwo}
                onChange={onChangeInputTwo}
              />
              {type !== 'course' && (
                <TextField
                  label="City"
                  variant="filled"
                  fullWidth
                  sx={{ mb: 2 }}
                  value={city}
                  onChange={onChangeCity}
                />
              )}
            </Grid>
          </Grid>
          {type !== 'course' && (
            <>
              <Typography variant="body2" mb={1}>
                Description
              </Typography>
              <Box>
                <TextEditor
                  value={description}
                  onChange={updateDescription}
                  onChangeDelta={updateDescriptionDelta}
                />
              </Box>
            </>
          )}
        </Box>
      }
    />
  );
};
