import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { wp, hp } from "../../Components/Dimension/dimen";
import { useDispatch, useSelector } from "react-redux";
import { selectedTime, selectedCount } from "../../Store/Products/Actions";

export default BookTable = ({ navigation }) => {
	const dispatch = useDispatch();
	const {
		booking: { day },
	} = useSelector((state) => state.Product);

	const [count, setCount] = useState(3);
	const [time, setTime] = useState("07:00");

	const Save = () => {
		selectedTime(time);
		selectedCount(count);
	};

	const incrementCount = () => {
		setCount(count + 1);
	};

	const DecrementCount = () => {
		setCount(count - 1);
		if (count == 1) {
			setCount(1);
		}
	};
	const pressBack = () => {
		navigation.navigate("Choose");
	};

	const BookNow = () => {
		navigation.navigate("Choose");
	};

	const m = [
		{ name: "1", key: "1" },
		{ name: "2", key: "2" },
		{ name: "3", key: "3" },
		{ name: "3", key: "4" },
		{ name: "3", key: "5" },
	];

	return (
		<View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
			<View style={{ flexDirection: "row", marginTop: hp(47) }}>
				<Feather
					name="arrow-left"
					size={23}
					color="#333533"
					style={{ marginLeft: wp(48), marginTop: hp(5) }}
					onPress={() => pressBack()}
				/>
				<Text style={{ marginLeft: wp(68), fontSize: 23 }}>Book Table </Text>
			</View>

			<View style={{ marginLeft: wp(48), marginTop: hp(68) }}>
				<Text style={{ fontSize: 23 }}>Date</Text>
			</View>

			<View style={{ marginLeft: wp(52), marginTop: hp(12) }}>
				<TouchableOpacity
					style={{
						backgroundColor: "#333533",
						borderRadius: 8,
						width: wp(69),
						height: hp(28),
						alignItems: "center",
						marginBottom: hp(10),
						marginLeft: wp(18),
					}}
				>
					<Text
						style={{
							fontSize: 10,
							color: "white",
							marginTop: hp(8),
							marginBottom: hp(9),
							marginLeft: wp(10),
							marginRight: wp(9),
						}}
					>
						{day}
					</Text>
				</TouchableOpacity>
			</View>

			<View style={{ marginLeft: wp(48), marginTop: hp(21) }}>
				<Text style={{ fontSize: 23 }}>Time</Text>
			</View>

			<View style={{ marginTop: hp(12), marginLeft: wp(52) }}>
				<TouchableOpacity
					style={{
						backgroundColor: "#333533",
						borderRadius: 8,
						width: wp(69),
						height: hp(28),
						alignItems: "center",
						marginBottom: hp(10),
						marginLeft: wp(18),
					}}
				>
					<Text
						style={{
							fontSize: 10,
							color: "white",
							marginTop: hp(8),
							marginBottom: hp(9),
							marginLeft: wp(10),
							marginRight: wp(9),
						}}
					>
						{time}
					</Text>
				</TouchableOpacity>
			</View>

			<View style={{ marginTop: hp(26) }}>
				<TouchableOpacity style={{ alignItems: "center" }}>
					<TextInput
						style={{ fontSize: 49, marginBottom: hp(28) }}
						onChangeText={(time) => setTime(time)}
						defaultValue={time}
					/>
				</TouchableOpacity>
			</View>

			<View style={{ marginLeft: wp(33), flexDirection: "row" }}>
				<Text style={{ fontSize: 22 }}>#persons</Text>

				<View style={styles.Avaiable}>
					<Text
						style={{
							fontSize: 13,
							padding: 5,
							color: "#FFFFFF",
						}}
					>
						{count}
					</Text>
				</View>

				<TouchableOpacity style={styles.Avaiable1} onPress={incrementCount}>
					<AntDesign name="pluscircle" color="#333533" size={20} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.Avaiable1} onPress={DecrementCount}>
					<AntDesign name="minuscircle" color="#333533" size={20} />
				</TouchableOpacity>
			</View>

			<View
				style={{ marginLeft: wp(127), marginTop: 69, marginRight: wp(126) }}
			>
				<TouchableOpacity style={styles.DoneButton} onPress={Save}>
					<Text style={styles.DoneText}>Done</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	Avaiable: {
		borderRadius: 5,
		height: 30,
		width: 29,
		marginLeft: 30,
		backgroundColor: "#333533",
		alignItems: "center",
	},

	Avaiable1: {
		marginLeft: 13,
		marginTop: 6,
		alignItems: "center",
	},

	DoneButton: {
		backgroundColor: "#333533",
		borderRadius: 8,
		width: wp(122),
		height: hp(43),
	},

	DoneText: {
		color: "white",
		fontSize: 14,
		alignSelf: "center",
		marginTop: 10,
	},
});
