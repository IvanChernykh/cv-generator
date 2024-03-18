import React from 'react';
import { IEducation } from '../../../../utils/types/resume';
import {
  LeftItemContainer,
  LeftItemSubtitle,
  LeftItemTitle,
  SectionContainer,
  LeftSectionTitle,
} from '../../../ui/pdf/pdf';
import { combineWordsWithComma } from '../../../../utils/helpers/combineWordsWithComma';
import { deltaToJsx } from '../../../../utils/helpers/parseDelta';

interface IEducationProps {
  education: IEducation[];
}

export const Education: React.FC<IEducationProps> = ({ education }) => {
  return (
    <SectionContainer>
      <LeftSectionTitle>Education</LeftSectionTitle>
      {education.map(
        ({ id, school, degree, city, startEndDate, descriptionDelta }, idx) => (
          <LeftItemContainer key={`${id}-${idx}`}>
            <LeftItemTitle>
              {combineWordsWithComma(degree, school, city)}
            </LeftItemTitle>
            <LeftItemSubtitle>{startEndDate}</LeftItemSubtitle>
            {deltaToJsx(descriptionDelta)}
          </LeftItemContainer>
        ),
      )}
    </SectionContainer>
  );
};
