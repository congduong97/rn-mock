import {View, TextInput, TextInputProps, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZE} from '../utils';
import {MARGIN} from '../utils/styles';

export interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
}

const Input = (props: InputProps) => {
  const {icon, ...rest} = props;
  return (
    <View style={styles.container}>
      {icon}
      <TextInput
        style={styles.input}
        {...rest}
        placeholderTextColor={COLORS.GRAY_400}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GRAY_100,
    paddingVertical: SIZE.widthPixel(16),
    paddingHorizontal: SIZE.widthPixel(12),
    borderRadius: SIZE.widthPixel(8),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZE.heightPixel(24),
  },
  input: {
    fontSize: SIZE.fontPixel(18),
    marginLeft: MARGIN,
  },
});
export default Input;
