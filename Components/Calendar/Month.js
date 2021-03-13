import React from "react";
import { View, Text, Alert } from "react-native";
import RNMonthly from "react-native-monthly";
import { hp, wp } from "../Dimension/dimen";

export default function Month({ month, Days }) {
	return (
		<View
			style={{
				marginTop: hp(24),
			}}
		>
			<Text style={{ fontSize: 15, marginLeft: wp(13) }}>{month}</Text>
			<RNMonthly
				numberOfDays={Days}
				activeDays={[12, 24]}
				activeBackgroundColor="#000103"
				inactiveBackgroundColor="#333533"
				itemContainerStyle={{
					borderRadius: 10,
					padding: 10,
				}}
				//today={}
				style={{
					marginTop: 10,
				}}
			/>
		</View>
	);
}
