import React from "react";
import { View, StyleSheet } from "react-native";
import {
	useTheme,
	Avatar,
	Title,
	Caption,
	Paragraph,
	Drawer,
	Text,
	TouchableRipple,
	Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

export const AuthContext = React.createContext();
export function DrawerContent(props) {
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View>
						<View style={{ marginLeft: 29, flexDirection: "row" }}>
							<Title style={styles.title}>Ru'a Abbadi</Title>
							<TouchableOpacity
								onPress={() => {
									props.navigation.navigate("Home");
								}}
							>
								<Entypo
									name="dots-three-horizontal"
									size={25}
									color={"#FFFFFF"}
									style={{ marginLeft: 90, marginTop: 29 }}
								/>
							</TouchableOpacity>
						</View>
					</View>

					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={() => (
								<Icon name="home-outline" color={"#FFFFFF"} size={30} />
							)}
							label="Home"
							labelStyle={{ fontSize: 22, color: "#FFFFFF" }}
							onPress={() => {
								props.navigation.navigate("Home");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name="account-outline" color={"#FFFFFF"} size={30} />
							)}
							label=" My Profile"
							labelStyle={{ fontSize: 22, color: "#FFFFFF" }}
							onPress={() => {
								props.navigation.navigate("Profile");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name="history" color={"#FFFFFF"} size={30} />
							)}
							label="History"
							labelStyle={{ fontSize: 22, color: "#FFFFFF" }}
							onPress={() => {
								props.navigation.navigate("History");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<MaterialIcons name="payment" color={"#FFFFFF"} size={30} />
							)}
							label="Payment"
							labelStyle={{ fontSize: 22, color: "#FFFFFF" }}
							onPress={() => {
								props.navigation.navigate("Payment");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<MaterialIcons name="settings" color={"#FFFFFF"} size={25} />
							)}
							label="Settings"
							labelStyle={{ fontSize: 22, color: "#FFFFFF" }}
							onPress={() => {
								props.navigation.navigate("SettingsScreen");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Entypo name="users" color={"#FFFFFF"} size={25} />
							)}
							label="About"
							labelStyle={{ fontSize: 22, color: "#FFFFFF" }}
							onPress={() => {
								props.navigation.navigate("About");
							}}
						/>
					</Drawer.Section>
					<TouchableOpacity>
						<View
							style={{
								alignSelf: "center",
								flexDirection: "column",
								marginTop: 100,
							}}
						>
							<Title style={styles.title}>Logout</Title>
						</View>
					</TouchableOpacity>
				</View>
			</DrawerContentScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		fontSize: 21,
		marginTop: 26,
		color: "#FFFFFF",
	},

	drawerSection: {
		marginTop: 85,
		marginLeft: 10,
	},
});
