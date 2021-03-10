import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { wp, hp } from "../Dimension/dimen";
import { addProducts, DeleteProducts } from "../../Store/Favourites/Actions";

const LoveIcon = ({ item }) => {
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
		<View style={styles.contanier}>
			<TouchableOpacity
				style={styles.loveicon}
				onPress={handleLikeClick(item._id)}
			>
				<Ionicons
					name="heart"
					size={35}
					color={isLiked ? "#F5CB5C" : "white"}
					style={{ padding: 20 }}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default LoveIcon;
const styles = StyleSheet.create({
	contanier: {
		width: wp(71),
		height: hp(71),
		marginTop: hp(-35),
		marginBottom: hp(23),
		marginLeft: wp(272),
		marginRight: wp(23),
	},
	loveicon: {
		backgroundColor: "#333533",
		borderRadius: 90,
		alignSelf: "center",
	},
});
