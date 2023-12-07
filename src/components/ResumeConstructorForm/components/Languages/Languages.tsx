import React, { useState } from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { uid } from '../../../../helpers/generateId';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { LanguageItem } from './LanguageItem';

type Language = { id: string };

export const Languages: React.FC = () => {
  const [langList, setLangList] = useState<Language[]>([]);

  const handleAddItem = () => {
    setLangList([...langList, { id: uid() }]);
  };

  const handleDeleteItem = (id: string) => {
    setLangList(langList.filter((item) => item.id !== id));
  };

  return (
    <Box mb={4}>
      <SectionTitle>Languages</SectionTitle>
      {langList.map(({ id }) => (
        <LanguageItem
          key={id}
          id={id}
          handleDeleteItem={() => handleDeleteItem(id)}
        />
      ))}
      <AddMoreBtn
        text="language"
        addFirst={!langList.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
