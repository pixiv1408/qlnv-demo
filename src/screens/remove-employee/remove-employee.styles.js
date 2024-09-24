import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 20 : 50
  },
  listContainer: {
    flex: 1,
  },
  listContentContainer: {
    paddingVertical: 20,
  },
  showAddProduct: {
    flex: 0.5,
  },
  title: {
    fontSize: 26,
    color: '#495057',
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 20,
    lineHeight: 30.47
  }
});

export default styles;