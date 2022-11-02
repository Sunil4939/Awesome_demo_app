import React from "react";
import { View , Text, TouchableOpacity } from "react-native";

const Settings = ({ navigation }) => {
  return(
    <View style={{flex:1 ,alignItems:'center', justifyContent:'center'}}>
        <Text>Settings</Text>
      <TouchableOpacity style={{backgroundColor:'green',padding:10, height:40,alignItems:'center', justifyContent:'center', borderRadius:10,}}  onPress={()=>  navigation.navigate('RandomColor')}>
        <Text style={{color:'white'}}>Go to RandomColor Page</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings;