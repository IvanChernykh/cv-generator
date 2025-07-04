import React from 'react';
import { ICourse } from '../../../../utils/types/resume';
import {
  LeftItemContainer,
  LeftItemSubtitle,
  LeftItemTitle,
  SectionContainer,
  LeftSectionTitle,
} from '../../../ui/pdf/pdf';
import { combineWordsWithComma } from '../../../../utils/helpers/combineWordsWithComma';

interface ICoursesProps {
  courses: ICourse[];
  sectionName: string;
}

export const Courses: React.FC<ICoursesProps> = ({ courses, sectionName }) => {
  return (
    <SectionContainer>
      <LeftSectionTitle>{sectionName}</LeftSectionTitle>
      {courses.map(({ id, course, institution, startEndDate }, idx) => (
        <LeftItemContainer key={`${id}-${idx}`}>
          <LeftItemTitle>
            {combineWordsWithComma(course, institution)}
          </LeftItemTitle>
          <LeftItemSubtitle>{startEndDate}</LeftItemSubtitle>
        </LeftItemContainer>
      ))}
    </SectionContainer>
  );
};
