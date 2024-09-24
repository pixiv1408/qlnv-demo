import Ionicons from '@expo/vector-icons/Ionicons';

import { useState } from "react";
import { useDispatch } from 'react-redux';
import {
  KeyboardAvoidingView, Platform,
  ScrollView, View, Text, TextInput,
  Alert, TouchableOpacity
} from "react-native";

import PrimaryButton from "../../components/primary-button/primary-button.component";
import styles from "./add-employee.styles";
import { addEmployee as addEmployeeRedux } from '../../redux/employees/employee.slice';

const AddEmployee = ({ navigation }) => {
  const [name, setName] = useState('');
  const [duty, setDuty] = useState('');
  const [image] = useState('https://picsum.photos/300/300?id=1');
  const dispatch = useDispatch();

  const addEmployee = () => {

    if (name === '' || duty === '') {
      Alert.alert('Vui lòng nhập đầy đủ thông tin')
      return;
    }

    dispatch(addEmployeeRedux({ name, duty, image }));

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Text style={styles.title}>Thêm Nhân Viên</Text>
          <TextInput
            placeholder="Họ và tên"
            style={styles.input}
            onChangeText={(Text) => setName(Text)}
          />
          <TextInput
            placeholder="Chức vụ"
            style={styles.input}
            onChangeText={(Text) => setDuty(Text)}
          />
          <PrimaryButton
            hitSlop={20}
            onPress={addEmployee}
          >
            Lưu
          </PrimaryButton>
        </ScrollView>
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.closeButton}
        hitSlop={20}
        onPress={navigation.goBack}>
        <Ionicons
          name="close"
          size={20}
          color='#495057'
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddEmployee;