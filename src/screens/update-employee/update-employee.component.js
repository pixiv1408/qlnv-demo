import Ionicons from '@expo/vector-icons/Ionicons'

import { useState } from "react";
import { useDispatch } from 'react-redux';
import {
  KeyboardAvoidingView, Platform, ScrollView,
  View, Text,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

import PrimaryButton from "../../components/primary-button/primary-button.component";
import styles from "./update-employee.styles";
import { updateEmployee as updateEmployeeRedux } from '../../redux/employees/employee.slice';
import { fetchUpdateEmployeeThunk } from '../../redux/employees/employee.thunk';

const UpdateEmployee = ({ navigation, route }) => {
  const { data } = route.params;
  const [id] = useState(String(data.id));
  const [name, setName] = useState(data.name);
  const [duty, setDuty] = useState(data.duty);
  const [image] = useState(data.image);
  const dispatch = useDispatch();

  const updateEmployee = () => {

    if (name === '' || duty === '') {
      Alert.alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    dispatch(fetchUpdateEmployeeThunk({ id, name, duty, image }));

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Text style={styles.title}>Cập Nhật Nhân Viên #{data.id}</Text>

          <TextInput
            placeholder="Họ và tên"
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            placeholder="Chức vụ"
            style={styles.input}
            value={duty}
            onChangeText={(text) => setDuty(text)}
          />

          <PrimaryButton
            hitSlop={20}
            onPress={updateEmployee}>
            Cập Nhật
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

export default UpdateEmployee;