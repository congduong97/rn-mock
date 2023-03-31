import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import SignIn1 from '../screens/SignIn1';
import SignIn2 from '../screens/SignIn2';
import ListScreen from '../screens/ListScreen';

export type RootStackParamList = {
  ListScreen: undefined;
  'SINGIN-1': undefined;
  'SINGIN-2': undefined;
};

export type RootStackScreens = keyof RootStackParamList;
export type RootStackScreenProps<T extends RootStackScreens> =
  NativeStackScreenProps<RootStackParamList, T>;

export type UseRootStackNavigation<T extends RootStackScreens> =
  NativeStackNavigationProp<RootStackParamList, T>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{headerShown: false, gestureEnabled: true}}>
          <RootStack.Screen name="ListScreen" component={ListScreen} />
          <RootStack.Screen name="SINGIN-1" component={SignIn1} />
          <RootStack.Screen name="SINGIN-2" component={SignIn2} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}
