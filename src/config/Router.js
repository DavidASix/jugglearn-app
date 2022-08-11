import React from 'react';
import {
  BackHandler,
} from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';

import c from '../assets/constants';

// Screens
import Authentication from '../screens/Authentication/';
import Courses from '../screens/Courses/';
import Exercises from '../screens/Exercises/';
import Profile from '../screens/Profile/';
import Purchases from '../screens/Purchases/';
import SingleCourse from '../screens/SingleCourse/';
import ExerciseVideo from '../screens/ExerciseVideo/';

import TabBar from './TabBar';
import Header from './Header';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function mapStateToProps ({ settings }) {
  return { theme: settings.theme };
};
/** TAB NAVIGATOR **/

const Tabs = () => {
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => { return true; });
    return () => backHandler.remove();
  }, []);
  // headerStyle for Header Heigh
  return (
    <Tab.Navigator
      initialRouteName="courses"
      tabBar={props => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="courses" component={Courses} options={{ title: 'Courses' }} />
      <Tab.Screen name="exercises" component={Exercises} options={{ title: 'Exercises' }} />
      <Tab.Screen name="profile" component={Profile} options={{ title: 'My Profile' }} />
      <Tab.Screen name="purchases" component={Purchases} options={{ title: 'Purchases' }} />
    </Tab.Navigator>
  );
}

/** MODAL STACK NAVIGATOR **/
const ModalStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        gestureEnabled: true,
        presentation: 'transparentModal',
        ...TransitionPresets.ModalSlideFromBottomIOS,
        header: Header
      })}
      initialRouteName="courses" >
      <Stack.Screen
        name="tabs"
        component={Tabs}
        options={({ navigation, route }) => ({ title: 'Courses' })} />
      <Stack.Screen
        name="exerciseVideo"
        component={ExerciseVideo}
        options={({ navigation, route }) => ({
          title: 'Video',
          headerShown: false
        })} />
    </Stack.Navigator>
  );
}

/** AUTH NAVIGATOR **/

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false, ...TransitionPresets.ModalSlideFromBottomIOS  }}
      initialRouteName="modalStack" >
      <Stack.Screen
        name="authentication"
        component={Authentication}
        options={({ navigation, route }) => ({ title: 'Authentication' })} />
      <Stack.Screen
        name="modalStack"
        component={ModalStack}
        options={({ navigation, route }) => ({ title: 'modalStack' })} />
    </Stack.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default Router;
