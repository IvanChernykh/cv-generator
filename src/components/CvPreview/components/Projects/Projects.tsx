import React from 'react';
import { IProject } from '../../../../utils/types/resume';
import {
  ItemText,
  LeftItemContainer,
  LeftItemTitle,
  SectionContainer,
  LeftSectionTitle,
  LinkCustom,
} from '../../../ui/pdf/pdf';

interface IEmploymentHistoryProps {
  projects: IProject[];
}

export const Projects: React.FC<IEmploymentHistoryProps> = ({ projects }) => {
  return (
    <SectionContainer>
      <LeftSectionTitle>Projects</LeftSectionTitle>
      {projects.map(({ id, title, link, description }) => (
        <LeftItemContainer key={id}>
          <LeftItemTitle>{title}</LeftItemTitle>
          {link && <LinkCustom src={link}>Project link</LinkCustom>}
          <ItemText>{description}</ItemText>
        </LeftItemContainer>
      ))}
    </SectionContainer>
  );
};
