import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contaner: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 20,
    height: 100,
    gap: 15,
    borderRadius: 15,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: '#CED4DA',
  },
  image: {
    flex: 1.2,
    resizeMode: 'cover',
    borderRadius: 50,
    background: '#000000'
  },
  infoBox: {
    flex: 3,
    gap: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',

  },
  productName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#495057',
    lineHeight: 23.44,

  },
  productDuty: {
    fontSize: 16,
    fontWeight: '400',
    color: '#868E96',
    lineHeight: 18.75
  },
  highlight: {
    fontWeight: '600',
  },
  fileButton: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;