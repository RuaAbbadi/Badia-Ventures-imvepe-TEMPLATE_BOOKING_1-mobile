import React from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import { wp, hp } from "../Dimension/dimen";

const BookTableButton = () => {
	return (
		<View>
			<TouchableOpacity style={styles.Touch}>
				<ImageBackground
					style={{
						resizeMode: "cover",
						borderRadius: 5,
						width: 27.48,
						height: 15.02,
						alignSelf: "center",
						marginTop: hp(14),
					}}
					source={require("../../assets/chair.png")}
				></ImageBackground>
			</TouchableOpacity>
		</View>
	);
};

export default BookTableButton;
const styles = StyleSheet.create({
	Touch: {
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: "#333533",
		width: wp(43),
		height: hp(43),
		marginTop: hp(29),
	},
});
