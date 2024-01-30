import React from 'react';
import { View, Image, Text, StyleSheet } from '@react-pdf/renderer';
import { IDetails } from '../../../../utils/types/resume';
import { Colors } from '../../../../utils/constants/colors';

interface IHeaderProps {
  details: IDetails;
  photoUrl: string | null;
}

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: 5,
    marginRight: 15,
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: { fontWeight: 600 },
  subtitle: {
    fontSize: 11,
    color: Colors.grayTextDark,
  },
});

export const Header: React.FC<IHeaderProps> = ({ details, photoUrl }) => {
  return (
    <View style={styles.section}>
      {photoUrl && <Image src={photoUrl} style={styles.image} />}
      <View style={styles.textBlock}>
        <Text style={styles.title}>
          {details.firstName} {details.lastName}
        </Text>
        <Text style={styles.subtitle}>{details.jobTitle}</Text>
      </View>
    </View>
  );
};
