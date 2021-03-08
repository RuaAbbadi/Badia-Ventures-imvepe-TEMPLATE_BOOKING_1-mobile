import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import RNMonthly from "react-native-monthly";
import { hp, wp } from "../Dimension/dimen";

export default function Month({ month, Days }) {
	return (
		<View
			style={{
				marginTop: hp(24),
			}}
		>
			<Text style={{ fontSize: 15, marginLeft: wp(52) }}>{month}</Text>
			<RNMonthly
				numberOfDays={Days}
				activeDays={[12, 24]}
				activeBackgroundColor="#000103"
				inactiveBackgroundColor="#333533"
				itemContainerStyle={{
					borderRadius: 10,
					marginRight: wp(40),
				}}
				style={{
					marginTop: 10,
					marginLeft: wp(50),
				}}
			/>
		</View>
	);
}
