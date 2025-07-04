import React from 'react';
import { ISkill } from '../../../../utils/types/resume';
import {
  RightItemWithLevel,
  RightSectionTitle,
  SectionContainer,
} from '../../../ui/pdf/pdf';

interface ISkillsProps {
  skills: ISkill[];
  sectionName: string;
}

export const Skills: React.FC<ISkillsProps> = ({ skills, sectionName }) => {
  return (
    <SectionContainer>
      <RightSectionTitle>{sectionName}</RightSectionTitle>
      {skills.map(({ id, title, level }, idx) => (
        <RightItemWithLevel
          key={`${id}-${idx}`}
          title={title}
          levelInPercent={level === 99 ? 100 : level}
        />
      ))}
    </SectionContainer>
  );
};
