import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./primary-button.styles";

const PrimaryButton = ({ children, onPress, style }) => (
  <TouchableOpacity
    style={[styles.container, style]}
    onPress={onPress}
  >
    <LinearGradient
      colors={['#FF922B', '#F76707']}
      style={styles.linearContainer}
    >
      {typeof children === 'string'
        ? <Text style={styles.text}>{children}</Text>
        : children
      }
    </LinearGradient>
  </TouchableOpacity>
);

export default PrimaryButton;