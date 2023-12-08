import React from 'react';
import {
  LocalizationProvider,
  DatePicker,
  DatePickerProps,
} from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

interface IDatePickerProps extends DatePickerProps<Date> {}

export const DatePickerUi: React.FC<IDatePickerProps> = ({ ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker {...props} />
    </LocalizationProvider>
  );
};
