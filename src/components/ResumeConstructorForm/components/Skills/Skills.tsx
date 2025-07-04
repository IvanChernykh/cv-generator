import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { SkillItem } from './SkillItem';
import { ISkill } from '../../../../utils/types/resume';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
  SkillsFields,
  UpdateSectionItemPayload,
  UpdateSectionListPayload,
} from '../../../../redux/resume/types';
import { DraggableCustom } from '../../../ui/dragAndDrop/DraggableCustom';
import { DragDropWrapper } from '../../../ui/dragAndDrop/DragDropContextCustom';
import { SectionTitleEditable } from '../../../ui/text/sectionTitleEditable';

interface ISkillsProps {
  skills: ISkill[];
  sectionName: string;
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
  updateSectionItem: (payload: UpdateSectionItemPayload<SkillsFields>) => void;
  updateSectionList: (payload: UpdateSectionListPayload) => void;
}

export const Skills: React.FC<ISkillsProps> = ({
  skills,
  sectionName,
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
}) => {
  const handleAddItem = () => {
    addSectionItem({ field: 'skills' });
  };

  const handleDeleteItem = (id: string) => {
    deleteSectionItem({ id, field: 'skills' });
  };

  return (
    <Box mb={4}>
      <SectionTitleEditable sectionValue={sectionName} section="skills" />
      <DragDropWrapper
        list={skills}
        listName="skills"
        droppableId="skills-dnd"
        updateSectionList={updateSectionList}
      >
        {skills.map((item, idx) => (
          <DraggableCustom key={item.id} draggableId={item.id} index={idx}>
            <SkillItem
              skill={item}
              updateSectionItem={updateSectionItem}
              handleDeleteItem={() => handleDeleteItem(item.id)}
            />
          </DraggableCustom>
        ))}
      </DragDropWrapper>

      <AddMoreBtn
        text="Skill"
        addFirst={!skills.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
