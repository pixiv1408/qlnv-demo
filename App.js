import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useDispatch, useSelector } from 'react-redux';

import EmployeeList from './src/screens/employee-list/employee-list.component';
import AddEmployee from './src/screens/add-employee/add-employee.component';
import UpdateEmployee from './src/screens/update-employee/update-employee.component';
import TabBar from './src/components/tab-bar/tab-bar.component';
import store from './src/redux/store';
import RemoveEmployee from './src/screens/remove-employee/remove-employee.component';
import Login from './src/screens/login/login.component';
import { getTokenThunk } from './src/redux/auth/auth.thunk';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const App = () => (
  <Provider store={store}>
    <ControllerStack/>
  </Provider>
);

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='login' component={Login} />
  </Stack.Navigator>
);

const ProtectedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='main' component={Main} />
    <Stack.Screen name='add-employee' component={AddEmployee} />
    <Stack.Screen name='update-employee' component={UpdateEmployee} />
  </Stack.Navigator>
);

const ControllerStack = () => {
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch();
  let rendering = null;
  const setup = async () => {
    await dispatch(getTokenThunk());
  }

  useEffect(() => {
    setup();
  }, []);

  if (token) {
    rendering = <ProtectedStack />;
  } else {
    rendering = <AuthStack />;
  }

  return (
    <NavigationContainer independent={true}>
      {rendering}
    </NavigationContainer>
  );
};

const Main = () => (
  <BottomTab.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <TabBar {...props} />}
  >
    <BottomTab.Screen
      name='employee-list'
      component={EmployeeList}
      options={{ icon: 'list-outline' }}
    />
    <BottomTab.Screen
      name='remove-Employee'
      component={RemoveEmployee}
      options={{ icon: 'trash-outline' }}
    />
  </BottomTab.Navigator>
);

export default App;