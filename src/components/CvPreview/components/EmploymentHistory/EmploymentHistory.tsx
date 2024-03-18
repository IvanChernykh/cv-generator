import React from 'react';
import { IWorkExperience } from '../../../../utils/types/resume';
import {
  LeftItemContainer,
  LeftItemSubtitle,
  LeftItemTitle,
  SectionContainer,
  LeftSectionTitle,
} from '../../../ui/pdf/pdf';
import { getItemTitle } from '../../../ResumeConstructorForm/components/BackgroundDescription/BackgroundDescription';
import { deltaToJsx } from '../../../../utils/helpers/parseDelta';

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
        (
          { id, jobTitle, employer, city, startEndDate, descriptionDelta },
          idx,
        ) => (
          <LeftItemContainer key={`${id}-${idx}`}>
            <LeftItemTitle>
              {getItemTitle(jobTitle, employer)}
              {city && `, ${city}`}
            </LeftItemTitle>
            <LeftItemSubtitle>{startEndDate}</LeftItemSubtitle>
            {deltaToJsx(descriptionDelta)}
          </LeftItemContainer>
        ),
      )}
    </SectionContainer>
  );
};
