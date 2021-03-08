import React, { useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	ScrollView,
	ImageBackground,
	ActivityIndicator,
} from "react-native";
import Stars from "react-native-stars";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import SearchBox2 from "../../Components/Search/SearchBox2";
import Categoriesmenu from "../../Components/Menus/Categoriesmenu";
import { wp, hp } from "../../Components/Dimension/dimen";
import Header from "../../Components/header/header";
import { getProducts, setProductId } from "../../Store/Products/Actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home({ navigation }) {
	const dispatch = useDispatch();
	const { isLoading, success, failed, products, errorMsg } = useSelector(
		(state) => state.Product
	);

	const pressChoose = (id) => {
		// To get the product id
		dispatch(setProductId(id));
		console.log(setProductId(id));

		// To navidate to product page
		navigation.navigate("Choose");
	};

	const pressToFav = (id) => {
		// To get the product id
		dispatch(setProductId(id));
		console.log(setProductId(id));

		// To navidate to product page
		navigation.navigate("Favourite");
	};

	const showProducts = () => {
		dispatch(getProducts());
	};

	useEffect(() => {
		showProducts();
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView style={{ marginBottom: hp(60) }}>
				<Header />

				<View style={styles.HeaderView}>
					<Text style={styles.Headertext1}>Hello,User !</Text>
					<Text style={styles.Headertext3}>Lets pick your food or table</Text>
				</View>

				<View style={styles.HeaderView1}>
					<Text style={{ fontSize: 23 }}>Suggestions</Text>
				</View>
				{isLoading ? (
					<View>
						<ActivityIndicator size="large" color="#333533" />
					</View>
				) : (
					<FlatList
						data={products}
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
									<View
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
										}}
									>
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
													maxWidth: "70%",
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
													marginLeft: "auto",
												}}
											/>
										</View>
									</View>

									<View
										style={{
											flexDirection: "row",
											marginTop: "auto",
											marginLeft: wp(10.51),
											marginBottom: 10,
										}}
									>
										<Stars
											default={item.rating}
											count={item.rating}
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
				)}

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
					<Categoriesmenu />
				</View>

				<View>
					<FlatList
						data={products}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={styles.Form1}
								onPress={() => pressChoose(item._id)}
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
										<TouchableOpacity onPress={() => pressToFav(item._id)}>
											<Ionicons
												name="heart"
												size={15}
												color="white"
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
