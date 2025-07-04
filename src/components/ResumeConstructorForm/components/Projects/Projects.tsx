import React from 'react';
import { Box } from '@mui/material';
import { SectionSubTitle } from '../../../ui/text/sectionSubTitle';
import { IProject } from '../../../../utils/types/resume';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
  ProjectsFields,
  UpdateSectionItemPayload,
  UpdateSectionListPayload,
} from '../../../../redux/resume/types';
import { ProjectItem } from './ProjectItem';
import { DragDropWrapper } from '../../../ui/dragAndDrop/DragDropContextCustom';
import { DraggableCustom } from '../../../ui/dragAndDrop/DraggableCustom';
import { SectionTitleEditable } from '../../../ui/text/sectionTitleEditable';

interface IProjectsProps {
  projects: IProject[];
  sectionName: string;
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
  updateSectionItem: (
    payload: UpdateSectionItemPayload<ProjectsFields>,
  ) => void;
  updateSectionList: (payload: UpdateSectionListPayload) => void;
}

export const Projects: React.FC<IProjectsProps> = ({
  projects,
  sectionName,
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
}) => {
  const handleAddItem = () => {
    addSectionItem({ field: 'projects' });
  };

  const handleDeleteItem = (id: string) => {
    deleteSectionItem({ id, field: 'projects' });
  };

  const handleUpdateItem = (
    id: string,
    value: string,
    field: ProjectsFields,
  ) => {
    updateSectionItem({
      id,
      value,
      field,
      list: 'projects',
    });
  };

  return (
    <Box mb={4}>
      <SectionTitleEditable sectionValue={sectionName} section="projects" />
      <SectionSubTitle>Show your personal projects.</SectionSubTitle>
      <DragDropWrapper
        list={projects}
        listName="projects"
        droppableId="projects-dnd"
        updateSectionList={updateSectionList}
      >
        {projects.map(({ id, title, link, description, linkToRepo }, idx) => (
          <DraggableCustom key={id} draggableId={id} index={idx}>
            <ProjectItem
              id={id}
              handleDeleteItem={() => handleDeleteItem(id)}
              title={title}
              link={link}
              linkToRepo={linkToRepo}
              desc={description}
              handleUpdateItem={handleUpdateItem}
            />
          </DraggableCustom>
        ))}
      </DragDropWrapper>

      <AddMoreBtn
        text="project"
        addFirst={!projects.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
