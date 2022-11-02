import React from "react";
import { View , Text, TouchableOpacity, } from "react-native";


const Home = ({ navigation }) => {
  return(
    <View style={{ flex:1 , alignItems:'center', justifyContent:'center'}}>
      <Text>Home</Text>
      <TouchableOpacity style={{backgroundColor:'green', padding:10, height:40,alignItems:'center', justifyContent:'center', borderRadius:10,}}  onPress={()=>  navigation.navigate('Profile')}>
        <Text style={{color:'white'}}>Go to Profile Page</Text>
      </TouchableOpacity>
     
    </View>
  )
}

export default Home;