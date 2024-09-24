import Ionicons from '@expo/vector-icons/Ionicons';

import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, Text } from "react-native";

import Floatbutton from "../../components/float-button/float-button.component";
import styles from "./employee-list.styles";
import Item from "./employee-items/employee-item.component";
import Search from "../../components/search/search.component";
import { searchEmployee } from '../../redux/employees/employee.slice';

const EmployeeList = ({ navigation }) => {
  const list = useSelector(state => state.employees.list);
  const dispatch = useDispatch();

  const onSearchEmployee = (search) => {
    const staff = {
      name: search
    }
    dispatch(searchEmployee(staff));
  };

  const onOpenAddEmployee = () => {
    navigation.navigate('add-employee');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quản Lý Nhân Viên</Text>
      <Search
        onSearch={onSearchEmployee}
      />
      <FlatList
        data={list}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={item => item.id}
        styles={styles.container}
        contentContainerStyle={styles.listContentContainer}
      />
      <Floatbutton>
        <Ionicons
          name="add"
          size={40}
          color='#fff'
          onPress={onOpenAddEmployee}
        />

      </Floatbutton>
    </View>
  );
};

export default EmployeeList;