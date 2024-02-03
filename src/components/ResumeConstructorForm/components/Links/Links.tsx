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
  UpdateSectionListPayload,
} from '../../../../redux/resume/types';
import { DraggableCustom } from '../../../ui/dragAndDrop/DraggableCustom';
import { DragDropWrapper } from '../../../ui/dragAndDrop/DragDropContextCustom';

interface ILinksProps {
  links: ILink[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
  updateSectionItem: (payload: UpdateSectionItemPayload<LinksFields>) => void;
  updateSectionList: (payload: UpdateSectionListPayload) => void;
}

export const Links: React.FC<ILinksProps> = ({
  links,
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
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
      <DragDropWrapper
        list={links}
        listName="links"
        droppableId="links-dnd"
        updateSectionList={updateSectionList}
      >
        {links.map((item, idx) => (
          <DraggableCustom key={item.id} draggableId={item.id} index={idx}>
            <LinkItem
              linkItem={item}
              updateSectionItem={updateSectionItem}
              handleDeleteItem={() => handleDeleteItem(item.id)}
            />
          </DraggableCustom>
        ))}
      </DragDropWrapper>

      <AddMoreBtn
        text="link"
        addFirst={!links.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
