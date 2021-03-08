import "react-native-gesture-handler";
import React from "react";
//Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";

//Import all the screens needed

import Home from "../Screens/Home/Home";
import Profile from "../Screens/Profile/Profile";
import Choose from "../Screens/Booking/Choose";
import BookTable from "../Screens/Booking/BookTable";
import { wp, hp } from "../Components/Dimension/dimen";
import { Feather } from "@expo/vector-icons";
import Favourite from "../Screens/Profile/Favourite";

const AuthStack = createStackNavigator();

const MyStack = ({ navigation }) => {
	function navigateToProfile() {
		navigation.navigate("Profile");
	}
	return (
		<NavigationContainer independent={true}>
			<AuthStack.Navigator
				screenOptions={{
					swipeEnabled: false,
					headerShown: false,
					// headerStyle: {
					// 	elevation: 0,
					// 	shadowOpacity: 0,
					// },
					// title: "",
					// headerLeft: () => (
					// 	<Feather
					// 		name="align-left"
					// 		size={32}
					// 		backgroundColor="#FFFFFF"
					// 		color="#333533"
					// 		style={{ marginLeft: wp(29) }}
					// 		onPress={() => navigation.openDrawer()}
					// 	/>
					// ),
					// headerRight: () => (
					// 	<TouchableOpacity
					// 		style={{
					// 			width: wp(44),
					// 			height: wp(44),
					// 			borderRadius: 35,
					// 			borderWidth: 3,
					// 			borderColor: "#333533",
					// 			marginRight: hp(29),
					// 		}}
					// 		onPress={() => navigateToProfile()}
					// 	></TouchableOpacity>
					// ),
				}}
			>
				<AuthStack.Screen
					name="Home"
					component={Home}
					options={{ title: "", headerShown: false }}
				/>

				<AuthStack.Screen
					name="Profile"
					component={Profile}
					options={{ title: "", headerShown: false }}
				/>
				<AuthStack.Screen
					name="Choose"
					component={Choose}
					options={{ title: "", headerShown: false }}
				/>
				<AuthStack.Screen
					name="BookTable"
					component={BookTable}
					options={{ title: "", headerShown: false }}
				/>
				<AuthStack.Screen
					name="Favourite"
					component={Favourite}
					options={{ headerShown: false }}
				/>
			</AuthStack.Navigator>
		</NavigationContainer>
	);
};

export default MyStack;
