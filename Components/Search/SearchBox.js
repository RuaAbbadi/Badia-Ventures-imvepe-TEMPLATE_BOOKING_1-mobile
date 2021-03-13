import React from "react";
import { View, StyleSheet, ImageBackground, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { wp, hp } from "../Dimension/dimen";

const SearchBox = () => {
	return (
		<View style={styles.contanier}>
			<EvilIcons
				name="search"
				size={30}
				color={"#696969"}
				style={{ marginRight: "auto", marginLeft: "auto" }}
			/>
			<TextInput
				placeholder="Search For Food You Like"
				placeholderTextColor="#696969"
				style={{ marginRight: "auto", marginRight: wp(10) }}
			/>
		</View>
	);
};

export default SearchBox;
const styles = StyleSheet.create({
	contanier: {
		alignItems: "center",
		flexDirection: "row",
		borderWidth: 1.5,
		borderColor: "#333533",
		width: hp(240),
		height: hp(43),
		borderRadius: 8,
		fontSize: 11,
		marginTop: wp(29),
		marginLeft: wp(29),
	},
});
