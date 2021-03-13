import React, { useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	ScrollView,
	Dimensions,
	ImageBackground,
	ActivityIndicator,
} from "react-native";
import Stars from "react-native-stars";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import SearchBox from "../../Components/Search/SearchBox";
import Cat2 from "../../Components/Menus/cat2";
import BookTableButton from "../../Components/Buttons/BookButton";
import { wp, hp } from "../../Components/Dimension/dimen";
import { getProducts, setProductId } from "../../Store/Products/Actions";
import { setProduct_Id } from "../../Store/Favourites/Actions";
import { useDispatch, useSelector } from "react-redux";
import FavList from "../../Components/Lists/FavList";
import { SuggestionCard } from "../../Components/cards/SuggestionCard";

export default function HomeBookTable({ navigation }) {
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

	const showProducts = () => {
		dispatch(getProducts());
	};

	useEffect(() => {
		showProducts();
	}, []);

	const meals = [
		{ name: " Pasta", key: "1" },
		{ name: " Pasta", key: "2" },
		{ name: " Pasta", key: "3" },
	];

	const { width } = Dimensions.get("window");
	function pressToBook() {
		navigation.navigate("BookTable");
	}

	function navigateToProfile() {
		navigation.navigate("Profile");
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
							<SuggestionCard item={item} pressChoose={pressChoose} />
						)}
					/>
				)}
				<View
					style={{
						flexDirection: "row",
					}}
				>
					<SearchBox />
					<Cat2 />
					<BookTableButton pressToBook={pressToBook} />
				</View>

				<View>
					<FavList products={products} pressChoose={pressChoose} />
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
