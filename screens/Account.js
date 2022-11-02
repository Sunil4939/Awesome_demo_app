import React from "react";
import { View , Text, TouchableOpacity } from "react-native";

const Account = ({ navigation }) => {
  return(
    <View style={{flex:1 ,alignItems:'center', justifyContent:'center'}}>
        <Text>Account</Text>
      <TouchableOpacity style={{backgroundColor:'green',padding:10, height:40,alignItems:'center', justifyContent:'center', borderRadius:10,}}  onPress={()=>  navigation.navigate('Audio')}>
        <Text style={{color:'white'}}>Go to Audio Page</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Account;