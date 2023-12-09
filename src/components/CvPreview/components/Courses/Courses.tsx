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
}

export const Courses: React.FC<ICoursesProps> = ({ courses }) => {
  return (
    <SectionContainer>
      <LeftSectionTitle>Courses</LeftSectionTitle>
      {courses.map(({ id, course, institution, startEndDate }) => (
        <LeftItemContainer key={id}>
          <LeftItemTitle>
            {combineWordsWithComma(course, institution)}
          </LeftItemTitle>
          <LeftItemSubtitle>{startEndDate}</LeftItemSubtitle>
        </LeftItemContainer>
      ))}
    </SectionContainer>
  );
};
