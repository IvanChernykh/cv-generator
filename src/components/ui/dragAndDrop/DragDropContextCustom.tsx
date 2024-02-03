import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { handleDragEndSectionItem } from '../../../utils/helpers/dragAndDrop';
import {
  SectionsWithLists,
  UpdateSectionListPayload,
} from '../../../redux/resume/types';
import { IResume } from '../../../utils/types/resume';
import { DroppableCustom } from './DroppableCustom';

interface IDragDropContextCustomProps extends React.PropsWithChildren {
  droppableId: string;
  listName: SectionsWithLists;
  list: IResume[SectionsWithLists];
  updateSectionList: (payload: UpdateSectionListPayload) => void;
}

export const DragDropWrapper: React.FC<IDragDropContextCustomProps> = ({
  children,
  listName,
  list,
  droppableId,
  updateSectionList,
}) => {
  return (
    <DragDropContext
      onDragEnd={(result) =>
        handleDragEndSectionItem(result, listName, list, updateSectionList)
      }
    >
      <DroppableCustom droppableId={droppableId}>{children}</DroppableCustom>
    </DragDropContext>
  );
};
