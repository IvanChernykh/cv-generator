import React from 'react';
import { IWorkExperience } from '../../../../utils/types/resume';
import {
  ItemText,
  LeftItemContainer,
  LeftItemSubtitle,
  LeftItemTitle,
  SectionContainer,
  LeftSectionTitle,
} from '../../../ui/pdf/pdf';
import { getItemTitle } from '../../../ResumeConstructorForm/components/BackgroundDescription/BackgroundDescription';

interface IEmploymentHistoryProps {
  workExpeprience: IWorkExperience[];
}

export const EmploymentHistory: React.FC<IEmploymentHistoryProps> = ({
  workExpeprience,
}) => {
  return (
    <SectionContainer>
      <LeftSectionTitle>Employment History</LeftSectionTitle>
      {workExpeprience.map(
        ({ id, jobTitle, employer, city, startEndDate, description }) => (
          <LeftItemContainer key={id}>
            <LeftItemTitle>
              {getItemTitle(jobTitle, employer)}
              {city && `, ${city}`}
            </LeftItemTitle>
            {startEndDate && (
              <LeftItemSubtitle>{startEndDate}</LeftItemSubtitle>
            )}
            {description && <ItemText>{description}</ItemText>}
          </LeftItemContainer>
        ),
      )}
    </SectionContainer>
  );
};
