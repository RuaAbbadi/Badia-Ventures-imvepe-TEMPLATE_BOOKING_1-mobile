import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Dimensions,
	Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { wp, hp } from "../../Components/Dimension/dimen";
import Header from "../../Components/header/header";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { handleUploadPhoto, UpdateProfile } from "../../Store/User/Actions";
import { useDispatch, useSelector } from "react-redux";
import InputButton from "../../Components/Form/InputButton";
import InputField from "../../Components/Form/InputField";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../Components/Form/ErrorMessage";

export default function Profile() {
	const dispatch = useDispatch();
	const { user, errorMsg, isLoading, success } = useSelector(
		(state) => state.Login
	);
	const state = useSelector((state) => state);

	const [image, setImage] = useState(null);
	const [file, setFile] = useState(null);
	const [imgBlob, setImgBlob] = useState(null);
	const [name, setName] = useState(user.name);
	const [password, setPassword] = useState(user.password);

	const handleImage = () => {
		dispatch(handleUploadPhoto(imgBlob));
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.label("Username")
			.min(6, "Name must have at least 6 characters "),
		password: Yup.string().min(6, "Password must have at least 6 characters "),
	});

	const updateUserProfile = (values) => {
		dispatch(UpdateProfile(values.name, values.password));
	};

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.cancelled) {
			setImage(result.uri);
			return;
		}
		const { uri } = result;

		console.log("File", file.name);
		console.log(uri);
		console.log(result);

		setImgBlob(uri);
	};

	useEffect(() => {
		(async () => {
			if (Platform.OS !== "web") {
				const {
					status,
				} = await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== "granted") {
					alert("Sorry, we need camera roll permissions to make this work!");
				}
			}
		})();
	}, []);
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row", marginTop: hp(19) }}>
				<Header />
			</View>

			<ScrollView>
				<TouchableOpacity onPress={pickImage}>
					<View style={[styles.profilestyle, styles.profile2]}>
						{image && (
							<Image
								source={{ uri: image }}
								style={[styles.profilestyle, styles.profile]}
							/>
						)}
					</View>
				</TouchableOpacity>
				<Formik
					initialValues={{
						name: "",
						password: "",
					}}
					onSubmit={updateUserProfile}
					validationSchema={validationSchema}
				>
					{({
						handleChange,
						values,
						handleSubmit,
						errors,
						isValid,
						isSubmitting,
						touched,
						handleBlur,
					}) => (
						<>
							<View style={styles.input}>
								<Text style={{ margin: 18, marginBottom: 2, fontSize: 15 }}>
									Name
								</Text>

								<TextInput
									name="name"
									style={{ color: "#333533", fontSize: 16 }}
									placeholder={name}
									placeholderTextColor={"black"}
									onBlur={handleBlur("name")}
									onChangeText={handleChange("name")}
								/>
							</View>

							<ErrorMessage errorValue={touched.password && errors.password} />

							<View style={styles.input2}>
								<Text style={{ margin: 18, marginBottom: 2, fontSize: 15 }}>
									Email
								</Text>
								<TextInput
									style={{ color: "#333533", fontSize: 16 }}
									placeholder={user.email}
									placeholderTextColor={"black"}
									editable={false}
								/>
							</View>

							<View style={styles.input}>
								<Text style={{ margin: 18, fontSize: 15 }}>Password</Text>
								<TextInput
									name="password"
									style={{ color: "#333533", fontSize: 16 }}
									placeholder={password}
									placeholderTextColor={"black"}
									secureTextEntry={true}
									onBlur={handleBlur("password")}
									onChangeText={handleChange("password")}
								/>
							</View>

							<ErrorMessage errorValue={touched.password && errors.password} />

							<View style={{ width: 150, alignSelf: "center", marginTop: 5 }}>
								<InputButton
									onPress={handleSubmit}
									disabled={isLoading}
									type={"submit"}
									loading={isLoading}
									buttonType="solid"
									title="Save"
									buttonStyle={{
										borderColor: "#333533",
										borderRadius: 10,
									}}
								/>
								<View>
									<Text style={styles.ErrorText}>{errorMsg}</Text>
									<Text style={styles.SuccessText}>{success}</Text>
								</View>
							</View>
						</>
					)}
				</Formik>
				{/* 
				<View style={{ alignItems: "center" }}>
					<TouchableOpacity>
						<Text
							style={{
								fontSize: 15,
								color: "#00000029",
							}}
						>
							{" "}
							Change Password
						</Text>
					</TouchableOpacity>
				</View> */}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		height: "100%",
	},

	input: {
		flex: 1,
		width: wp(318),
		height: hp(56),
		borderRadius: 5,
		marginTop: 10,
		fontSize: 11,
		backgroundColor: "white",
		shadowColor: "#00000029",
		shadowOffset: { width: 0, height: 0.2 },
		elevation: 5,
		flexDirection: "row",
		alignSelf: "center",
	},
	input2: {
		flex: 1,
		width: wp(318),
		height: hp(56),
		borderRadius: 5,
		fontSize: 11,
		backgroundColor: "white",
		shadowColor: "#00000029",
		shadowOffset: { width: 0, height: 0.2 },
		elevation: 5,
		flexDirection: "row",
		alignSelf: "center",
	},

	profile: {
		position: "absolute",
		borderWidth: 4,
		borderColor: "#333533",
		alignItems: "center",
		justifyContent: "center",
		width: hp(200),
		height: hp(200),
		backgroundColor: "#fff",
		borderRadius: 100,
		marginBottom: 64,
	},

	profile2: {
		borderWidth: 4,
		borderColor: "#333533",
		alignItems: "center",
		justifyContent: "center",
		width: hp(200),
		height: hp(200),
		backgroundColor: "#fff",
		borderRadius: 100,
		marginBottom: 64,
		marginLeft: wp(90),
	},

	profilestyle: {
		marginTop: 52,
	},
	ErrorText: {
		color: "red",
		alignSelf: "center",
	},
	SuccessText: {
		color: "#32cd32",
		alignItems: "center",
		alignSelf: "center",
		marginLeft: wp(30),
	},
});
