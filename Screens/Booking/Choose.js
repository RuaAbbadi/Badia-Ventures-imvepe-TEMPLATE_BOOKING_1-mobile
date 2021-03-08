import "react-native-gesture-handler";
import React, { useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Dimensions,
	ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import LoveIcon from "../../Components/Icons/LoveIcon";
const { width } = Dimensions.get("window");
import CheckboxFormX from "react-native-checkbox-form";
import { wp, hp } from "../../Components/Dimension/dimen";
import { getProductByID } from "../../Store/Products/Actions";
import { useDispatch, useSelector } from "react-redux";

const height = width;

export default function Choose({ navigation }) {
	const dispatch = useDispatch();
	const {
		productStatus: { product, isLoading },
	} = useSelector((state) => state.Product);
	const onSelect = (item) => {
		console.log(item);
	};
	const mockData = [
		{
			label: "Take Away",
			value: "one",
		},
	];

	const productDetails = () => {
		dispatch(getProductByID());
	};

	const BookNow = () => {
		navigation.navigate("BookTable");
	};
	const pressBack = () => {
		navigation.navigate("Home");
	};

	useEffect(() => {
		productDetails();
	}, []);

	return isLoading ? (
		<View style={{ marginTop: "45%" }}>
			<ActivityIndicator size="large" color="#333533" />
		</View>
	) : (
		<View style={{ flexDirection: "row" }}>
			<View>
				<View
					style={{
						marginTop: wp(35),
						marginLeft: wp(32),
						marginRight: wp(293.44),
						width: wp(49.56),
						height: wp(49.56),
						borderRadius: 40,
						backgroundColor: "#333533",
						alignItems: "center",
						position: "absolute",
						zIndex: 3,
						justifyContent: "center",
					}}
				>
					<Feather
						name="arrow-left"
						size={20}
						color="#FFFFFF"
						style={{
							marginRight: wp(16.56),
							marginLeft: wp(15),
							marginTop: hp(17),
							marginBottom: hp(16.56),
						}}
						onPress={() => pressBack()}
					/>
				</View>

				<Image
					source={require("../../assets/pasta.png")}
					style={{
						width: wp(375),
						height: hp(433),
						resizeMode: "cover",
					}}
				></Image>
			</View>

			{/*Info view */}
			<View style={styles.infoview}>
				{/* Love Icon */}
				<LoveIcon />

				<View style={styles.info}>
					<View>
						<Text style={{ fontSize: 23, color: "#333533" }}>
							{product?.name}
						</Text>
						<Text style={{ fontSize: 13, color: "#333533" }}>
							{product?.description}
						</Text>
					</View>

					<View style={{ flexDirection: "column", marginTop: 20 }}>
						<View style={{ flexDirection: "row" }}>
							<Text style={{ color: "#333533", fontSize: 16 }}>
								How many ?{" "}
							</Text>

							<View style={styles.Avaiable}>
								<Text
									style={{
										fontSize: 13,
										padding: 4,
										color: "#FFFFFF",
									}}
								>
									3
								</Text>
							</View>

							<TouchableOpacity style={styles.Avaiable1}>
								<AntDesign name="pluscircle" color="#333533" size={18} />
							</TouchableOpacity>
							<TouchableOpacity style={styles.Avaiable1}>
								<AntDesign name="minuscircle" color="#333533" size={18} />
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: "row", marginTop: hp(12) }}>
							<Text style={{ color: "#333533", fontSize: 15 }}>
								Estimation Time:
							</Text>
							<Text
								style={{
									color: "#333533",
									fontSize: 14,
									marginLeft: 10,
									fontWeight: "500",
								}}
							>
								{product.eta} minuttes
							</Text>
							<Text
								style={{ color: "#333533", fontSize: 17, marginLeft: wp(30) }}
							>
								Price :{" "}
							</Text>
							<Text
								style={{ color: "#333533", fontSize: 17, fontWeight: "bold" }}
							>
								{product.price}$
							</Text>
						</View>

						<View style={{ flexDirection: "row", marginTop: hp(14) }}>
							<Text style={{ color: "#333533", fontSize: 16 }}>
								Take Away :
							</Text>
							<View>
								<CheckboxFormX
									style={{ width: 375 - 50 }}
									dataSource={mockData}
									itemShowKey="label"
									itemCheckedKey="RNchecked"
									iconSize={25}
									formHorizontal={true}
									labelHorizontal={true}
									onChecked={(item) => onSelect(item)}
									iconColor={"#333533"}
									textStyle={{ color: "white" }}
									style={{ marginLeft: 20, marginBottom: 7 }}
								/>
							</View>
						</View>

						<View style={{ flexDirection: "row", marginTop: hp(21) }}>
							<Text style={{ color: "#333533", fontSize: 25 }}>
								Total : 60${" "}
							</Text>

							{/* Button */}
							<TouchableOpacity
								style={styles.DoneButton}
								onPress={() => BookNow()}
							>
								<Text style={styles.DoneText}>Done </Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity>
							<Text
								style={{
									color: "#333533",
									fontSize: 17,
									marginLeft: wp(5),
									marginTop: hp(4),
								}}
							>
								Add to carts{" "}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
	},

	infoview: {
		position: "absolute",
		backgroundColor: "white",
		zIndex: 2,
		width: wp(375),
		height: hp(409),
		marginTop: hp(409) - 40,
		borderTopStartRadius: 9,
		borderTopEndRadius: 9,
	},

	info: {
		marginLeft: wp(34),
	},

	Avaiable: {
		borderRadius: 5,
		width: "7%",
		height: "100%",
		marginLeft: 13,
		backgroundColor: "#333533",
		alignItems: "center",
		shadowOpacity: 0.25,
		elevation: 5,
	},

	Avaiable1: {
		marginLeft: 13,
		marginTop: 4,
		alignItems: "center",
	},

	DoneButton: {
		backgroundColor: "#333533",
		borderRadius: 6,
		marginRight: wp(33),
		marginLeft: wp(62),
		width: wp(122),
		height: hp(43),
	},

	DoneText: {
		color: "white",
		fontSize: 14,
		alignSelf: "center",
		padding: 10,
	},
});
