import "react-native-gesture-handler";
import React from "react";
//Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
} from "react-native";

//Import all the screens needed
import Login from "../Screens/Auth/Login";
import Signup from "../Screens/Auth/Signup";
import splash from "../Screens/Auth/Splash";
import Drawer from "../navigation/Drawer";

const AuthStack = createStackNavigator();

const MyStack = ({ navigation }) => {
	return (
		<NavigationContainer>
			<AuthStack.Navigator
				screenOptions={{
					swipeEnabled: false,
					headerShown: false,
				}}
			>
				<AuthStack.Screen
					name="splash"
					component={splash}
					options={{ headerShown: false }}
				/>
				<AuthStack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>
				<AuthStack.Screen
					name="Signup"
					component={Signup}
					options={{ headerShown: false }}
				/>

				<AuthStack.Screen name="Drawer" component={Drawer} options={{}} />
			</AuthStack.Navigator>
		</NavigationContainer>
	);
};

export default MyStack;
