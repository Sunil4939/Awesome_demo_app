import React from "react";
import { View , Text, TouchableOpacity } from "react-native";

const Notifications = ({ navigation }) => {
  return(
    <View style={{flex:1 ,alignItems:'center', justifyContent:'center'}}>
        <Text>Notifications</Text>
      <TouchableOpacity style={{backgroundColor:'green',padding:10, height:40,alignItems:'center', justifyContent:'center', borderRadius:10,}}  onPress={()=>  navigation.navigate('Dice')}>
        <Text style={{color:'white'}}>Go to Dice Page</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Notifications;