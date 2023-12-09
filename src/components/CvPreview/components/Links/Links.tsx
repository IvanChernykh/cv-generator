import React from 'react';
import { ILink } from '../../../../utils/types/resume';
import {
  LinkCustom,
  RightSectionTitle,
  SectionContainer,
} from '../../../ui/pdf/pdf';

interface ILinksProps {
  links: ILink[];
}

export const Links: React.FC<ILinksProps> = ({ links }) => {
  return (
    <SectionContainer>
      <RightSectionTitle>Links</RightSectionTitle>
      {links.map(({ id, title, link }) => (
        <LinkCustom key={id} src={link}>
          {title}
        </LinkCustom>
      ))}
    </SectionContainer>
  );
};
