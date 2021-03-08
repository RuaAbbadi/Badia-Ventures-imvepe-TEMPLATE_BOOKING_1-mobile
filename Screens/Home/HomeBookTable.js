import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	ScrollView,
	Dimensions,
	Image,
	TextInput,
	ImageBackground,
} from "react-native";
import Stars from "react-native-stars";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import SearchBox from "../Components/SearchBox";
import Categoriesmenu from "../Components/Categoriesmenu";
import BookTableButton from "../Components/BookTableButton";

export default function HomeBookTable({ navigation }) {
	const meals = [
		{ name: " Pasta", key: "1" },
		{ name: " Pasta", key: "2" },
		{ name: " Pasta", key: "3" },
	];

	const { width } = Dimensions.get("window");

	function navigateToProfile() {
		navigation.navigate("Profile");
	}
	function pressChoose() {
		navigation.navigate("Choose");
	}
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row", marginTop: 35, marginLeft: 29 }}>
				<View style={{ marginTop: 3 }}>
					<TouchableOpacity onPress={() => navigateToSideM()}>
						<Feather name="align-left" size={33} color="#000000" />
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => navigateToProfile()}>
					<View
						style={{
							marginLeft: width - 130,
							width: 44,
							height: 44,
							borderRadius: 30,
							borderWidth: 3,
							borderColor: "#000000",
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
								source={require("../assets/pasta.png")}
							>
								<View style={{ flexDirection: "row" }}>
									<View>
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
										style={{ flexDirection: "row-reverse", marginRight: 60 }}
									>
										<Ionicons name="heart" size={13} color="white" />
									</View>
								</View>

								<View
									style={{ flexDirection: "row", marginTop: 68, marginLeft: 9 }}
								>
									<Stars
										default={3}
										count={5}
										half={true}
										starSize={40}
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

				<View style={{ flexDirection: "row", alignSelf: "center" }}>
					<SearchBox />
					<Categoriesmenu />
					<BookTableButton />
				</View>

				<View style={{ marginBottom: 70 }}>
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
									source={require("../assets/pasta.png")}
								>
									<View style={{ flexDirection: "row" }}>
										<Text style={styles.Title}>{item.name}</Text>

										<View
											style={{
												flexDirection: "row-reverse",
												marginRight: 200,
												marginTop: 8,
											}}
										>
											<TouchableOpacity>
												<Ionicons name="heart" size={15} color="white" />
											</TouchableOpacity>
										</View>
									</View>

									<View
										style={{
											flexDirection: "row",
											marginTop: 15,
											marginLeft: 23,
										}}
									>
										<Stars
											default={3}
											count={5}
											half={true}
											starSize={100}
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
		margin: 15,
		marginTop: 15,
		color: "black",
		fontSize: 19,
		marginLeft: 29,
	},
	HeaderView1: {
		margin: 15,
		marginTop: 10,
		color: "black",
		fontSize: 23,
		marginLeft: 29,
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
		marginTop: 15,
		fontSize: 26,
		color: "white",
		marginLeft: 15,
	},

	Form1: {
		borderRadius: 50,
	},

	myStarStyle: {
		color: "#F5CB5C",
		backgroundColor: "transparent",
		padding: 1,
	},
	myEmptyStarStyle: {
		color: "#F5CB5C",
		padding: 1,
	},
	ImageBack: {
		marginRight: 20,
		paddingTop: 15,
		paddingBottom: 25,
		marginBottom: 10,
		height: 122,
		width: 122,
	},
	Foodlist: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	ImageBack2: {
		margin: 13,
		alignSelf: "center",

		height: 96,
		width: 318,
	},
});
