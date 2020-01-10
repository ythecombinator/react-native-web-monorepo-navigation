import React, { FunctionComponent, useState } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { About as AboutScreen } from '../screens/About'
// Screens
import { CodeSharing as CodeSharingScreen } from '../screens/CodeSharing'
import { WebSupport as WebSupportScreen } from '../screens/WebSupport'
import { routes } from '../utils/router'

// Screens
const About = createStackNavigator();
const Features = createStackNavigator();
const Main = createBottomTabNavigator();

const AboutNavigator = () => {
  return (
    <About.Navigator>
      <About.Screen
        name={routes.about._root.path}
        component={AboutScreen}
        options={{ title: routes.about._root.name }}
      />
    </About.Navigator>
  );
};

const FeaturesNavigator = () => {
  return (
    <Features.Navigator>
      <Features.Screen
        name={routes.features.codeSharing.path}
        component={CodeSharingScreen}
        options={{ title: routes.features.codeSharing.name }}
      />
      <Features.Screen
        name={routes.features.webSupport.path}
        component={WebSupportScreen}
        options={{ title: routes.features.webSupport.name }}
      />
    </Features.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationNativeContainer>
      <Main.Navigator>
        <Main.Screen
          name={routes.about._navigator.path}
          component={AboutNavigator}
          options={{ title: routes.about._navigator.name }}
        />
        <Main.Screen
          name={routes.features._navigator.path}
          component={FeaturesNavigator}
          options={{ title: routes.features._navigator.name }}
        />
      </Main.Navigator>
    </NavigationNativeContainer>
  );
};

const Router = MainNavigator;

export { Router };
