import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { BackgroundDescription } from '../BackgroundDescription/BackgroundDescription';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { ICourse } from '../../../../utils/types/resume';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
} from '../../../../redux/resume/types';

interface ICoursesProps {
  courses: ICourse[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
}

export const Courses: React.FC<ICoursesProps> = ({
  courses,
  addSectionItem,
  deleteSectionItem,
}) => {
  const handleAddItem = () => {
    addSectionItem({ field: 'courses' });
  };

  const handleDeleteItem = (id: string) => {
    deleteSectionItem({ id, field: 'courses' });
  };

  return (
    <Box mb={4}>
      <SectionTitle>Courses</SectionTitle>
      {courses.map(({ id }) => (
        <BackgroundDescription
          key={id}
          id={id}
          type="course"
          inputLabelOne="Course"
          inputLabelTwo="Institution"
          handleDeleteItem={() => handleDeleteItem(id)}
        />
      ))}
      <AddMoreBtn
        text="Course"
        addFirst={!courses.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
