import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { SkillItem } from './SkillItem';
import { ISkill } from '../../../../utils/types/resume';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
  SkillsFields,
  UpdateSectionItemPayload,
} from '../../../../redux/resume/types';

interface ISkillsProps {
  skills: ISkill[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
  updateSectionItem: (payload: UpdateSectionItemPayload<SkillsFields>) => void;
}

export const Skills: React.FC<ISkillsProps> = ({
  skills,
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
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
      {skills.map((item) => (
        <SkillItem
          key={item.id}
          skill={item}
          updateSectionItem={updateSectionItem}
          handleDeleteItem={() => handleDeleteItem(item.id)}
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
