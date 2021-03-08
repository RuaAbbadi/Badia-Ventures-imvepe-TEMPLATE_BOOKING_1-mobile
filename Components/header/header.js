import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { wp, hp } from "../../Components/Dimension/dimen";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
	const navigation = useNavigation();

	return (
		<View style={[styles.box, styles.box1]}>
			<Feather
				name="align-left"
				size={32}
				color="#333533"
				onPress={() => navigation.openDrawer()}
			/>

			<TouchableOpacity onPress={() => navigation.navigate("Profile")}>
				<View style={styles.circle}></View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	box: {
		marginLeft: wp(29),
		marginRight: wp(28),
	},
	box1: {
		flexDirection: "row",
		marginTop: hp(19),
	},

	circle: {
		marginLeft: wp(225),
		width: wp(44),
		height: wp(44),
		borderRadius: 30,
		borderWidth: 3,
		borderColor: "#333533",
	},
});
