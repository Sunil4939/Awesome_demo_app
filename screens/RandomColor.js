
import React, { useEffect, useState } from "react";
import { View , Text, TouchableOpacity, StatusBar } from "react-native";


const GenerateRandomNumber=()=>
{

var RandomNumber = `"rgb(${Math.floor(Math.random() * 255) + 1} ,${Math.floor(Math.random() * 255) + 1} ,${Math.floor(Math.random() * 255) + 1} )"`;
// console.log(RandomNumber);
return(RandomNumber);
}


const RandomColor = () => {
    const [BackgroundColor, SetBackgroundColor] = useState("rgb(112, 0, 255)")

    useEffect(() => {
        SetBackgroundColor(GenerateRandomNumber())
    },[]) ;
  return(
    <View style={{flex:1 ,alignItems:'center', justifyContent:'center', backgroundColor:BackgroundColor}}>
         <StatusBar
                    backgroundColor="#7CB236"
                    barStyle="light-content"
                />
      <Text>RandomColor Page</Text>
        <TouchableOpacity style={{backgroundColor:'green',padding:10, height:40,alignItems:'center', justifyContent:'center', borderRadius:10,}} onPress={() => SetBackgroundColor(GenerateRandomNumber())} >
            <Text>ChangeBackgroundColor</Text>
        </TouchableOpacity>
    </View>
  )
}

export default RandomColor;