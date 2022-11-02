// default stack navigate

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Home from './screens/Home'
// import Profile from './screens/Profile';
// import About from './screens/About';


// const Stack = createNativeStackNavigator();

// const App = () => {

//   return (

//     <NavigationContainer>
//       <Stack.Navigator>
//          <Stack.Screen
//           name="Home"
//           component={Home}
//         />
//          <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="About" component={About} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );

// };

// export default App;



//default drawer

// import * as React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// import Home from "./screens/Home";
// import Profile from "./screens/Profile";
// import About from "./screens/About";

// const Drawer = createDrawerNavigator();

//  const App = () => {
//   return (
//     <NavigationContainer >
//       <Drawer.Navigator initialRouteName="Home"  screenOptions={{
//     drawerStyle: {
//       // backgroundColor: '#c6cbef',
//       width: 240,
//     },
//   }}>
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Profile" component={Profile} />
//         <Drawer.Screen name="About" component={About} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


// custom drawer

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar,View} from 'react-native';


import DrawerNavigator from "./components/DrawerNavigator";

const App = () => {
  return (
    <View style={{flex: 1}}>
    <StatusBar backgroundColor="skyblue" barStyle="dark-content"/> 
    <NavigationContainer >
      <DrawerNavigator/>
    </NavigationContainer>
 </View>
  );
}

export default App;

