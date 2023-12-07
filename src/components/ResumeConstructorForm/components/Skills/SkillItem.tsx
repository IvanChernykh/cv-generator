import React, { useState, useMemo } from 'react';
import { Grid, Slider, Typography } from '@mui/material';
import { Input } from '../../../ui/Input/Input';
import { AccordionUi } from '../../../ui/accordion/accordion';

interface ISkillItemProps {
  id: string;
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
    case 0:
      return [LevelColors.Novice, one];
    case 20:
      return [LevelColors.Apprentice, two];
    case 40:
      return [LevelColors.Adept, three];
    case 60:
      return [LevelColors.Expert, four];
    case 80:
      return [LevelColors.Master, five];
    case 100:
      return [LevelColors.Legendary, six];
    default:
      return [LevelColors.Novice, one];
  }
};

export const SkillItem: React.FC<ISkillItemProps> = ({
  id,
  handleDeleteItem,
}) => {
  const [level, setLevel] = useState<number>(20);

  const handleLevelChange = (e: any) => {
    setLevel(e.target.value);
  };

  const [levelColor, levelName] = useMemo(() => {
    return getLevelColorAndName(level);
  }, [level]);

  return (
    <AccordionUi
      handleDeleteItem={handleDeleteItem}
      id={id}
      summary={<>(Empty)</>}
      details={
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Input label="Skill" variant="filled" fullWidth />
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
              step={20}
              marks
              min={0}
              max={100}
              sx={{ transition: 'color .2s', color: levelColor }}
              onChange={(e) => handleLevelChange(e)}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
