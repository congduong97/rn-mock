import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZE} from '../utils';
import {MARGIN} from '../utils/styles';

export interface PrimaryBtnProps {
  icon?: React.ReactNode;
  onPress: () => void;
  title: string;
}

const PrimaryBtn = ({icon, onPress, title}: PrimaryBtnProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <Text style={[styles.title, {marginLeft: icon ? MARGIN : undefined}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN,
    borderRadius: MARGIN,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZE.widthPixel(50),
    marginHorizontal: 2 * MARGIN,
  },
  title: {
    fontSize: SIZE.widthPixel(16),
    color: COLORS.WHITE,
    fontWeight: '500',
  },
});

export default PrimaryBtn;
