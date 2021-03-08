import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	ScrollView,
	Dimensions,
	ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Stars from "react-native-stars";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import Swipeout from "react-native-swipeout";
import { wp, hp } from "../Dimension/dimen";

export default function NotificationComp({ item }) {
	var swipeoutBtns = [
		{
			text: "Delete",
			backgroundColor: "#FD5B5B",
		},
	];

	return (
		<Swipeout
			right={swipeoutBtns}
			buttonWidth={50}
			style={{
				width: wp(318),
				height: hp(56),
				borderRadius: 5,
				shadowColor: "#00000029",
				marginBottom: hp(10),
				shadowOffset: { width: 0, height: 0.2 },
				shadowOpacity: 0.1,
				elevation: 2,
				backgroundColor: "white",
			}}
		>
			<View style={styles.swip}>
				<View style={styles.swip2}>
					<Text style={{ fontSize: 17 }}>{item.name}</Text>

					<View>
						<Text style={{ fontSize: 9, color: "#00000029" }}>1 min ago</Text>
					</View>
				</View>

				<View>
					<MaterialIcons
						name="push-pin"
						size={20}
						color={"#333533"}
						style={{
							marginLeft: wp(55),
							marginTop: hp(19),
							marginRight: wp(23.51),
						}}
					/>
				</View>
			</View>
		</Swipeout>
	);
}
const styles = StyleSheet.create({
	swip: {
		width: wp(318),
		height: hp(56),
		borderRadius: 5,
		fontSize: 11,
		flexDirection: "row",
		justifyContent: "center",
	},
	swip2: {
		flexDirection: "column",
		marginTop: hp(18),
		marginLeft: wp(13),
	},
});
