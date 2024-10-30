import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import IonIcon from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <IonIcon color={color} name="home-outline" />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Calculator"
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <IonIcon color={color} name="calculator-outline" />
          ),
        }}
        component={CalculatorScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
