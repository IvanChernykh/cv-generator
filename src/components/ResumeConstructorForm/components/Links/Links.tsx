import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { LinkItem } from './LinkItem';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { ILink } from '../../../../utils/types/resume';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
} from '../../../../redux/resume/types';

interface ILinksProps {
  links: ILink[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
}

export const Links: React.FC<ILinksProps> = ({
  links,
  addSectionItem,
  deleteSectionItem,
}) => {
  const handleAddItem = () => {
    addSectionItem({ field: 'links' });
  };

  const handleDeleteItem = (id: string) => {
    deleteSectionItem({ id, field: 'links' });
  };

  return (
    <Box mb={4}>
      <SectionTitle>Social Links and websites</SectionTitle>
      {links.map(({ id }) => (
        <LinkItem
          key={id}
          id={id}
          handleDeleteItem={() => handleDeleteItem(id)}
        />
      ))}
      <AddMoreBtn
        text="link"
        addFirst={!links.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
