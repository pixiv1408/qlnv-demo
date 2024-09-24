import {
  View, Image,
  Text, TouchableOpacity
} from "react-native";
import { useDispatch } from "react-redux";

import { removeEmployee } from "../../../redux/removes/removes.slice";
import { restoreEmployee } from "../../../redux/employees/employee.slice";
import styles from "./employee-item.styles";

const Item = ({ data }) => {
  const dispatch = useDispatch();

  const restoreEmployeeTrash = () => {
    const employee = {
      id: data.id,
      name: data.name,
      duty: data.duty,
      image: data.image,
    }
    dispatch(removeEmployee(employee));
    dispatch(restoreEmployee(employee));
  }

  return (
    <View style={styles.contaner}>
      <Image
        source={{ uri: data.image }}
        style={styles.image} />
      <View style={styles.infoBox}>
        <Text style={styles.productName}>{data.name}</Text>
        <Text style={styles.productDuty}>
          <Text style={styles.highlight}>{data.duty}</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.fileButton}
        hitSlop={20}
        onPress={restoreEmployeeTrash}
      >
        <Image
          source={require('../../../../img/restore.png')}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Item;