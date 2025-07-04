import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { LinkItem } from './LinkItem';
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
import { SectionTitleEditable } from '../../../ui/text/sectionTitleEditable';

interface ILinksProps {
  links: ILink[];
  sectionName: string;
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
  updateSectionItem: (payload: UpdateSectionItemPayload<LinksFields>) => void;
  updateSectionList: (payload: UpdateSectionListPayload) => void;
}

export const Links: React.FC<ILinksProps> = ({
  links,
  sectionName,
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
      <SectionTitleEditable sectionValue={sectionName} section="links" />
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
