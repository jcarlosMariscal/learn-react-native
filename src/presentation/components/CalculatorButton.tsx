import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';

type Props = {
  label: string;
  color?: string;
  doubleSize?: boolean;
  colorText?: string;
  onPress: () => void;
};

const CalculatorButton: React.FC<Props> = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  colorText = colors.textPrimary,
  onPress,
}) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        width: doubleSize ? 140 : 60,
        opacity: pressed ? 0.8 : 1,
      })}
      onPress={onPress}>
      <Text
        style={{
          ...styles.buttonText,
          color: colorText,
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
