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
  EducationFields,
  UpdateSectionItemPayload,
  UpdateSectionListPayload,
} from '../../../../redux/resume/types';
import { DraggableCustom } from '../../../ui/dragAndDrop/DraggableCustom';
import { DragDropWrapper } from '../../../ui/dragAndDrop/DragDropContextCustom';

interface IEducationProps {
  education: IEducation[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
  updateSectionItem: (
    payload: UpdateSectionItemPayload<EducationFields>,
  ) => void;
  updateSectionList: (payload: UpdateSectionListPayload) => void;
}

export const Education: React.FC<IEducationProps> = ({
  education,
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
}) => {
  const handleAddItem = () => {
    addSectionItem({ field: 'education' });
  };

  const handleDeleteItem = (id: string) => {
    deleteSectionItem({ id, field: 'education' });
  };

  const handleUpdateItem = (
    id: string,
    value: string,
    field: EducationFields,
  ) => {
    updateSectionItem({
      id,
      value,
      field,
      list: 'education',
    });
  };

  return (
    <Box mb={4}>
      <SectionTitle>Education</SectionTitle>
      <SectionSubTitle>Describe your education.</SectionSubTitle>
      <DragDropWrapper
        list={education}
        listName="education"
        droppableId="education-dnd"
        updateSectionList={updateSectionList}
      >
        {education.map(
          ({ id, description, city, school, degree, startEndDate }, idx) => (
            <DraggableCustom key={id} draggableId={id} index={idx}>
              <BackgroundDescription
                id={id}
                type="education"
                inputLabelOne="School"
                inputLabelTwo="Degree"
                inputOne={school}
                inputTwo={degree}
                description={description}
                city={city}
                startEndDate={startEndDate}
                handleDeleteItem={() => handleDeleteItem(id)}
                updateStartEndDate={(value: string) => {
                  handleUpdateItem(id, value, 'startEndDate');
                }}
                updateDescription={(value: string) => {
                  handleUpdateItem(id, value, 'description');
                }}
                updateCity={(value: string) => {
                  handleUpdateItem(id, value, 'city');
                }}
                updateInputOne={(value: string) => {
                  handleUpdateItem(id, value, 'school');
                }}
                updateInputTwo={(value: string) => {
                  handleUpdateItem(id, value, 'degree');
                }}
              />
            </DraggableCustom>
          ),
        )}
      </DragDropWrapper>

      <AddMoreBtn
        text="education"
        addFirst={!education.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
