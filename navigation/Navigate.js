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
import BottomTab from "./BottomTab";
import Profile from "../Screens/Profile/Profile";
import Choose from "../Screens/Booking/Choose";
import Calendar from "../Screens/Profile/Calendar";
import BookTable from "../Screens/Booking/BookTable";
import Drawer from "../navigation/Drawer";
import Favourite from "../Screens/Profile/Favourite";

const AuthStack = createStackNavigator();

const MyStack = () => {
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

				<AuthStack.Screen name="BottomTab" component={BottomTab} options={{}} />

				<AuthStack.Screen
					name="Profile"
					component={Profile}
					options={{ headerShown: false }}
				/>
			</AuthStack.Navigator>
		</NavigationContainer>
	);
};

export default MyStack;
