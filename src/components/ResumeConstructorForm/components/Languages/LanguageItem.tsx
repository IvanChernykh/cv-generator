import React from 'react';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { AccordionUi } from '../../../ui/accordion/accordion';
import { SummaryAccordion } from '../../../ui/accordion/summary';
import { ILanguage } from '../../../../utils/types/resume';
import {
  LanguagesFields,
  UpdateSectionItemPayload,
} from '../../../../redux/resume/types';

interface ILanguageItemProps {
  language: ILanguage;
  handleDeleteItem: () => void;
  updateSectionItem: (
    payload: UpdateSectionItemPayload<LanguagesFields>,
  ) => void;
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
  language,
  handleDeleteItem,
  updateSectionItem,
}) => {
  const { id, title, level } = language;

  const handleChangeSelect = (e: SelectChangeEvent) => {
    updateSectionItem({
      id,
      list: 'languages',
      field: 'level',
      value: e.target.value,
    });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSectionItem({
      id,
      list: 'languages',
      field: 'title',
      value: e.target.value,
    });
  };

  return (
    <AccordionUi
      handleDeleteItem={handleDeleteItem}
      id={language.id}
      summary={<SummaryAccordion title={title} subtitle={level} />}
      details={
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              label="Language"
              variant="filled"
              fullWidth
              value={title}
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id={`${id}-level`}>Level</InputLabel>
              <Select
                labelId={`${id}-level`}
                value={level}
                onChange={handleChangeSelect}
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
