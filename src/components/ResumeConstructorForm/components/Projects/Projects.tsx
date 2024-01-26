import React from 'react';
import { Box } from '@mui/material';
import { SectionTitle } from '../../../ui/text/sectionTitle';
import { SectionSubTitle } from '../../../ui/text/sectionSubTitle';
import { IProject } from '../../../../utils/types/resume';
import { AddMoreBtn } from '../../../ui/addMoreBtn/addMoreBtn';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
  ProjectsFields,
  UpdateSectionItemPayload,
} from '../../../../redux/resume/types';
import { ProjectItem } from './ProjectItem';

interface IProjectsProps {
  projects: IProject[];
  addSectionItem: (payload: AddSectionItemPayload) => void;
  deleteSectionItem: (payload: DeleteSectionItemPayload) => void;
  updateSectionItem: (
    payload: UpdateSectionItemPayload<ProjectsFields>,
  ) => void;
}

export const Projects: React.FC<IProjectsProps> = ({
  projects,
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
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
      <SectionTitle>Projects</SectionTitle>
      <SectionSubTitle>Show your personal projects.</SectionSubTitle>
      {projects.map(({ id, title, link, description }) => (
        <ProjectItem
          key={id}
          id={id}
          handleDeleteItem={() => handleDeleteItem(id)}
          title={title}
          link={link}
          desc={description}
          handleUpdateItem={handleUpdateItem}
        />
      ))}
      <AddMoreBtn
        text="project"
        addFirst={!projects.length}
        onClick={handleAddItem}
      />
    </Box>
  );
};
