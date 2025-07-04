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
  sectionName: string;
}

export const Details: React.FC<IDetailsProps> = ({ details, sectionName }) => {
  const { city, country, phone, email } = details;

  if (![city, country, phone, email].filter(Boolean).length) {
    return null;
  }

  return (
    <SectionContainer>
      <RightSectionTitle>{sectionName}</RightSectionTitle>
      <ItemText>{city}</ItemText>
      <ItemText>{country}</ItemText>
      <ItemText>{phone}</ItemText>
      <LinkCustom src={email} isEmail>
        {email}
      </LinkCustom>
    </SectionContainer>
  );
};
