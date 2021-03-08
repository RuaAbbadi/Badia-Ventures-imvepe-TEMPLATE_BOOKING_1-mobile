import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, View, LogBox } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Favourite from "../Screens/Profile/Favourite";
import Notifications from "../Screens/Profile/Notifications";
import { color } from "react-native-reanimated";
import Calendar from "../Screens/Profile/Calendar";
import StackNav from "./StackNav";

const Tab = createBottomTabNavigator();

function TabScreen({ navigation }) {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			independent={true}
			tabBarOptions={{
				activeTintColor: "#F5CB5C",
				inactiveTintColor: "white",
				showIcon: "true",
				showLabel: false,
				lazyLoad: true,

				style: {
					backgroundColor: "transparent",
					borderTopWidth: 0,
					position: "absolute",
					backgroundColor: "#333533",
					borderRadius: 5,
					marginLeft: 10,
					marginRight: 10,
					marginBottom: 5,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={StackNav}
				options={{
					tabBarIcon: ({ color }) => (
						<Fontisto name="home" size={20} color={color} />
					),
				}}
			/>

			<Tab.Screen
				name="Calendar"
				component={Calendar}
				options={{
					tabBarVisible: false,
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="calendar-month-outline"
							size={25}
							color={color}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Notifications"
				component={Notifications}
				options={{
					tabBarIcon: ({ color }) => (
						<Fontisto name="bell-alt" size={20} color={color} />
					),
				}}
			/>

			<Tab.Screen
				name="Favourite"
				component={Favourite}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="heart" size={23} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
export default TabScreen;
