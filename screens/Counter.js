import React from "react";
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";


const Counter = () => {
    const [Count, SetCount] = useState(0);
    
    useEffect(() => {
       if(Count >= 1){
        SetCount(60)
       }
    },[Count]);
    
    return(
        <View style={{flex:1 ,alignItems:'center', justifyContent:'center'}}>
            <Text>Counter Page</Text>
            <Text>Count = {Count}</Text>
          <View style={{flexDirection:'row',}}>
          <TouchableOpacity style={{backgroundColor:'green',width:30, height:30, justifyContent:'center', alignItems:'center', margin:40}}
          onPress={() => SetCount(Count-1)}>
                <Text style={{ color:'white',fontSize:20}}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'green',width:30, height:30, justifyContent:'center', alignItems:'center', margin:40}}
            onPress={() => SetCount(Count+1)}>
                <Text style={{ color:'white',fontSize:20}}>+</Text>
            </TouchableOpacity>
          </View>
            
        </View>
    )
}

export default Counter;