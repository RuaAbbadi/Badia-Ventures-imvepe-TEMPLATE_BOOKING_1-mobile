import "react-native-gesture-handler";
import React from "react";
//Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import all the screens needed

import Home from "../Screens/Home/Home";
import Profile from "../Screens/Profile/Profile";
import Choose from "../Screens/Booking/Choose";
import Favourite from "../Screens/Profile/Favourite";
import Calendar from "../Screens/Profile/Calendar";
import Notifications from "../Screens/Profile/Notifications";

const Stack = createStackNavigator();

const MainStack = ({ navigation }) => {
	return (
		<Stack.Navigator
			screenOptions={{
				swipeEnabled: false,
				headerShown: false,
			}}
		>
			<Stack.Screen
				name=" Home"
				component={Home}
				options={{ title: "", headerShown: false }}
			/>

			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{ title: "", headerShown: false }}
			/>
			<Stack.Screen
				name="Choose"
				component={Choose}
				options={{ title: "", headerShown: false }}
			/>
			{/* <HomeStack.Screen
					name="BookTable"
					component={BookTable}
					options={{ title: "", headerShown: false }}
				/> */}
		</Stack.Navigator>
	);
};

const CalenderStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				swipeEnabled: false,
				headerShown: false,
			}}
		>
			<Stack.Screen name="Calendar" component={Calendar} />
		</Stack.Navigator>
	);
};

const FavStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				swipeEnabled: false,
				headerShown: false,
			}}
		>
			<Stack.Screen name="Favourite" component={Favourite} />
		</Stack.Navigator>
	);
};
const NotificationStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				swipeEnabled: false,
				headerShown: false,
			}}
		>
			<Stack.Screen name="Notifications" component={Notifications} />
		</Stack.Navigator>
	);
};

export {
	MainStack,
	CalenderStackNavigator,
	FavStackNavigator,
	NotificationStackNavigator,
};
