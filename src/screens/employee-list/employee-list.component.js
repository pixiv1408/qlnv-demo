import Ionicons from '@expo/vector-icons/Ionicons';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, Text } from "react-native";

import Floatbutton from "../../components/float-button/float-button.component";
import Search from "../../components/search/search.component";
import { searchEmployee } from '../../redux/employees/employee.slice';
import { fetchEmployeesThunk } from '../../redux/employees/employee.thunk';
import Item from "./employee-items/employee-item.component";

import styles from "./employee-list.styles";

const EmployeeList = ({ navigation }) => {
  const list = useSelector(state => state.employees.searchList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeesThunk());
  }, []);

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