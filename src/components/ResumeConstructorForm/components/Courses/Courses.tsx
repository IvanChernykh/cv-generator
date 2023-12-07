import React, { useState } from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { uid } from '../../../../utils/helpers/generateId';
import { BackgroundDescription } from '../BackgroundDescription/BackgroundDescription';
import { SectionTitle } from '../../../ui/text/sectionTitle';

type Course = { id: string };

export const Courses: React.FC = () => {
  const [coursesList, setCoursesList] = useState<Course[]>([]);

  const handleAddItem = () => {
    setCoursesList([...coursesList, { id: uid() }]);
  };

  const handleDeleteItem = (id: string) => {
    setCoursesList(coursesList.filter((item) => item.id !== id));
  };

  return (
    <Box mb={4}>
      <SectionTitle>Courses</SectionTitle>
      {coursesList.map(({ id }) => (
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
        addFirst={!coursesList.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
