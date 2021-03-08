import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Menu({ Name, onClick }) {
	return (
		<TouchableOpacity onPress={onClick}>
			<View style={{ flexDirection: "row" }}>
				<Feather
					name="square"
					color={"#FFFFFF"}
					size={40}
					style={{ marginLeft: 30, backgroundColor: "white", borderRadius: 5 }}
				/>
				<Text
					style={{
						fontSize: 22,
						marginLeft: 25,
						marginTop: 5,
						color: "#FFFFFF",
					}}
				>
					{Name}
				</Text>
			</View>
		</TouchableOpacity>
	);
}
