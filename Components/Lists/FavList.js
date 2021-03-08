import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	ScrollView,
	Dimensions,
	ImageBackground,
} from "react-native";
import Swipeout from "react-native-swipeout";
import { Divider } from "react-native-elements";
import Star from "../Icons/Star";
import { wp, hp } from "../Dimension/dimen";

const FavList = () => {
	var swipeoutBtns = [
		{
			text: "Delete",
			backgroundColor: "#FD5B5B",
		},
	];

	const Favs = [
		{ name: "Pasta", key: "1" },
		{ name: "Pasta", key: "2" },
		{ name: "Pasta", key: "3" },
	];

	return (
		<FlatList
			data={Favs}
			renderItem={({ item }) => (
				<View>
					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
							marginTop: hp(12),
						}}
					>
						<Swipeout
							right={swipeoutBtns}
							buttonWidth={55}
							style={{
								borderRadius: 8,
								width: wp(300),
								height: hp(96),
							}}
						>
							<ImageBackground
								style={{
									height: hp(96),
									width: wp(300),
								}}
								imageStyle={{
									resizeMode: "cover",
									backgroundColor: "#000000",
									opacity: 0.6,
								}}
								source={require("../../assets/pasta.png")}
							>
								<View
									style={{
										flexDirection: "row",
										marginTop: hp(18),
										marginLeft: wp(21),
									}}
								>
									<Text style={{ fontSize: 26, color: "white" }}>
										{item.name}{" "}
									</Text>
								</View>

								<View>
									<Star />
								</View>
							</ImageBackground>
						</Swipeout>
					</View>
					<Divider
						style={{
							backgroundColor: "#000000",
							height: 1,
							marginLeft: wp(5),
							marginRight: wp(5),
							marginTop: hp(12),
						}}
					/>
				</View>
			)}
		/>
	);
};

export default FavList;
