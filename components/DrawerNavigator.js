import React from "react";
import { getFocusedRouteNameFromRoute, } from '@react-navigation/native';

import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Account from "../screens/Account";
import Settings from "../screens/Settings";
import Notifications from "../screens/Notifications";
import Messages from "../screens/Messages";
// import Home from "../screens/Home";


import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomTabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const HideDrawer = (route,name ) => {
  const routeName = getFocusedRouteNameFromRoute(route)
  // console.log(name)
  if (routeName == name || routeName == undefined) {
   return true;
  }
  else {
    return false;
  }
}

const DrawerNavigator = () => {
    return (
    
<Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          swipeEnabled:false,
          drawerActiveBackgroundColor: 'green',
          drawerActiveTintColor: 'white', drawerLabelStyle: { marginLeft: -25, fontSize: 18 }
        }} >
        <Drawer.Screen name="Home" component={BottomTabNavigator}
         options={{
          headerShown:false,
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={25} color={color} />

          )
        }} 
      
        />
         <Drawer.Screen name="Messages" component={Messages}  
        
           options={({ route }) => ({
            // headerShown: false,
            drawerIcon: ({ color }) => (
                  <Ionicons name="md-chatbox-outline" size={25} color={color} />
            ),
            swipeEnabled: HideDrawer(route, route.name) 
          })}
           />
            <Drawer.Screen name="Settings" component={Settings}  options={{
             
             drawerIcon: ({ color }) => (
               <Ionicons name="settings-outline" size={25} color={color} />
             )
           }}/>
            <Drawer.Screen name="Notifications" component={Notifications}  options={{
             
             drawerIcon: ({ color }) => (
               <Ionicons name="notifications-outline" size={25} color={color} />
             )
           }}/>
          <Drawer.Screen name="Account" component={Account}  options={{
             
             drawerIcon: ({ color }) => (
                <Ionicons name="person-outline" size={25} color={color} />
              )
            }}/>
        
      </Drawer.Navigator>
    );
  }
  
  export default DrawerNavigator;

  