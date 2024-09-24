import { useState } from "react";
import { useDispatch } from 'react-redux';
import {
  KeyboardAvoidingView, Platform,
  ScrollView, View,
  Text, TextInput, Alert
} from "react-native";

import PrimaryButton from "../../components/primary-button/primary-button.component";
import { loginThunk } from "../../redux/auth/auth.thunk";

import styles from "./login.styles";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onLogin = () => {

    if (username === '' || password === '') {
      Alert.alert('Vui lòng nhập đầy đủ thông tin')
      return;
    }

    const data = {
      username,
      password,
    };

    dispatch(loginThunk(data));
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Text style={styles.title}>Thêm Nhân Viên</Text>
          <TextInput
            placeholder="Tên Đăng Nhập"
            style={styles.input}
            onChangeText={(Text) => setUsername(Text)}
          />
          <TextInput
            secureTextEntry
            placeholder="Mật Khẩu"
            style={styles.input}
            onChangeText={(Text) => setPassword(Text)}
          />
          <PrimaryButton
            hitSlop={20}
            onPress={onLogin}
          >
            Đăng Nhập
          </PrimaryButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;