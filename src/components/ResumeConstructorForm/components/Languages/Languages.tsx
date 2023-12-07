import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { LanguageItem } from './LanguageItem';
import { ILanguage } from '../../../../utils/types/resume';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
} from '../../../../redux/resume/types';

interface ILanguagesProps {
  languages: ILanguage[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
}

export const Languages: React.FC<ILanguagesProps> = ({
  languages,
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
      {languages.map(({ id }) => (
        <LanguageItem
          key={id}
          id={id}
          handleDeleteItem={() => handleDeleteItem(id)}
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
