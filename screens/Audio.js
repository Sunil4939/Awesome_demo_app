// import React, {useEffect} from 'react';
// import {View, StyleSheet, TouchableOpacity} from 'react-native';
// // import song from '../android/app/src/main/res/raw/sajde.mp3';
// import song from '../Songs/maine_payal_hai_chankai.mp3';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// var Sound = require('react-native-sound');

// Sound.setCategory('Playback');

// var sound = new Sound(song, error => {
//   if (error) {
//     console.log('failed to load the sound', error);
//     return;
//   }
//   // if loaded successfully
//   console.log(
//     'duration in seconds: ' +
//       sound.getDuration() +
//       'number of channels: ' +
//       sound.getNumberOfChannels(),
//   );
// });

// const Audio = () => {
//   useEffect(() => {
//     sound.setVolume(1);
//     return () => {
//       sound.release();
//     };
//   }, []);
//   const playPause = () => {
//     sound.play(success => {
//       if (success) {
//         console.log('successfully finished playing');
//       } else {
//         console.log('playback failed due to audio decoding errors');
//       }
//     });
//   };
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.playBtn} onPress={playSound}>
//         <Ionicons name={'ios-play-outline'} size={36} color={'#fff'} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000',
//   },
//   playBtn: {
//     padding: 20,
//   },
// });
// export default Audio;


import React from "react";
import {View, StyleSheet,Text, TouchableOpacity} from 'react-native';
import song from '../Songs/maine_payal_hai_chankai.mp3';
import Sound from "react-native-sound";

const PlayAudio = () => {
  let sound = new Sound(song);

  const PlaySound = () => {
    sound.play();
  }
  function PauseSound(){
    sound.pause();
  }
 
 
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => PlaySound()}>
        <Text style={styles.btntext}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={PauseSound}>
        <Text style={styles.btntext}>Pause</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  btn:{
    backgroundColor:'green',
    padding:10,
    borderRadius:10,
    height:40,
    margin:10,
  },
  btntext:{
    color:'white',
  }
});
export default PlayAudio;