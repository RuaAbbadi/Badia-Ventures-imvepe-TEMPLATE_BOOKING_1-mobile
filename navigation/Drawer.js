import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import Home from "../Screens/Home/Home";
import TabScreen from "../navigation/BottomTab";
import Profile from "../Screens/Profile/Profile";
import History from "../Screens/Profile/History";
import { DrawerContent } from "../Components/Drawer/DrawerContent";
import StackNav from "./StackNav";

const Draw = createDrawerNavigator();
const Drawer = ({ navigation }) => {
	return (
		<Draw.Navigator
			independent={true}
			initialRouteName="Home"
			drawerPosition="left"
			drawerContent={(props) => <DrawerContent {...props} />}
			drawerContentOptions={{
				style: { backgroundColor: "#333533" },
			}}
		>
			<Draw.Screen name="Home" component={TabScreen} />
			<Draw.Screen name="Profile" component={Profile} />
			<Draw.Screen name="History" component={History} />
			<Draw.Screen name="Payment" component={History} />
			<Draw.Screen name="Setting" component={History} />
			<Draw.Screen name="About" component={History} />
		</Draw.Navigator>
	);
};
export default Drawer;
