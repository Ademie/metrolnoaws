import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './redux/store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import SearchScreen from './screens/SearchScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
        <SafeAreaProvider>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
          </Stack.Navigator>
          {/* <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="MapScreen" component={MapScreen} />
            <Drawer.Screen name="SearchScreen" component={SearchScreen} />
          </Drawer.Navigator> */}
        </SafeAreaProvider>
      {/* </NavigationContainer> */}
    </Provider>
  );
};

export default HomeNavigator;
