import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, Text } from "react-native";

import Item from "./employee-items/employee-item.component";
import Search from "../../components/search/search.component";
import { searchEmployee } from '../../redux/removes/removes.slice';
import styles from './remove-employee.styles';

const RemoveEmployee = () => {
  const searchList = useSelector(state => state.removes.searchList);
  const dispatch = useDispatch();

  const onSearchEmployee = (search) => {
    const staff = {
      name: search
    }
    dispatch(searchEmployee(staff));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh Sách Nghỉ Việc</Text>
      <Search
        onSearch={onSearchEmployee}
      />
      <FlatList
        data={searchList}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={item => item.id}
        styles={styles.container}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
};

export default RemoveEmployee;