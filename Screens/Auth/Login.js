import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import InputField from "../../Components/Form/InputField";
import InputButton from "../../Components/Form/InputButton";
import SocialButtons from "../../Components/Form/SocialButtons";
import { userLoginAction } from "../../Store/User/Actions";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../Components/Form/ErrorMessage";
import { wp, hp } from "../../Components/Dimension/dimen";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = ({ navigation }) => {
	const dispatch = useDispatch();
	const { isLoading, success, failed, user, errorMsg } = useSelector(
		(state) => state.Login
	);
	const state = useSelector((state) => state);
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Enter a valid email")
			.required("Please enter your email address"),
		password: Yup.string()
			.required("Please enter your password")
			.min(6, "Password must have at least 6 characters "),
	});

	const handleFormikSubmit = (values) => {
		dispatch(userLoginAction(values.email, values.password));
	};

	//console.log(state);

	useEffect(() => {
		if (success) {
			navigation.navigate("Drawer");
		} else if (user.name) {
			navigation.navigate("Drawer");
		}
	}, [success, user]);

	return (
		<View style={styles.container}>
			<View
				style={{
					marginTop: hp(88),
					marginRight: wp(153),
					marginLeft: wp(54),
					marginBottom: hp(37),
				}}
			>
				<Text style={styles.Text}>Login Page </Text>

				<View style={{ flexDirection: "row" }}>
					<Text style={styles.Text1}>Create New </Text>
					<Text style={styles.Text1}>Account?</Text>
				</View>
			</View>
			<Formik
				initialValues={{
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
						<View>
							<InputField
								name="email"
								placeholder="Enter Your Email"
								keyboardType="email-address"
								returnKeyType="done"
								autoCapitalize="none"
								iconName="person"
								iconColor="#333533"
								size={24}
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
								iconColor="#333533"
								size={21}
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
								title="Login"
								buttonStyle={{ borderColor: "#333533", borderRadius: 10 }}
							/>

							<Text style={styles.ErrorText}>{errorMsg}</Text>
						</View>
					</>
				)}
			</Formik>

			<View style={styles.social}>
				<SocialButtons />
			</View>

			<View style={{ marginTop: hp(25) }}>
				<Text style={{ fontSize: 14, color: "#00000029" }}>
					Forget your password?
				</Text>
			</View>

			<View style={styles.shape}></View>
		</View>
	);
};

export default Login;

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
		marginTop: hp(58),
		width: wp(123),
		height: wp(266),
		backgroundColor: "#333533",
		borderColor: "#707070",
		borderTopRightRadius: 85,
		borderTopLeftRadius: 85,
	},

	social: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: hp(61),
	},

	ErrorText: {
		color: "red",
		alignSelf: "center",
	},
});
