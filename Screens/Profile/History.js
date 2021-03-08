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
import { wp, hp } from "../../Components/Dimension/dimen";
import Header from "../../Components/header/header";

export default function History({ navigation }) {
	const Notif = [
		{ name: "You book a table and the order to buy pasta", key: "1" },
		{ name: "You book a table and the order to buy pasta", key: "2" },
		{ name: "You book a table and the order to buy pasta", key: "3" },
	];

	const status = [
		{ name: "In progresses", key: "1" },
		{ name: "Done", key: "2" },
		{ name: "Pending", key: "3" },
	];

	const { width } = Dimensions.get("window");
	function navigateToProfile() {
		navigation.navigate("Profile");
	}

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.HeaderView}>
				<Text style={styles.Headertext1}>History</Text>
			</View>

			<ScrollView>
				<FlatList
					data={Notif}
					renderItem={({ item }) => (
						<View style={{ alignSelf: "center" }}>
							<View
								style={{
									alignItems: "center",
									width: wp(318),
									height: hp(96),
									borderRadius: 5,
									fontSize: 11,
									backgroundColor: "white",
									shadowColor: "#00000029",
									shadowOffset: { width: 0, height: 0.2 },
									elevation: 5,
									marginBottom: 10,
								}}
							>
								<View style={{ flexDirection: "row" }}>
									<Text
										style={{
											marginRight: wp(40),
											marginLeft: wp(60),
											marginTop: hp(21),
											fontSize: 17,
											paddingLeft: wp(13),
										}}
									>
										{item.name}
									</Text>
									<ImageBackground
										style={{
											height: hp(43),
											width: wp(43),
											marginRight: 90,
											marginTop: 20,
										}}
										imageStyle={{
											resizeMode: "cover",
											borderRadius: 5,
											backgroundColor: "#000000",
											opacity: 0.6,
										}}
										source={require("../../assets/pasta.png")}
									></ImageBackground>
								</View>

								<Text
									style={{
										fontSize: 9,
										marginRight: wp(264),
										marginLeft: wp(13),
									}}
								>
									1 min ago
								</Text>
							</View>
						</View>
					)}
				/>
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
	HeaderView: {
		marginLeft: wp(29),
		marginTop: hp(40),
		color: "black",
		fontSize: 19,
		marginBottom: hp(50),
	},
	Headertext1: {
		color: "black",
		fontSize: 27,
	},
});
