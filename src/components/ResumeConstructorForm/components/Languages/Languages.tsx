import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { LanguageItem } from './LanguageItem';
import { ILanguage } from '../../../../utils/types/resume';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
  LanguagesFields,
  UpdateSectionItemPayload,
} from '../../../../redux/resume/types';

interface ILanguagesProps {
  languages: ILanguage[];
  updateSectionItem: (
    payload: UpdateSectionItemPayload<LanguagesFields>,
  ) => void;
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
}

export const Languages: React.FC<ILanguagesProps> = ({
  languages,
  updateSectionItem,
  addSectionItem,
  deleteSectionItem,
}) => {
  const handleAddItem = () => {
    addSectionItem({ field: 'languages' });
  };

  const handleDeleteItem = (id: string) => {
    deleteSectionItem({ id, field: 'languages' });
  };

  return (
    <Box mb={4}>
      <SectionTitle>Languages</SectionTitle>
      {languages.map((item) => (
        <LanguageItem
          key={item.id}
          language={item}
          updateSectionItem={updateSectionItem}
          handleDeleteItem={() => handleDeleteItem(item.id)}
        />
      ))}
      <AddMoreBtn
        text="language"
        addFirst={!languages.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
