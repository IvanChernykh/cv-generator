import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { SkillItem } from './SkillItem';
import { ISkill } from '../../../../utils/types/resume';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
} from '../../../../redux/resume/types';

interface ISkillsProps {
  skills: ISkill[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
}

export const Skills: React.FC<ISkillsProps> = ({
  skills,
  addSectionItem,
  deleteSectionItem,
}) => {
  const handleAddItem = () => {
    addSectionItem({ field: 'skills' });
  };

  const handleDeleteItem = (id: string) => {
    deleteSectionItem({ id, field: 'skills' });
  };

  return (
    <Box mb={4}>
      <SectionTitle>Skills</SectionTitle>
      {skills.map(({ id }) => (
        <SkillItem
          key={id}
          id={id}
          handleDeleteItem={() => handleDeleteItem(id)}
        />
      ))}
      <AddMoreBtn
        text="Skill"
        addFirst={!skills.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
