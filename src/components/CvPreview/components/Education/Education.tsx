import React from 'react';
import { IEducation } from '../../../../utils/types/resume';
import {
  ItemText,
  LeftItemContainer,
  LeftItemSubtitle,
  LeftItemTitle,
  SectionContainer,
  LeftSectionTitle,
} from '../../../ui/pdf/pdf';
import { combineWordsWithComma } from '../../../../utils/helpers/combineWordsWithComma';

interface IEducationProps {
  education: IEducation[];
}

export const Education: React.FC<IEducationProps> = ({ education }) => {
  return (
    <SectionContainer>
      <LeftSectionTitle>Education</LeftSectionTitle>
      {education.map(
        ({ id, school, degree, city, startEndDate, description }) => (
          <LeftItemContainer key={id}>
            <LeftItemTitle>
              {combineWordsWithComma(degree, school, city)}
            </LeftItemTitle>
            <LeftItemSubtitle>{startEndDate}</LeftItemSubtitle>
            <ItemText>{description}</ItemText>
          </LeftItemContainer>
        ),
      )}
    </SectionContainer>
  );
};
