import React from 'react';
import { IDetails } from '../../../../utils/types/resume';
import {
  ItemText,
  LinkCustom,
  RightSectionTitle,
  SectionContainer,
} from '../../../ui/pdf/pdf';

interface IDetailsProps {
  details: IDetails;
}

export const Details: React.FC<IDetailsProps> = ({ details }) => {
  const { city, country, phone, email } = details;

  return (
    <SectionContainer>
      <RightSectionTitle>Details</RightSectionTitle>
      {city && <ItemText>{city}</ItemText>}
      {country && <ItemText>{country}</ItemText>}
      {phone && <ItemText>{phone}</ItemText>}
      {email && (
        <LinkCustom src={email} isEmail>
          {email}
        </LinkCustom>
      )}
    </SectionContainer>
  );
};
