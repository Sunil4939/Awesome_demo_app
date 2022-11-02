import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import About from "../screens/TicTacToe";
import Counter from "../screens/Counter";
import { TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Messages from "../screens/Messages";


const Stack = createStackNavigator();


const MessageStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator >
        <Stack.Screen name="Messages" component={Messages} 
        options={{
          headerLeft: ()=>(
            <TouchableOpacity style={{paddingLeft:10, }}  onPress={()=>  navigation.toggleDrawer()}> 
                <Ionicons name='menu' size={30} color={'black'}  ></Ionicons>
            </TouchableOpacity>)
               }}
                
               />
      <Stack.Screen name="Counter" component={Counter} 
        />
      {/* <Stack.Screen name="About" component={About} /> */}
    </Stack.Navigator>
  );
}

export default MessageStackNavigator ;