import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";

import Navigate from "./navigation/Navigate";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./Store/store";
import Status from "./Screens/Profile/Status";
import Drawer from "./navigation/Drawer";
import Splash from "./Screens/Auth/Splash";
import HomeBookTable from "./Screens/Home/HomeBookTable";
import HomeC from "./Screens/Home/HomeC";

export default function App() {
	LogBox.ignoreAllLogs(true);

	return (
		<Provider store={store}>
			<Navigate />
		</Provider>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
