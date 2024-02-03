import React from 'react';
import { IProject } from '../../../../utils/types/resume';
import {
  ItemText,
  LeftItemContainer,
  LeftItemTitle,
  SectionContainer,
  LeftSectionTitle,
  LinkCustom,
} from '../../../ui/pdf/pdf';
import { Text, View } from '@react-pdf/renderer';

interface IEmploymentHistoryProps {
  projects: IProject[];
}

export const Projects: React.FC<IEmploymentHistoryProps> = ({ projects }) => {
  return (
    <SectionContainer>
      <LeftSectionTitle>Projects</LeftSectionTitle>
      {projects.map(({ id, title, link, description, linkToRepo }, idx) => (
        <LeftItemContainer key={`${id}-${idx}`}>
          <LeftItemTitle>{title}</LeftItemTitle>
          <View
            style={{ display: 'flex', flexDirection: 'row', marginBottom: 5 }}
          >
            <View>
              {link && (
                <View style={{ marginRight: 10 }}>
                  <LinkCustom src={link}>Project</LinkCustom>
                </View>
              )}
            </View>
            {link && linkToRepo && (
              <View style={{ marginRight: 10 }}>
                <Text style={{ fontSize: 11 }}>|</Text>
              </View>
            )}
            <View>
              {linkToRepo && (
                <LinkCustom src={linkToRepo}>Repository</LinkCustom>
              )}
            </View>
          </View>
          <ItemText>{description}</ItemText>
        </LeftItemContainer>
      ))}
    </SectionContainer>
  );
};
