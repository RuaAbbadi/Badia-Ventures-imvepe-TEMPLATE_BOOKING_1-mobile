import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import Stars from "react-native-stars";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { addProducts, DeleteProducts } from "../../Store/Favourites/Actions";
import { useDispatch, useSelector } from "react-redux";
import { wp, hp } from "../Dimension/dimen";

export const ProductCard = ({ item, pressChoose }) => {
	const dispatch = useDispatch();
	const {
		productStatus: { product, isLoading },
	} = useSelector((state) => state.Favourites);

	const [isLiked, setIsLiked] = useState(item.isLiked);

	const addProductToFav = (id) => {
		dispatch(addProducts(id));
	};

	const deleteProductFromFav = (id) => {
		dispatch(DeleteProducts(id));
	};

	const handleLikeClick = (id) => () => {
		if (!isLiked) {
			setIsLiked(true);
			addProductToFav(id);
		}
		if (isLiked) {
			setIsLiked(false);
			deleteProductFromFav(id);
		}
	};

	return (
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
					<TouchableOpacity onPress={handleLikeClick(item._id)}>
						<Ionicons
							name="heart"
							size={16}
							color={isLiked ? "#F5CB5C" : "white"}
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
						fullStar={<Fontisto name={"star"} style={[styles.myStarStyle]} />}
						emptyStar={
							<Feather
								name={"star"}
								style={[styles.myStarStyle, styles.myEmptyStarStyle]}
							/>
						}
						halfStar={
							<Fontisto name={"star-half"} style={[styles.myStarStyle]} />
						}
					/>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
};

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
