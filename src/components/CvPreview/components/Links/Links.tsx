import React from 'react';
import { ILink } from '../../../../utils/types/resume';
import {
  LinkCustom,
  RightSectionTitle,
  SectionContainer,
} from '../../../ui/pdf/pdf';

interface ILinksProps {
  links: ILink[];
  sectionName: string;
}

export const Links: React.FC<ILinksProps> = ({ links, sectionName }) => {
  return (
    <SectionContainer>
      <RightSectionTitle>{sectionName}</RightSectionTitle>
      {links.map(({ id, title, link }, idx) => (
        <LinkCustom key={`${id}-${idx}`} src={link}>
          {title}
        </LinkCustom>
      ))}
    </SectionContainer>
  );
};
