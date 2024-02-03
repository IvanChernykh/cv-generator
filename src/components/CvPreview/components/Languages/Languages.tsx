import React from 'react';
import { ILanguage } from '../../../../utils/types/resume';
import {
  RightItemWithLevel,
  RightSectionTitle,
  SectionContainer,
} from '../../../ui/pdf/pdf';

interface ILanguagesProps {
  languages: ILanguage[];
}

const getLevelInPercent = (level: string) => {
  switch (level) {
    case 'A1':
      return 17;
    case 'A2':
      return 35;
    case 'B1':
      return 55;
    case 'B2':
      return 70;
    case 'C1':
      return 90;
    case 'C2':
      return 100;
    default:
      return 0;
  }
};

export const Languages: React.FC<ILanguagesProps> = ({ languages }) => {
  return (
    <SectionContainer>
      <RightSectionTitle>Languages</RightSectionTitle>
      {languages.map(({ id, title, level }, idx) => {
        return (
          <RightItemWithLevel
            key={`${id}-${idx}`}
            title={title}
            levelInPercent={getLevelInPercent(level)}
          />
        );
      })}
    </SectionContainer>
  );
};
