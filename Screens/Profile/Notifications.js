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
import NotificationComp from "../../Components/Lists/NotificationComp";
import { wp, hp } from "../../Components/Dimension/dimen";
import Header from "../../Components/header/header";

export default function Notifications({ navigation }) {
	const Notif = [
		{ name: "You confirmed to buy pasta", key: "1" },
		{ name: "You confirmed to buy pasta", key: "2" },
		{ name: "You confirmed to buy pasta", key: "3" },
		{ name: "You confirmed to buy pasta", key: "4" },
		{ name: "You confirmed to buy pasta", key: "5" },
	];

	return (
		<View style={styles.container}>
			<ScrollView>
				<Header />

				<View
					style={{
						marginTop: hp(40),
						marginBottom: hp(29),
						marginLeft: wp(29),
					}}
				>
					<Text style={styles.Headertext1}>Notifications</Text>
				</View>

				<View>
					<FlatList
						data={Notif}
						renderItem={({ item }) => (
							<View style={{ alignItems: "center", justifyContent: "center" }}>
								<NotificationComp item={item} />
							</View>
						)}
					/>
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		flexDirection: "column",
	},

	Headertext1: {
		color: "black",
		fontSize: 27,
	},
});
