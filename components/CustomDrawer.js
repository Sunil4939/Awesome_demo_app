import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native-gesture-handler";



const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: 'skyblue' }}>
                <ImageBackground source={require('../images/nature.jpg')} style={{ padding: 10, }}>
                    <Image source={require('../images/mypicture.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                    <Text style={{ color: 'white', fontFamily: 'sans-sarif', fontSize: 20 }}>Sunil Prajapati</Text>
                  
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'white', fontSize:18}}>123 coins</Text>
                    <FontAwesome5 name='coins' size={20} style={{color:'gold', marginLeft:10}} />
                    </View>
                </ImageBackground>
                <View style={{flex:1, backgroundColor:'white', paddingTop:10}}>
                <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{padding:10, borderTopWidth:1, borderTopColor:'#ccc',}}>
              <TouchableOpacity onPress={ () => {} } style={{padding:10, borderRadius:5, marginVertical:5}}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name="share-social-outline" size={25}  />
                <Text style={{fontSize:18, marginLeft:5, fontWeight:'600'}}>Tell a Friend</Text>
              </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => {} } style={{padding:10, borderRadius:5, marginVertical:5}}>
              <View style={{flexDirection:'row', alignItems:'center',}}>
                <Ionicons name="exit-outline" size={25}  />
                <Text style={{fontSize:18, marginLeft:5, fontWeight:'600'}}>Sign Out</Text>
              </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer;