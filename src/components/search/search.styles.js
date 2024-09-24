import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contaner: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#868E96',
    backgroundColor: '#FFFFFF',
    gap: 15,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    height: 50,
    borderBottomColor: '#495057',
    lineHeight: 21.09,
  },
  infoBox: {
    flex: 3,
    gap: 5,
  },
  imglogo: {
    width: 21,
    height: 21,
  },
});

export default styles;