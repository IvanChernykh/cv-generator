import React, { useState } from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { uid } from '../../../../utils/helpers/generateId';
import { BackgroundDescription } from '../BackgroundDescription/BackgroundDescription';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { SectionSubTitle } from '../../../ui/text/sectionSubTitle';

type Experience = { id: string };

export const WorkExperience: React.FC = () => {
  const [experienceList, setExperienceList] = useState<Experience[]>([]);

  const handleAddItem = () => {
    setExperienceList([...experienceList, { id: uid() }]);
  };

  const handleDeleteItem = (id: string) => {
    setExperienceList(experienceList.filter((item) => item.id !== id));
  };

  return (
    <Box mb={4}>
      <SectionTitle>Work Experience</SectionTitle>
      <SectionSubTitle>
        Show your relevant experience (last 10 years).
      </SectionSubTitle>
      {experienceList.map(({ id }) => (
        <BackgroundDescription
          key={id}
          id={id}
          type="workExpeprience"
          inputLabelOne="Job Title"
          inputLabelTwo="Employer"
          handleDeleteItem={() => handleDeleteItem(id)}
        />
      ))}
      <AddMoreBtn
        text="employment"
        addFirst={!experienceList.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
