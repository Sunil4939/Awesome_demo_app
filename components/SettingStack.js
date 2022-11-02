import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import About from "../screens/TicTacToe";
import RandomColor from "../screens/RandomColor";
import Settings from "../screens/Settings";


const Stack = createStackNavigator();


const SettingStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator >
        <Stack.Screen name="Settings" component={Settings} 
        options={{
           
          headerLeft: ()=>(
            <TouchableOpacity style={{paddingLeft:10, }}  onPress={()=>  navigation.toggleDrawer()}> 
                <Ionicons name='menu' size={30} color={'black'}  ></Ionicons>
            </TouchableOpacity>)
               }}
                
               />
      <Stack.Screen name="RandomColor" component={RandomColor}
        options={{
            headerStyle:{
                backgroundColor:'red',
            },
        }} 
        />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

export default SettingStackNavigator ;