import React, { useState } from 'react';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Input } from '../../../ui/Input/Input';
import { AccordionUi } from '../../../ui/accordion/accordion';

interface ILanguageItemProps {
  id: string;
  handleDeleteItem: () => void;
}

enum LangLevels {
  a1 = 'A1',
  a2 = 'A2',
  b1 = 'B1',
  b2 = 'B2',
  c1 = 'C1',
  c2 = 'C2',
}

export const LanguageItem: React.FC<ILanguageItemProps> = ({
  id,
  handleDeleteItem,
}) => {
  const [level, setLevel] = useState<string>('');

  const handleChange = (e: SelectChangeEvent) => {
    setLevel(e.target.value);
  };

  return (
    <AccordionUi
      handleDeleteItem={handleDeleteItem}
      id={id}
      summary={<>(Empty)</>}
      details={
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Input label="Language" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id={`${id}-level`}>Level</InputLabel>
              <Select
                labelId={`${id}-level`}
                value={level}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={LangLevels.a1}>{LangLevels.a1}</MenuItem>
                <MenuItem value={LangLevels.a2}>{LangLevels.a2}</MenuItem>
                <MenuItem value={LangLevels.b1}>{LangLevels.b1}</MenuItem>
                <MenuItem value={LangLevels.b2}>{LangLevels.b2}</MenuItem>
                <MenuItem value={LangLevels.c1}>{LangLevels.c1}</MenuItem>
                <MenuItem value={LangLevels.c2}>{LangLevels.c2}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      }
    />
  );
};
