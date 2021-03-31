import React, { Component, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { userRegisterAction } from "../../Store/User/Actions";
import InputButton from "../../Components/Form/InputButton";
import SocialButtons from "../../Components/Form/SocialButtons";
import { wp, hp } from "../../Components/Dimension/dimen";
import InputField from "../../Components/Form/InputField";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../Components/Form/ErrorMessage";

const Signup = ({ navigation }) => {
	const dispatch = useDispatch();
	const { isLoading, success, failed, user, errorMsg } = useSelector(
		(state) => state.Login
	);

	const validationSchema = Yup.object().shape({
		companyName: Yup.string()
			.label("Username")
			.required("Please enter your name")
			.min(6, "Name must have at least 6 characters "),
		email: Yup.string()
			.email("Enter a valid email")
			.required("Please enter your email address"),
		password: Yup.string()
			.required("Please enter your password")
			.min(6, "Password must have at least 6 characters "),
	});

	const handleFormikSubmit = (values) => {
		dispatch(
			userRegisterAction(values.companyName, values.email, values.password)
		);
	};

	console.log(errorMsg);

	useEffect(() => {
		if (success) {
			navigation.navigate("Drawer");
		}
	}, [success]);

	return (
		<View style={styles.container}>
			<View
				style={{ marginTop: hp(90), marginRight: wp(112), marginLeft: wp(54) }}
			>
				<Text style={styles.Text}>Creat new account </Text>

				<View style={{ flexDirection: "row" }}>
					<Text style={styles.Text1}>Welcome to our </Text>
					<Text style={styles.Text1}>application </Text>
				</View>
			</View>

			<Formik
				initialValues={{
					companyName: "",
					email: "",
					password: "",
				}}
				onSubmit={handleFormikSubmit}
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
						<View style={{ marginTop: hp(37) }}>
							<InputField
								name="companyName"
								placeholder="Enter Your Username"
								returnKeyType="done"
								autoCapitalize="none"
								iconName="person"
								iconColor="#333533"
								size={24}
								onBlur={handleBlur("companyName")}
								onChangeText={handleChange("companyName")}
							/>
							<ErrorMessage
								errorValue={touched.companyName && errors.companyName}
							/>
						</View>
						<View>
							<InputField
								name="email"
								placeholder="Enter Your Email"
								keyboardType="email-address"
								returnKeyType="done"
								autoCapitalize="none"
								iconName="email"
								size={21}
								iconColor="#333533"
								onBlur={handleBlur("email")}
								onChangeText={handleChange("email")}
							/>
							<ErrorMessage errorValue={touched.email && errors.email} />
						</View>

						<View>
							<InputField
								name="password"
								placeholder="Enter Your Password"
								autoCapitalize="none"
								secureTextEntry={true}
								iconName="lock"
								size={21}
								iconColor="#333533"
								onBlur={handleBlur("password")}
								onChangeText={handleChange("password")}
							/>
							<ErrorMessage errorValue={touched.password && errors.password} />
						</View>
						<View
							style={{
								shadowColor: "#00000029",
								shadowOffset: { width: 0, height: 0.2 },
								elevation: 8,
								width: wp(232),
								height: hp(43),
							}}
						>
							<InputButton
								onPress={handleSubmit}
								disabled={isLoading}
								type={"submit"}
								loading={isLoading}
								buttonType="solid"
								title="Signup"
								buttonStyle={{ borderColor: "#333533", borderRadius: 10 }}
							/>
							<Text style={styles.ErrorText}>{errorMsg}</Text>
						</View>
					</>
				)}
			</Formik>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginTop: hp(23),
				}}
			>
				<SocialButtons />
			</View>

			<View style={styles.shape}></View>
		</View>
	);
};

export default Signup;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},

	Text: {
		fontSize: 23,
		fontWeight: "bold",
	},

	Text1: {
		fontSize: 17,
	},

	shape: {
		marginTop: hp(67),
		width: wp(123),
		height: wp(266),
		backgroundColor: "#333533",
		borderColor: "#707070",
		borderTopRightRadius: 85,
		borderTopLeftRadius: 85,
	},
	ErrorText: {
		color: "red",
		alignSelf: "center",
	},
});
