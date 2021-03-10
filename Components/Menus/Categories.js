import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { wp, hp } from "../Dimension/dimen";

export default class Categories extends Component {
	render() {
		return (
			<View>
				<TouchableOpacity
					style={styles.contanier}
					onPress={() => this.RBSheet.open()}
				>
					<Entypo
						name="dots-three-vertical"
						size={20}
						color="#000000"
						style={{
							color: "white",
							alignSelf: "center",
						}}
					/>
				</TouchableOpacity>

				<RBSheet
					ref={(ref) => {
						this.RBSheet = ref;
					}}
					height={hp(318)}
					openDuration={250}
					customStyles={{
						container: {
							borderTopEndRadius: 6,
							borderTopStartRadius: 6,
							backgroundColor: "#333533",
							opacity: 0.9,
							alignSelf: "center",
						},
						wrapper: {
							backgroundColor: "transparent",
							borderTopEndRadius: 6,
							borderTopStartRadius: 6,
							width: wp(317),
							alignSelf: "center",
							marginBottom: 10,
							marginTop: hp(424),
						},
					}}
				>
					<View style={{ marginTop: hp(23) }}>
						<TouchableOpacity style={{ alignItems: "center" }}>
							<Text style={{ fontSize: 22, color: "#FFFFFF" }}>
								Categories1
							</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{ alignItems: "center" }}>
							<Text
								style={{ fontSize: 22, color: "#FFFFFF", marginTop: hp(24) }}
							>
								Categories2
							</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{ alignItems: "center" }}>
							<Text
								style={{ fontSize: 22, color: "#FFFFFF", marginTop: hp(24) }}
							>
								Categories3
							</Text>
						</TouchableOpacity>
					</View>
				</RBSheet>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	contanier: {
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: "#333533",
		width: wp(43),
		height: hp(43),
		justifyContent: "center",
		marginRight: wp(28),
		marginLeft: wp(8),
	},
});
