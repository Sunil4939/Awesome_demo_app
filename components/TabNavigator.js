import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute, } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

import HomeStackNavigator from "./StackNavigator";
import MessageStackNavigator from "./MessageStack";
import SettingStackNavigator from "./SettingStack";
import NotificationStackNavigator from "./NotificationStack";
import AccountStackNavigator from "./AccountStack";

const HideBottomTab = (route , name) => {
  const routeName = getFocusedRouteNameFromRoute(route)
  // console.log(name)
  if (routeName == name || routeName == undefined) {
    return {
      margin: 10,
      marginTop: 0,
      borderRadius: 5,
      height: 60,
      paddingBottom: 10,
    }
  }
  else {
    return { display: "none" }
  }
}

const BottomTabStyle = () => {
  return {
    margin: 10,
    marginTop: 0,
    borderRadius: 5,
    height: 60,
    paddingBottom: 10,
  }
}

const BottomTabNavigator = () => {


  return (
    <Tab.Navigator screenOptions={() => ({
      tabBarActiveTintColor: 'green',
      tabBarStyle:
        BottomTabStyle()

    })}>
      <Tab.Screen name="Home" component={HomeStackNavigator}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={25} color={color} />
          ),
          tabBarStyle: HideBottomTab(route, 'Home') 
        })}
      />
      <Tab.Screen name="Messages" component={MessageStackNavigator}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-chatbox-outline" size={25} color={color} />
          ),
          tabBarStyle: HideBottomTab(route, route.name) 
        })}
      />
      <Tab.Screen name="Settings" component={SettingStackNavigator} 
      options={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Ionicons name="settings-outline" size={25} color={color} />
        ),
        tabBarStyle: HideBottomTab(route, route.name) 
      })}
     />
      <Tab.Screen name="Notifications" component={NotificationStackNavigator} 
      options={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Ionicons name="notifications-outline" size={25} color={color} />
        ),
        tabBarStyle: HideBottomTab(route, route.name) 
      })}
       />
      <Tab.Screen name="Account" component={AccountStackNavigator} 
      options={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Ionicons name="person-outline" size={25} color={color} />
        ),
        tabBarStyle: HideBottomTab(route, route.name) 
      })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;