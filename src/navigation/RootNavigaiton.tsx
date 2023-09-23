import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Category from '../screens/Category';
import {ProductT} from '../types';
type Props = {};
export type RootStackParamList = {
  Home: undefined;
  Details: {item: ProductT};
  Category: {cetegory: string};
};
export type Navigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();
const RootNavigaiton = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigaiton;
