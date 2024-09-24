import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: '#212529',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
  },

  linearContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  }
});

export default styles;