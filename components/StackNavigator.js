import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchBar } from "react-native-screens";

// import BottomTabNavigator from "./TabNavigator";
import TicTacToeGame from "../screens/TicTacToe";
import Profile from "../screens/Profile";
import { TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../screens/Home";

// import DrawerNavigator from "./components/DrawerNavigator";

const Stack = createStackNavigator();

const HomeStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ paddingLeft: 10, }} onPress={() => navigation.toggleDrawer()}>
              <Ionicons name='menu' size={30} color={'black'}  ></Ionicons>
            </TouchableOpacity>),
          headerRight: () => (
            <SearchBar
              placeholder="Type Here..."
            // onChangeText={this.updateSearch}
            // value={search}
            />
          )
        }}
      />
      <Stack.Screen name="Profile" component={Profile}
      />
      <Stack.Screen name="TicTacToe" component={TicTacToeGame} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;