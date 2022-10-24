import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './redux/store';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {View, Text} from 'react-native';
import tw from 'twrnc';
import CustomDrawer from './components/CustomDrawer';

const Drawer = createDrawerNavigator();

const MenuItem = props => (
  <View style={[tw`flex-1 justify-center`, {alignItems: 'center'}]}>
    <Text>{props.name}</Text>
  </View>
);
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Home" component={HomeNavigator} />
            <Drawer.Screen name={'Rides'}>
              {() => <MenuItem name={'Rides'} />}
            </Drawer.Screen>
            <Drawer.Screen name={'Wallet'}>
              {() => <MenuItem name={'Wallet'} />}
            </Drawer.Screen>
            <Drawer.Screen name={'Support'}>
              {() => <MenuItem name={'Support'} />}
            </Drawer.Screen>
            <Drawer.Screen name={'Settings'}>
              {() => <MenuItem name={'Settings'} />}
            </Drawer.Screen>
          </Drawer.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
    // #ef6685
  );
};

export default App;
