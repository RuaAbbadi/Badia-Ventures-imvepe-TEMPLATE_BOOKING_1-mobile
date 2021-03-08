import axios from "axios";
import {
	USER_LOGIN_FAIL,
	USER_LOGIN_START,
	USER_LOGIN_SUCCESS,
	USER_REGISTER_START,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	IMAGE_UPLOAD_START,
	IMAGE_UPLOAD_SUCCESS,
	IMAGE_UPLOAD_FAIL,
	UPDATE_PROFILE_START,
	UPDATE_PROFILE_SUCCESS,
	UPDATE_PROFILE_FAIL,
} from "./Constants";
import { apiPost, apiPostImage, apiPut } from "../utils/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormData from "form-data";

export const userLoginAction = (email, password) => {
	return async (dispatch, getState) => {
		const {
			Login: { token },
		} = getState();

		dispatch({
			type: USER_LOGIN_START,
		});

		try {
			const response = await apiPost("/auth/login", { password, email }, token);

			const { data } = response;
			console.log(data.user);
			AsyncStorage.setItem("user", JSON.stringify(response.data.user));
			AsyncStorage.setItem("token", JSON.stringify(response.data.token));
			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const errorMsg = error?.response?.data?.message || "error";
			console.log(error);
			dispatch({
				type: USER_LOGIN_FAIL,
				payload: errorMsg,
			});
		}
	};
};

export const userRegisterAction = (companyName, email, password) => {
	return async (dispatch, getState) => {
		dispatch({
			type: USER_REGISTER_START,
		});

		console.log(companyName, email, password);
		try {
			const response = await apiPost(
				"/auth/register",
				{
					name: companyName,
					password,
					email,
				},
				""
			);
			console.log(response);
			const { data } = response;

			AsyncStorage.setItem("user", JSON.stringify(response.data.user));

			dispatch({
				type: USER_REGISTER_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const errorMsg = error?.response?.data?.message || "error";
			dispatch({
				type: USER_REGISTER_FAIL,
				payload: errorMsg,
			});
		}
	};
};

export const handleUploadPhoto = (uri) => {
	return async (dispatch, getState) => {
		const file = new File([uri], "profile-image.jpg", {
			type: "image/jpg",
			lastModified: Date.now(),
		});
		console.log(file.name, "action");
		const {
			Login: { token },
		} = getState();

		dispatch({
			type: IMAGE_UPLOAD_START,
		});
		const formData = new FormData();
		formData.append("upload", {
			...file,
			name: "image.jpg",
			type: "image/jpg",
		});

		try {
			const response = await apiPostImage("/images", formData, token);

			const { data } = response; // imageURL
			//AsyncStorage.setItem("user", JSON.stringify(response.data.user));
			console.log(response);

			dispatch({
				type: IMAGE_UPLOAD_SUCCESS,
				payload: data.user,
			});
		} catch (error) {
			console.log(error);
			const errorMsg = error?.response?.data?.message || "error";
			dispatch({
				type: IMAGE_UPLOAD_FAIL,
				payload: errorMsg,
			});
		}
	};
};

export const UpdateProfile = (name, password) => {
	return async (dispatch, getState) => {
		const {
			Login: { token },
		} = getState();

		console.log(token);
		dispatch({
			type: UPDATE_PROFILE_START,
		});
		console.log(name, password);

		try {
			const response = await apiPut("/users/user", { name, password }, token);
			console.log(token);
			const { data } = response;
			AsyncStorage.setItem("user", JSON.stringify(response.data.user));

			AsyncStorage.setItem("token", JSON.stringify(response.data.token));
			console.log(data);

			dispatch({
				type: UPDATE_PROFILE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const errorMsg = error?.response?.data?.message || "error";
			dispatch({
				type: UPDATE_PROFILE_FAIL,
				payload: errorMsg,
			});
		}
	};
};
