import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

import styles from "./float-button.styles";

const Floatbutton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}>
    <LinearGradient
      colors={['#F76707', '#FF922B']}
      style={styles.linearContainer}
    >
      {children}
    </LinearGradient>
  </TouchableOpacity>
);

export default Floatbutton;
