import React from "react";
import { View , Text, TouchableOpacity } from "react-native";

const Profile = ({ navigation }) => {
  return(
    <View style={{flex:1 ,alignItems:'center', justifyContent:'center'}}>
      <Text>Profile Page</Text>
      <TouchableOpacity style={{backgroundColor:'green',padding:10, height:40,alignItems:'center', justifyContent:'center', borderRadius:10,}}  onPress={()=>  navigation.navigate('TicTacToe')}>
        <Text style={{color:'white'}}>Go to TicTacToe Page</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile;