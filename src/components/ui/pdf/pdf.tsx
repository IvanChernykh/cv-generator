import React from 'react';
import { Text, StyleSheet, View, Link } from '@react-pdf/renderer';
import { Colors } from '../../../utils/constants/colors';

const stylesLeft = StyleSheet.create({
  sectionTitle: { fontSize: 14, marginBottom: 5, fontWeight: 600 },
  itemContainer: { marginBottom: 20 },
  itemTitle: { fontSize: 12, fontWeight: 600 },
  itemSubtitle: {
    fontSize: 10,
    marginBottom: 3,
    color: Colors.grayBgDark,
  },
});

const stylesRight = StyleSheet.create({
  sectionTitle: { fontSize: 14, marginBottom: 3, fontWeight: 500 },
  itemWithLevelContainer: { marginBottom: 10 },
  itemLevelBar: {
    width: '100%',
    height: 2,
    marginTop: 4,
    backgroundColor: Colors.grayBg,
    position: 'relative',
  },
  itemLevelBarInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: Colors.mainBlue,
  },
});

const stylesCommon = StyleSheet.create({
  sectionContainer: { marginBottom: 20 },
  itemText: { fontSize: 11 },
  link: { color: Colors.mainBlue, fontSize: 11, textDecoration: 'none' },
});

// left section
export const LeftSectionTitle: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Text style={stylesLeft.sectionTitle}>{children}</Text>;
};

export const LeftItemContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <View style={stylesLeft.itemContainer}>{children}</View>;
};

export const LeftItemTitle: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Text style={stylesLeft.itemTitle}>{children}</Text>;
};

export const LeftItemSubtitle: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Text style={stylesLeft.itemSubtitle}>{children}</Text>;
};

//right
export const RightSectionTitle: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Text style={stylesRight.sectionTitle}>{children}</Text>;
};

interface IRightItemWithLevelProps extends React.PropsWithChildren {
  title: string;
  levelInPercent: number;
}

export const RightItemWithLevel: React.FC<IRightItemWithLevelProps> = ({
  title,
  levelInPercent,
}) => {
  return (
    <View style={stylesRight.itemWithLevelContainer}>
      <ItemText>{title}</ItemText>
      {levelInPercent && (
        <View style={stylesRight.itemLevelBar}>
          <View
            style={{
              ...stylesRight.itemLevelBarInner,
              width: `${levelInPercent}%`,
            }}
          />
        </View>
      )}
    </View>
  );
};

// common
export const SectionContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <View style={stylesCommon.sectionContainer}>{children}</View>;
};

export const ItemText: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Text style={stylesCommon.itemText}>{children}</Text>;
};

interface ILinkCustomProps extends React.PropsWithChildren {
  src: string;
  isEmail?: boolean;
}

export const LinkCustom: React.FC<ILinkCustomProps> = ({
  src,
  isEmail,
  children,
}) => {
  return (
    <Link src={isEmail ? `mailto:${src}` : src} style={stylesCommon.link}>
      {children}
    </Link>
  );
};
