import React from 'react';
import {
  LocalizationProvider,
  DatePicker,
  DatePickerProps,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface IDatePickerProps extends DatePickerProps<Date> {} // or any

export const DatePickerUi: React.FC<IDatePickerProps> = ({ ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker {...props} />
    </LocalizationProvider>
  );
};
