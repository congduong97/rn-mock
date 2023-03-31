import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SCREEN_WIDTH} from '../utils';
import {MARGIN} from '../utils/styles';

export interface SocialBtnProps {
  icon: React.ReactNode;
  onPress: () => void;
}

const SocialBtn = ({icon, onPress}: SocialBtnProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GRAY_100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2 * MARGIN,
    width: (SCREEN_WIDTH - 5 * MARGIN) / 2,
    height: (SCREEN_WIDTH - 5 * MARGIN) / 4,
  },
});

export default SocialBtn;
