import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import About from "../screens/About";
// import Counter from "../screens/Counter";
import { TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Notifications from "../screens/Notifications";
import MyDice from "../screens/Dice";


const Stack = createStackNavigator();


const NotificationStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator >
        <Stack.Screen name="Notifications" component={Notifications} 
        options={{
          headerLeft: ()=>(
            <TouchableOpacity style={{paddingLeft:10, }}  onPress={()=>  navigation.toggleDrawer()}> 
                <Ionicons name='menu' size={30} color={'black'}  ></Ionicons>
            </TouchableOpacity>)
               }}
                
               />
      <Stack.Screen name="Dice" component={MyDice} 
        />
      {/* <Stack.Screen name="About" component={About} /> */}
    </Stack.Navigator>
  );
}

export default NotificationStackNavigator