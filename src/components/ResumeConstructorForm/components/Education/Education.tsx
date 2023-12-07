import React, { useState } from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { uid } from '../../../../helpers/generateId';
import { BackgroundDescription } from '../BackgroundDescription/BackgroundDescription';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { SectionSubTitle } from '../../../ui/text/sectionSubTitle';

type EducationType = { id: string };

export const Education: React.FC = () => {
  const [educationList, setEducationList] = useState<EducationType[]>([]);

  const handleAddItem = () => {
    setEducationList([...educationList, { id: uid() }]);
  };

  const handleDeleteItem = (id: string) => {
    setEducationList(educationList.filter((item) => item.id !== id));
  };

  return (
    <Box mb={4}>
      <SectionTitle>Education</SectionTitle>
      <SectionSubTitle>Describe your education.</SectionSubTitle>
      {educationList.map(({ id }) => (
        <BackgroundDescription
          key={id}
          id={id}
          type="education"
          inputLabelOne="School"
          inputLabelTwo="Degree"
          handleDeleteItem={() => handleDeleteItem(id)}
        />
      ))}
      <AddMoreBtn
        text="education"
        addFirst={!educationList.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
