import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";




const MyDice = () => {
  const [Number, SetNumber] = useState(0)

  const imagepath=[ require('../images/dice-1.jpg'), 
                    require('../images/dice-2.jpg'),  
                    require('../images/dice-3.jpg'),
                    require('../images/dice-4.jpg'), 
                    require('../images/dice-5.jpg'), 
                    require('../images/dice-6.jpg')
                  ];

  const GenerateRandomNumber = () => {
    var RandomNumber = Math.floor(Math.random() * 5);
    // console.log(RandomNumber);
    return(RandomNumber);
  }
  useEffect(() => {
    SetNumber(GenerateRandomNumber())
  }, []);
  // console.log(Number);
  return (
    <View style={styles.container}>
      <Text>Dice Page</Text>
      <Image source={imagepath[Number]}/>
      <TouchableOpacity style={styles.button} onPress={() => SetNumber(GenerateRandomNumber())} >
        <Text>Change</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MyDice;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
}); 