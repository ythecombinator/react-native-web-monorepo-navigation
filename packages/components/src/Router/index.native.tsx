import React, { FunctionComponent, useState } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { About as AboutScreen } from '../screens/About'
// Screens
import { CodeSharing as CodeSharingScreen } from '../screens/CodeSharing'
import { WebSupport as WebSupportScreen } from '../screens/WebSupport'
import { routesMap } from '../utils/router'

// Screens
const About = createStackNavigator();
const Features = createStackNavigator();
const Main = createBottomTabNavigator();

const AboutNavigator = () => {
  return (
    <About.Navigator>
      <About.Screen
        name={routesMap.about._root.path}
        component={AboutScreen}
        options={{ title: routesMap.about._root.name }}
      />
    </About.Navigator>
  );
};

const FeaturesNavigator = () => {
  return (
    <Features.Navigator>
      <Features.Screen
        name={routesMap.features.codeSharing.path}
        component={CodeSharingScreen}
        options={{ title: routesMap.features.codeSharing.name }}
      />
      <Features.Screen
        name={routesMap.features.webSupport.path}
        component={WebSupportScreen}
        options={{ title: routesMap.features.webSupport.name }}
      />
    </Features.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationNativeContainer>
      <Main.Navigator>
        <Main.Screen
          name={routesMap.about._navigator.path}
          component={AboutNavigator}
          options={{ title: routesMap.about._navigator.name }}
        />
        <Main.Screen
          name={routesMap.features._navigator.path}
          component={FeaturesNavigator}
          options={{ title: routesMap.features._navigator.name }}
        />
      </Main.Navigator>
    </NavigationNativeContainer>
  );
};

const Router = MainNavigator;

export { Router };
