import { useDispatch } from "react-redux";
import {
  View, Image,
  Text, TouchableOpacity
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { addEmployee } from "../../../redux/removes/removes.slice";
import { removeEmployee } from "../../../redux/employees/employee.slice";
import styles from "./employee-item.styles";

const Item = ({ data }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onNamePress = () => {
    navigation.navigate('update-employee', { data });
  };

  const addEmployeeToTrash = () => {
    const employee = {
      id: data.id,
      name: data.name,
      duty: data.duty,
      image: data.image,
    }
    dispatch(removeEmployee(employee));
    dispatch(addEmployee(employee));
  }

  return (
    <View style={styles.contaner}>
      <Image
        source={{ uri: data.image }}
        style={styles.image} />
      <View style={styles.infoBox}>
        <TouchableOpacity onPress={onNamePress}>
          <Text style={styles.productName}>{data.name}</Text>
        </TouchableOpacity>
        <Text style={styles.productDuty}>
          <Text style={styles.highlight}>{data.duty}</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.fileButton}
        hitSlop={20}
        onPress={addEmployeeToTrash}
      >
        <Image
          source={require('../../../../img/inbox.png')}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Item;