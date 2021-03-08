import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import Month from "../../Components/Calendar/Month";
import { wp, hp } from "../../Components/Dimension/dimen";

const Calendar = ({ navigation }) => {
	const pressBack = () => {
		navigation.navigate("Home");
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<View
					style={{
						marginTop: hp(20),
						justifyContent: "center",
					}}
				>
					<View style={{ width: wp(375), height: hp(48) }}>
						<Feather
							name="arrow-left"
							size={25}
							color="#333533"
							style={{
								marginTop: hp(28),
								marginLeft: wp(31),
								marginRight: wp(328),
							}}
							onPress={() => pressBack()}
						/>
					</View>

					<View style={styles.Text}>
						<Text style={{ fontSize: 26 }}>When do you want To visit us?</Text>
					</View>

					<View style={{}}>
						<Month month={"December"} Days={31} />
						<Month month={"January"} Days={31} />
						<Month month={"Februaury"} Days={28} />
						<Month month={"March"} Days={31} />
						<Month month={"April"} Days={30} />
						<Month month={"May"} Days={31} />
						<Month month={"June"} Days={30} />
						<Month month={"July"} Days={31} />
						<Month month={"Auguest"} Days={31} />
						<Month month={"September"} Days={30} />
						<Month month={"Octobor"} Days={31} />
						<Month month={"November"} Days={30} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
export default Calendar;
const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		height: "100%",
	},

	Text: {
		alignContent: "center",
		marginLeft: wp(52),
		marginTop: hp(30),
		marginRight: wp(95),
	},
});
