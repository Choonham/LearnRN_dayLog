import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'MainTab'}
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Write'}
        component={WriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
