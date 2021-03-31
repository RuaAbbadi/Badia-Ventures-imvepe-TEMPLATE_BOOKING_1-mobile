import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import moment from "moment";
import { CalendarList } from "react-native-calendars";
import { wp, hp } from "../../Components/Dimension/dimen";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectedDay } from "../../Store/Products/Actions";

const Calendar = ({ navigation }) => {
	const dispatch = useDispatch();
	const {
		productStatus: { product, isLoading },
	} = useSelector((state) => state.Product);

	const [day, setDay] = useState(null);

	const pressBack = () => {
		navigation.navigate("Home");
	};

	const getDay = (day) => {
		setDay(day);
		navigation.navigate("bookTable");
		selectedDay(day);
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
						<Text style={{ fontSize: 26, fontWeight: "bold" }}>
							When do you want To visit us?
						</Text>
					</View>

					<View
						style={{
							marginLeft: wp(40),
							marginRight: wp(51),
							marginTop: hp(24),
						}}
					>
						<CalendarList
							// Callback which gets executed when visible months change in scroll view. Default = undefined
							onVisibleMonthsChange={(months) => {
								console.log("now these months are visible", months);
							}}
							// Max amount of months allowed to scroll to the past. Default = 50
							pastScrollRange={0}
							// Max amount of months allowed to scroll to the future. Default = 50
							futureScrollRange={4}
							// Enable or disable scrolling of calendar list
							scrollEnabled={true}
							// Enable or disable vertical scroll indicator. Default = false
							showScrollIndicator={true}
							onDayPress={getDay}
							theme={{
								todayTextColor: "#F5CB5C",
								"stylesheet.calendar.header": {
									monthText: {
										fontSize: 15,
										marginRight: wp(150),
										marginBottom: hp(10),
									},
									dayHeader: {
										marginBottom: 7,
										color: "#E1E1E1",
									},
									week: {
										marginTop: 10,
										flexDirection: "row",
										justifyContent: "space-around",
									},
								},
							}}
							markingType={"period"}
							markedDates={product.Reserved}
						/>
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
