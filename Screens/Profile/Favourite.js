import React, { useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	FlatList,
	ImageBackground,
	ActivityIndicator,
} from "react-native";
import { wp, hp } from "../../Components/Dimension/dimen";
import Swipeout from "react-native-swipeout";
import { Divider } from "react-native-elements";

import Header from "../../Components/header/header";
import Stars from "react-native-stars";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { getFavourites } from "../../Store/Favourites/Actions";
import { useDispatch, useSelector } from "react-redux";

export default function Favourite({ navigation }) {
	const dispatch = useDispatch();
	const { products, isLoading } = useSelector((state) => state.Favourites);
	console.log(products, isLoading);

	const showFavourites = () => {
		dispatch(getFavourites());
	};

	var swipeoutBtns = [
		{
			text: "Delete",
			backgroundColor: "#FD5B5B",
		},
	];

	useEffect(() => {
		showFavourites();
	}, []);
	return (
		<View style={styles.container}>
			<ScrollView>
				<Header />

				<View style={[styles.box, styles.box2]}>
					<Text style={styles.Headertext1}>Favourite</Text>
					{isLoading ? (
						<View>
							<ActivityIndicator size="large" color="#333533" />
						</View>
					) : (
						<FlatList
							data={products}
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
														{item.name}
													</Text>
												</View>

												<View>
													<View
														style={{
															flexDirection: "row",
															marginTop: 15,
															marginLeft: 21,
														}}
													>
														<Stars
															default={3}
															count={5}
															half={true}
															starSize={100}
															fullStar={
																<Fontisto
																	name={"star"}
																	style={[styles.myStarStyle]}
																/>
															}
															emptyStar={
																<Feather
																	name={"star"}
																	style={[
																		styles.myStarStyle,
																		styles.myEmptyStarStyle,
																	]}
																/>
															}
															halfStar={
																<Fontisto
																	name={"star-half"}
																	style={[styles.myStarStyle]}
																/>
															}
														/>
													</View>
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
					)}
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		flexDirection: "column",
	},

	Headertext1: {
		color: "black",
		fontSize: 27,
		marginBottom: hp(40),
	},
	HeaderView: {
		marginTop: hp(29),
		color: "black",
		fontSize: 19,
		marginLeft: wp(29),
	},

	box: {
		flex: 1,
		marginLeft: wp(29),
		marginRight: wp(28),
	},

	box2: {
		flex: 10,
		marginTop: hp(40),
	},
	myStarStyle: {
		color: "#F5CB5C",
		backgroundColor: "transparent",
		padding: 1,
	},
	myEmptyStarStyle: {
		color: "#F5CB5C",
		padding: 1,
	},
});
