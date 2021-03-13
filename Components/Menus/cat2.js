import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { wp, hp } from "../Dimension/dimen";

const Cat2 = () => {
	return (
		<View>
			<TouchableOpacity style={styles.contanier}>
				<Feather
					name="align-left"
					size={28}
					color="#000000"
					style={{
						marginLeft: wp(16),
						marginTop: hp(16),
						marginBottom: hp(16),
						marginRight: wp(13),
						color: "white",
						alignSelf: "center",
					}}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default Cat2;
const styles = StyleSheet.create({
	contanier: {
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: "#333533",
		width: wp(43),
		height: hp(43),
		justifyContent: "center",
		marginRight: wp(8),
		marginLeft: wp(10),
		marginTop: hp(33),
	},
});
