import React from 'react';
import { Box } from '@mui/material';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import { BackgroundDescription } from '../BackgroundDescription/BackgroundDescription';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { SectionSubTitle } from '../../../ui/text/sectionSubTitle';
import { IWorkExperience } from '../../../../utils/types/resume';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
} from '../../../../redux/resume/types';

interface IWorkExperienceProps {
  workExpeprience: IWorkExperience[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
}

export const WorkExperience: React.FC<IWorkExperienceProps> = ({
  workExpeprience,
  addSectionItem,
  deleteSectionItem,
}) => {
  const handleAddItem = () => {
    addSectionItem({ field: 'workExpeprience' });
  };

  const handleDeleteItem = (id: string) => {
    deleteSectionItem({ id, field: 'workExpeprience' });
  };

  return (
    <Box mb={4}>
      <SectionTitle>Work Experience</SectionTitle>
      <SectionSubTitle>
        Show your relevant experience (last 10 years).
      </SectionSubTitle>
      {workExpeprience.map(({ id }) => (
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
        addFirst={!workExpeprience.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
