
import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './tab-item.styles';

const TabItem = ({ selected, icon, onPress, label }) => (
  <Pressable
    style={styles.container}
    onPress={onPress}>
    <Ionicons
      name={icon}
      size={30}
      color={selected ? '#FF922B' : '#495057'}
    />
    {/* <Text style={selected ? [styles.label, styles.labelHighlight] : styles.label}>
            {label}
        </Text> */}
  </Pressable>
);

export default TabItem;