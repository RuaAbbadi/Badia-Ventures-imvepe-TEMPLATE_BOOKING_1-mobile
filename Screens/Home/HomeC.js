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
import Stars from "react-native-stars";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import SearchBox2 from "../../Components/Search/SearchBox2";
import Categories from "../../Components/Menus/Categories";
import { wp, hp } from "../../Components/Dimension/dimen";

export default function HomeC({ navigation }) {
	const meals = [
		{ name: " Pasta", key: "1" },
		{ name: " Pasta", key: "2" },
		{ name: " Pasta", key: "3" },
	];

	const { width } = Dimensions.get("window");

	function navigateToProfile() {
		navigation.navigate("Profile");
	}

	function navigateToSideM() {
		navigation.navigate("SideM");
	}

	function pressChoose() {
		navigation.navigate("Choose");
	}
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					marginTop: hp(19),
					marginLeft: wp(29),
					marginRight: wp(28),
				}}
			>
				<View style={{ marginTop: hp(31) }}>
					<TouchableOpacity onPress={() => navigateToSideM()}>
						<Feather name="align-left" size={33} color="#000000" />
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => navigateToProfile()}>
					<View
						style={{
							marginLeft: width - 135,
							width: wp(44),
							height: hp(44),
							borderRadius: 35,
							borderWidth: 3,
							borderColor: "#000000",
							marginTop: hp(19),
						}}
					></View>
				</TouchableOpacity>
			</View>

			<ScrollView>
				<View style={styles.HeaderView}>
					<Text style={styles.Headertext1}>Hello,User !</Text>
					<Text style={styles.Headertext3}>Lets pick your food or table</Text>
				</View>

				<View style={styles.HeaderView1}>
					<Text style={{ fontSize: 23 }}>Suggestions</Text>
				</View>

				<FlatList
					data={meals}
					showsHorizontalScrollIndicator={false}
					horizontal={true}
					renderItem={({ item }) => (
						<View style={styles.Foodlist}>
							<ImageBackground
								style={styles.ImageBack}
								imageStyle={{
									resizeMode: "cover",
									borderRadius: 5,
									backgroundColor: "#000000",
									opacity: 0.5,
								}}
								source={require("../../assets/pasta.png")}
							>
								<View style={{ flexDirection: "row" }}>
									<View
										style={{
											marginTop: hp(11),
											marginLeft: wp(11),
										}}
									>
										<Text
											style={{
												fontSize: 13,
												color: "white",
												fontWeight: "bold",
											}}
										>
											{item.name}
										</Text>
									</View>
									<View
										style={{
											flexDirection: "row-reverse",
										}}
									>
										<Ionicons
											name="heart"
											size={13}
											color="white"
											style={{
												marginRight: wp(10.77),
												marginTop: hp(15.29),
												marginLeft: wp(55.9),
											}}
										/>
									</View>
								</View>

								<View
									style={{
										flexDirection: "row",
										marginTop: hp(78.4),
										marginLeft: wp(10.51),
									}}
								>
									<Stars
										default={3}
										count={5}
										half={true}
										starSize={10}
										fullStar={
											<Fontisto name={"star"} style={[styles.myStarStyle]} />
										}
										emptyStar={
											<Feather
												name={"star"}
												style={[styles.myStarStyle, styles.myEmptyStarStyle]}
											/>
										}
										halfStar={
											<Fontisto
												name={"star-half"}
												style={[styles.myStarStyle]}
											/>
										}
									/>
								</View>
							</ImageBackground>
						</View>
					)}
				/>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						marginLeft: wp(29),
						marginTop: hp(29),
						width: wp(304),
						height: hp(43),
					}}
				>
					<SearchBox2 />
					<Categories />
				</View>

				<View>
					<FlatList
						data={meals}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={styles.Form1}
								onPress={() => pressChoose()}
							>
								<ImageBackground
									style={styles.ImageBack2}
									imageStyle={{
										resizeMode: "cover",
										borderRadius: 5,
										backgroundColor: "#000000",
										opacity: 0.56,
									}}
									source={require("../../assets/pasta.png")}
								>
									<View
										style={{
											display: "flex",
											alignItems: "flex-start",
											flexDirection: "column",
											justifyContent: "flex-start",
										}}
									>
										<TouchableOpacity>
											<Ionicons
												name="heart"
												size={16}
												color={"white"}
												style={{
													marginLeft: wp(292),
													marginTop: hp(12),
													marginBottom: 0,
												}}
											/>
										</TouchableOpacity>
										<Text
											style={{
												fontSize: 26,
												color: "white",
												marginLeft: wp(21),
												marginBottom: "auto",
											}}
										>
											{item.name}
										</Text>
									</View>

									<View
										style={{
											flexDirection: "row",
											marginLeft: wp(21),
											marginTop: "auto",
											marginBottom: hp(10),
										}}
									>
										<Stars
											default={item.rating}
											count={item.rating}
											half={true}
											starSize={20}
											fullStar={
												<Fontisto name={"star"} style={[styles.myStarStyle]} />
											}
											emptyStar={
												<Feather
													name={"star"}
													style={[styles.myStarStyle, styles.myEmptyStarStyle]}
												/>
											}
											halfStar={
												<Fontisto
													name={"star-half"}
													style={[styles.myStarStyle]}
												/>
											}
										/>
									</View>
								</ImageBackground>
							</TouchableOpacity>
						)}
					/>
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		marginBottom: 70,
	},
	HeaderView: {
		marginTop: hp(29),
		color: "black",
		fontSize: 19,
		marginLeft: wp(29),
	},
	HeaderView1: {
		marginLeft: wp(29),
		marginTop: hp(42),
		color: "black",
		fontSize: 23,
	},
	Headertext1: {
		color: "black",
		fontSize: 23,
		fontWeight: "bold",
	},

	Headertext3: {
		marginBottom: 20,
		color: "#000000",
		fontSize: 13,
	},

	Title: {
		marginTop: hp(18),
		fontSize: 26,
		color: "white",
		marginLeft: wp(21),
	},

	Form1: {
		borderRadius: 50,
	},

	myStarStyle: {
		color: "#F5CB5C",
		backgroundColor: "transparent",
	},
	myEmptyStarStyle: {
		color: "#F5CB5C",
		paddingRight: 1,
	},
	ImageBack: {
		marginRight: wp(20),
		height: hp(122),
		width: wp(122),
		marginTop: hp(20),
	},
	Foodlist: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	ImageBack2: {
		marginTop: hp(29),
		alignSelf: "center",
		height: hp(96),
		width: wp(318),
		marginLeft: wp(29),
		marginRight: wp(28),
	},
});
