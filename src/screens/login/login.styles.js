import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
  },
  avoidingView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: '#495057',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 35,
  },
  input: {
    fontSize: 18,
    height: 50,
    fontWeight: '400',
    lineHeight: 21.09,
    borderRadius: 26,
    borderColor: '#868E96',
    marginBottom: 30,
    borderWidth: 1,
    paddingLeft: 15
  },

  closeButton: {
    position: 'absolute',
    right: 30,
    top: 20,
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    justifyContent: 'center',
    alignContent: 'center',
  }
});

export default styles;