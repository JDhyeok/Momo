import React from 'react';
import {useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
// import MomoScreen from '../screens/MomoScreen';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();

const TabComponent = () => {
  return (
    <MainScreenTab.Navigator>
      <MainScreenTab.Screen name="Main" component={MainScreen} />
      {/* <MainScreenTab.Screen name="Momo" component={MomoScreen} /> */}
    </MainScreenTab.Navigator>
  );
};

export const RootNavigator = () => {
  const isAuthUser = useSelector(state => state.user.signedIn);
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {isAuthUser ? (
        <AuthStack.Screen name="Main" component={TabComponent} />
      ) : (
        <AuthStack.Screen name="Login" component={LoginScreen} />
      )}
    </AuthStack.Navigator>
  );
};
