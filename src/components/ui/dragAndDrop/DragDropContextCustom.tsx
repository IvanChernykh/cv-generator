import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import {
  SectionsWithLists,
  UpdateSectionListPayload,
} from '../../../redux/resume/types';
import { IResume } from '../../../utils/types/resume';
import { DroppableCustom } from './DroppableCustom';
import { moveItem } from '../../../utils/helpers/array';

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
  const handleDragEnd = (result: DropResult) => {
    const source = result.source.index;
    const target = result.destination?.index;

    if (target !== undefined) {
      updateSectionList({
        listName,
        value: moveItem<(typeof list)[0]>(
          list,
          source,
          target,
        ) as IResume[SectionsWithLists],
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <DroppableCustom droppableId={droppableId}>{children}</DroppableCustom>
    </DragDropContext>
  );
};
