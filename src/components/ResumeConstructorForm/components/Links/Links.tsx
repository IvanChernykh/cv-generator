import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { LinkItem } from './LinkItem';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { ILink } from '../../../../utils/types/resume';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
  LinksFields,
  UpdateSectionItemPayload,
} from '../../../../redux/resume/types';

interface ILinksProps {
  links: ILink[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
  updateSectionItem: (payload: UpdateSectionItemPayload<LinksFields>) => void;
}

export const Links: React.FC<ILinksProps> = ({
  links,
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
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
      {links.map((item) => (
        <LinkItem
          key={item.id}
          linkItem={item}
          updateSectionItem={updateSectionItem}
          handleDeleteItem={() => handleDeleteItem(item.id)}
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
