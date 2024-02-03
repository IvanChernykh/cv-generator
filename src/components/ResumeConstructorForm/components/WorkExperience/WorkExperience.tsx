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
  UpdateSectionItemPayload,
  UpdateSectionListPayload,
  WorkExperienceFields,
} from '../../../../redux/resume/types';
import { DragDropWrapper } from '../../../ui/dragAndDrop/DragDropContextCustom';
import { DraggableCustom } from '../../../ui/dragAndDrop/DraggableCustom';

interface IWorkExperienceProps {
  workExpeprience: IWorkExperience[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
  updateSectionItem: (
    payload: UpdateSectionItemPayload<WorkExperienceFields>,
  ) => void;
  updateSectionList: (payload: UpdateSectionListPayload) => void;
}

export const WorkExperience: React.FC<IWorkExperienceProps> = ({
  workExpeprience,
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
}) => {
  const handleAddItem = () => {
    addSectionItem({ field: 'workExpeprience' });
  };

  const handleDeleteItem = (id: string) => {
    deleteSectionItem({ id, field: 'workExpeprience' });
  };

  const handleUpdateItem = (
    id: string,
    value: string,
    field: WorkExperienceFields,
  ) => {
    updateSectionItem({
      id,
      value,
      field,
      list: 'workExpeprience',
    });
  };

  return (
    <Box mb={4}>
      <SectionTitle>Work Experience</SectionTitle>
      <SectionSubTitle>
        Show your relevant experience (last 10 years).
      </SectionSubTitle>
      <DragDropWrapper
        list={workExpeprience}
        listName="workExpeprience"
        droppableId="workExpeprience-dnd"
        updateSectionList={updateSectionList}
      >
        {workExpeprience.map(
          (
            { id, description, city, jobTitle, employer, startEndDate },
            idx,
          ) => (
            <DraggableCustom key={id} draggableId={id} index={idx}>
              <BackgroundDescription
                id={id}
                type="workExpeprience"
                inputLabelOne="Job Title"
                inputLabelTwo="Employer"
                description={description}
                city={city}
                inputOne={jobTitle}
                inputTwo={employer}
                startEndDate={startEndDate}
                handleDeleteItem={() => handleDeleteItem(id)}
                updateDescription={(value: string) => {
                  handleUpdateItem(id, value, 'description');
                }}
                updateStartEndDate={(value: string) => {
                  handleUpdateItem(id, value, 'startEndDate');
                }}
                updateCity={(value: string) => {
                  handleUpdateItem(id, value, 'city');
                }}
                updateInputOne={(value: string) => {
                  handleUpdateItem(id, value, 'jobTitle');
                }}
                updateInputTwo={(value: string) => {
                  handleUpdateItem(id, value, 'employer');
                }}
              />
            </DraggableCustom>
          ),
        )}
      </DragDropWrapper>

      <AddMoreBtn
        text="employment"
        addFirst={!workExpeprience.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
