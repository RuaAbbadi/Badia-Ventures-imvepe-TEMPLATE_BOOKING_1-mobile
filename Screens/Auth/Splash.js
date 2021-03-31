import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { wp, hp } from "../../Components/Dimension/dimen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_LOGIN_SUCCESS } from "../../Store/User/Constants";
import { useDispatch } from "react-redux";

export const Splash = ({ navigation }) => {
	const dispatch = useDispatch();
	const pressHandlerLogin = () => {
		navigation.navigate("Login");
	};

	const pressHandlerSignin = () => {
		navigation.navigate("Signup");
	};

	let user = {};
	async function fetchData() {
		user = await AsyncStorage.getItem("user");
		token = await AsyncStorage.getItem("token");
		const parsedUser = user ? JSON.parse(user) : {};
		if (parsedUser.name) {
			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: {
					token,
					user: parsedUser,
				},
			});
			navigation.navigate("Drawer");
		}
		console.log("here", parsedUser);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={{
					width: wp(375),
					height: wp(7),
					borderWidth: 1,
					borderColor: "#F5CB5C",
					backgroundColor: "#F5CB5C",
					borderRadius: 250,
				}}
			></TouchableOpacity>

			<View style={{ marginTop: hp(56) }}>
				<Text style={styles.Text1}>RESTURANT</Text>
			</View>

			<View style={{ marginTop: hp(122) }}>
				<Image
					style={{ width: 267.81, height: 252.23 }}
					source={require("../../assets/splash2.png")}
				/>
			</View>

			<View style={{ marginTop: hp(45.77), flexDirection: "row" }}>
				<Text style={styles.Text2}>Restaurant Online </Text>
				<Text style={styles.Text3}>Is Here</Text>
			</View>

			<View style={{ flexDirection: "row" }}>
				<Text style={styles.Text4}>This Is The Best </Text>
				<Text style={styles.Text5}>Application </Text>
			</View>

			<View>
				<TouchableOpacity
					style={styles.LoginButton}
					onPress={() => pressHandlerLogin()}
				>
					<Text
						style={{
							fontSize: 14,
							alignSelf: "center",
							marginTop: hp(14),
							color: "#FFFFFF",
							marginBottom: hp(14),
						}}
					>
						Login
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.SignupButton}
					onPress={() => pressHandlerSignin()}
				>
					<Text
						style={{
							fontSize: 14,
							alignSelf: "center",
							marginTop: hp(14),
							marginBottom: hp(14),
							color: "#FFFFFF",
						}}
					>
						Sign Up
					</Text>
				</TouchableOpacity>
			</View>

			<View
				style={{
					width: wp(65),
					height: wp(65),
					backgroundColor: "#333533",
					borderColor: "#707070",
					marginTop: hp(31),
					marginRight: wp(313),
					borderTopRightRadius: 100,
				}}
			></View>
		</View>
	);
};

export default Splash;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},

	Text1: {
		fontSize: 20,
	},

	Text2: {
		fontSize: 20,
		color: "#333533",
		fontWeight: "bold",
	},

	Text3: {
		fontSize: 20,
		color: "#F5CB5C",
	},

	Text4: {
		fontSize: 17,
		color: "#F5CB5C",
	},

	Text5: {
		fontSize: 17,
		color: "#333533",
	},

	LoginButton: {
		borderWidth: 1,
		borderColor: "#333533",
		width: 232,
		height: 43,
		backgroundColor: "#333533",
		borderRadius: 10,
		marginTop: hp(29),
	},
	SignupButton: {
		borderWidth: 1,
		borderColor: "#333533",
		width: 232,
		height: 43,
		backgroundColor: "#333533",
		borderRadius: 10,
		marginTop: 15,
	},
});
