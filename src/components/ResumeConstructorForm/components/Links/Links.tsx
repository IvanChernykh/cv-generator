import React, { useState } from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { uid } from '../../../../helpers/generateId';
import { LinkItem } from './LinkItem';
import { SectionTitle } from '../../../ui/text/sectionTitle';

type Link = { id: string; label: string; link: string };

export const Links: React.FC = () => {
  const [linkList, setLinkList] = useState<Link[]>([]);

  const handleAddItem = () => {
    setLinkList([...linkList, { id: uid(), label: '', link: '' }]);
  };

  const handleDeleteItem = (id: string) => {
    setLinkList(linkList.filter((item) => item.id !== id));
  };

  return (
    <Box mb={4}>
      <SectionTitle>Social Links and websites</SectionTitle>
      {linkList.map(({ id }) => (
        <LinkItem
          key={id}
          id={id}
          handleDeleteItem={() => handleDeleteItem(id)}
        />
      ))}
      <AddMoreBtn
        text="link"
        addFirst={!linkList.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
