import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  size?: number;
  color?: string;
};
const IonIcon: React.FC<Props> = ({name, size = 20, color = 'black'}) => {
  return <Icon name={name} size={size} color={color} />;
};

export default IonIcon;
