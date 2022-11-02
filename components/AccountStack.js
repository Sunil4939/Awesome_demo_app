import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Account from "../screens/Account";
import Audio from "../screens/Audio";


const Stack = createStackNavigator();


const AccountStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator >
        <Stack.Screen name="Account" component={Account} 
        options={{
          headerLeft: ()=>(
            <TouchableOpacity style={{paddingLeft:10, }}  onPress={()=>  navigation.toggleDrawer()}> 
                <Ionicons name='menu' size={30} color={'black'}  ></Ionicons>
            </TouchableOpacity>)
               }}
                
               />
      <Stack.Screen name="Audio" component={Audio} 
        />
    </Stack.Navigator>
  );
}

export default AccountStackNavigator;