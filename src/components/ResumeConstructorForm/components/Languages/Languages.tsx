import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { LanguageItem } from './LanguageItem';
import { ILanguage } from '../../../../utils/types/resume';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
  LanguagesFields,
  UpdateSectionItemPayload,
  UpdateSectionListPayload,
} from '../../../../redux/resume/types';
import { DraggableCustom } from '../../../ui/dragAndDrop/DraggableCustom';
import { DragDropWrapper } from '../../../ui/dragAndDrop/DragDropContextCustom';
import { SectionTitleEditable } from '../../../ui/text/sectionTitleEditable';

interface ILanguagesProps {
  languages: ILanguage[];
  sectionName: string;
  updateSectionItem: (
    payload: UpdateSectionItemPayload<LanguagesFields>,
  ) => void;
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
  updateSectionList: (payload: UpdateSectionListPayload) => void;
}

export const Languages: React.FC<ILanguagesProps> = ({
  languages,
  sectionName,
  updateSectionItem,
  addSectionItem,
  deleteSectionItem,
  updateSectionList,
}) => {
  const handleAddItem = () => {
    addSectionItem({ field: 'languages' });
  };

  const handleDeleteItem = (id: string) => {
    deleteSectionItem({ id, field: 'languages' });
  };

  return (
    <Box mb={4}>
      <SectionTitleEditable sectionValue={sectionName} section="languages" />
      <DragDropWrapper
        list={languages}
        listName="languages"
        droppableId="languages-dnd"
        updateSectionList={updateSectionList}
      >
        {languages.map((item, idx) => (
          <DraggableCustom key={item.id} draggableId={item.id} index={idx}>
            <LanguageItem
              language={item}
              updateSectionItem={updateSectionItem}
              handleDeleteItem={() => handleDeleteItem(item.id)}
            />
          </DraggableCustom>
        ))}
      </DragDropWrapper>
      <AddMoreBtn
        text="language"
        addFirst={!languages.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
