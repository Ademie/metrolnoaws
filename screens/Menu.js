import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import SearchScreen from './screens/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';


const Stack = createStackNavigator();

const Menu = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Menu;

const styles = StyleSheet.create({});
