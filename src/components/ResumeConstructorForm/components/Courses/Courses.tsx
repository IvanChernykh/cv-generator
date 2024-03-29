import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { BackgroundDescription } from '../BackgroundDescription/BackgroundDescription';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { ICourse } from '../../../../utils/types/resume';
import {
  AddSectionItemPayload,
  CoursesFields,
  DeleteSectionItemPayload,
  UpdateSectionItemPayload,
  UpdateSectionListPayload,
} from '../../../../redux/resume/types';
import { DraggableCustom } from '../../../ui/dragAndDrop/DraggableCustom';
import { DragDropWrapper } from '../../../ui/dragAndDrop/DragDropContextCustom';

interface ICoursesProps {
  courses: ICourse[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
  updateSectionItem: (payload: UpdateSectionItemPayload<CoursesFields>) => void;
  updateSectionList: (payload: UpdateSectionListPayload) => void;
}

export const Courses: React.FC<ICoursesProps> = ({
  courses,
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
}) => {
  const handleAddItem = () => {
    addSectionItem({ field: 'courses' });
  };

  const handleDeleteItem = (id: string) => {
    deleteSectionItem({ id, field: 'courses' });
  };

  const handleUpdateItem = (
    id: string,
    value: string,
    field: CoursesFields,
  ) => {
    updateSectionItem({
      id,
      value,
      field,
      list: 'courses',
    });
  };

  return (
    <Box mb={4}>
      <SectionTitle>Courses</SectionTitle>
      <DragDropWrapper
        list={courses}
        listName="courses"
        droppableId="courses-dnd"
        updateSectionList={updateSectionList}
      >
        {courses.map(({ id, course, institution, startEndDate }, idx) => (
          <DraggableCustom key={id} draggableId={id} index={idx}>
            <BackgroundDescription
              id={id}
              type="course"
              inputLabelOne="Course"
              inputLabelTwo="Institution"
              inputOne={course}
              inputTwo={institution}
              startEndDate={startEndDate}
              handleDeleteItem={() => handleDeleteItem(id)}
              updateStartEndDate={(value: string) => {
                handleUpdateItem(id, value, 'startEndDate');
              }}
              updateInputOne={(value: string) => {
                handleUpdateItem(id, value, 'course');
              }}
              updateInputTwo={(value: string) => {
                handleUpdateItem(id, value, 'institution');
              }}
            />
          </DraggableCustom>
        ))}
      </DragDropWrapper>
      <AddMoreBtn
        text="Course"
        addFirst={!courses.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
