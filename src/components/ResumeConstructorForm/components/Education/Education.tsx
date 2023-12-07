import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { BackgroundDescription } from '../BackgroundDescription/BackgroundDescription';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { SectionSubTitle } from '../../../ui/text/sectionSubTitle';
import { IEducation } from '../../../../utils/types/resume';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
} from '../../../../redux/resume/types';

interface IEducationProps {
  education: IEducation[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
}

export const Education: React.FC<IEducationProps> = ({
  education,
  addSectionItem,
  deleteSectionItem,
}) => {
  const handleAddItem = () => {
    addSectionItem({ field: 'education' });
  };

  const handleDeleteItem = (id: string) => {
    deleteSectionItem({ id, field: 'education' });
  };

  return (
    <Box mb={4}>
      <SectionTitle>Education</SectionTitle>
      <SectionSubTitle>Describe your education.</SectionSubTitle>
      {education.map(({ id }) => (
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
        addFirst={!education.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
