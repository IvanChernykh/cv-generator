import React, { useState } from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { uid } from '../../../../helpers/generateId';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { SkillItem } from './SkillItem';

type Skill = { id: string };

export const Skills: React.FC = () => {
  const [skillsList, setSkillsList] = useState<Skill[]>([]);

  const handleAddItem = () => {
    setSkillsList([...skillsList, { id: uid() }]);
  };

  const handleDeleteItem = (id: string) => {
    setSkillsList(skillsList.filter((item) => item.id !== id));
  };

  return (
    <Box mb={4}>
      <SectionTitle>Skills</SectionTitle>
      {skillsList.map(({ id }) => (
        <SkillItem
          key={id}
          id={id}
          handleDeleteItem={() => handleDeleteItem(id)}
        />
      ))}
      <AddMoreBtn
        text="Skill"
        addFirst={!skillsList.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
