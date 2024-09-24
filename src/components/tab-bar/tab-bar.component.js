import { View } from 'react-native';

import TabItem from './tab-item/tab-item.component';
import styles from './tab-bar.styles';

const TabBar = ({ state, descriptors, navigation }) => (
  <View style={styles.container}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      //let label;
      {/* if (options.tabBarLabel !== undefined) {
                label = options.tabBarLabel;
            } else if (options.title !== undefined) {
                label = options.title;
            } else {
                label = route.name;
            } */}

      const selected = state.index === index;
      const onPress = () => {
        if (selected === false) {
          navigation.navigate({ name: route.name, merge: true });
        }
      }

      return (
        <TabItem
          key={route.key}
          selected={selected}
          icon={options.icon}
          // label={label}
          onPress={onPress}
        />
      )
    })}
  </View>
);

export default TabBar;