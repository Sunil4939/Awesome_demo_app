import React from "react";
import { View , Text, StyleSheet } from "react-native";

const TicTacToeGame = () => {
  return(
    <View style={styles.container}>
      <View style={styles.gamecontainer}>

      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'center',
  },
  gamecontainer:{
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'white',
    height:300,
  }
})
export default TicTacToeGame;