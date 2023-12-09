import React, { useMemo } from 'react';
import { Grid, Slider, TextField, Typography } from '@mui/material';
import { AccordionUi } from '../../../ui/accordion/accordion';
import { SummaryAccordion } from '../../../ui/accordion/summary';
import { ISkill } from '../../../../utils/types/resume';
import {
  SkillsFields,
  UpdateSectionItemPayload,
} from '../../../../redux/resume/types';

interface ISkillItemProps {
  skill: ISkill;
  updateSectionItem: (payload: UpdateSectionItemPayload<SkillsFields>) => void;
  handleDeleteItem: () => void;
}

enum LevelColors {
  Novice = '#fe797b',
  Apprentice = '#ffb750',
  Adept = '#FAD459',
  Expert = '#2CDB12',
  Master = '#36cedc',
  Legendary = '#a587ca',
}

const getLevelColorAndName = (level: number): [string, string] => {
  const [one, two, three, four, five, six] = Object.keys(LevelColors);

  switch (level) {
    case 16.5:
      return [LevelColors.Novice, one];
    case 33:
      return [LevelColors.Apprentice, two];
    case 49.5:
      return [LevelColors.Adept, three];
    case 66:
      return [LevelColors.Expert, four];
    case 82.5:
      return [LevelColors.Master, five];
    case 99:
      return [LevelColors.Legendary, six];
    default:
      return [LevelColors.Novice, one];
  }
};

export const SkillItem: React.FC<ISkillItemProps> = ({
  skill,
  handleDeleteItem,
  updateSectionItem,
}) => {
  const { id, title, level } = skill;

  const handleLevelChange = (e: any) => {
    updateSectionItem({
      id,
      list: 'skills',
      field: 'level',
      value: e.target.value,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSectionItem({
      id,
      list: 'skills',
      field: 'title',
      value: e.target.value,
    });
  };

  const [levelColor, levelName] = useMemo(() => {
    return getLevelColorAndName(level);
  }, [level]);

  return (
    <AccordionUi
      handleDeleteItem={handleDeleteItem}
      id={id}
      summary={
        <SummaryAccordion showSubtitle title={title} subtitle={levelName} />
      }
      details={
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              label="Skill"
              variant="filled"
              fullWidth
              value={title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" mb={1}>
              Skill level —{' '}
              <span style={{ color: levelColor, fontWeight: 600 }}>
                {levelName}
              </span>
            </Typography>
            <Slider
              value={level}
              step={16.5}
              marks
              min={16.5}
              max={99}
              sx={{ transition: 'color .2s', color: levelColor }}
              onChange={(e) => handleLevelChange(e)}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
