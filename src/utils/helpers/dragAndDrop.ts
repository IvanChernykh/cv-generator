import { DropResult } from 'react-beautiful-dnd';
import { moveItem } from './array';
import { IResume } from '../types/resume';
import {
  SectionsWithLists,
  UpdateSectionListPayload,
} from '../../redux/resume/types';

export const handleDragEndSectionItem = (
  result: DropResult,
  listName: SectionsWithLists,
  arrayList: IResume[SectionsWithLists],
  updateSectionList: (payload: UpdateSectionListPayload) => void,
) => {
  const source = result.source.index;
  const target = result.destination?.index;

  updateSectionList({
    listName,
    value: moveItem<(typeof arrayList)[0]>(
      arrayList,
      source,
      target ?? source,
    ) as IResume[SectionsWithLists],
  });
};
