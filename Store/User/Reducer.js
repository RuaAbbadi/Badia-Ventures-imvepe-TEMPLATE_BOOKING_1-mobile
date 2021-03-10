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
	UPDATE_PROFILE_FROM_FAV_SUCCESS,
} from "./Constants";

export const AuthReducer = (
	initialState = {
		user: {
			name: "",
			email: "",
			image: "",
			password: "",
		},
		token: "",
		isLoading: false,
		failed: false,
		success: false,
		errorMsg: "",
	},
	action
) => {
	switch (action.type) {
		case USER_LOGIN_START:
			return {
				...initialState,
				isLoading: true,
			};
		case USER_LOGIN_SUCCESS:
			return {
				...initialState,
				isLoading: false,
				user: action.payload.user,
				token: action.payload.token,
				success: true,
			};
		case USER_LOGIN_FAIL:
			return {
				...initialState,
				isLoading: false,
				errorMsg: action.payload,
				failed: true,
			};
		case USER_REGISTER_START:
			return {
				...initialState,
				isLoading: true,
				failed: false,
			};
		case USER_REGISTER_SUCCESS:
			return {
				...initialState,
				isLoading: false,
				user: action.payload.user,
				token: action.payload.token,
				failed: false,
				errorMsg: "",
				success: true,
			};
		case USER_REGISTER_FAIL:
			return {
				...initialState,
				isLoading: false,
				errorMsg: action.payload,
				failed: true,
			};
		case IMAGE_UPLOAD_START:
			return {
				...initialState,
				isLoading: true,
			};
		case IMAGE_UPLOAD_SUCCESS:
			return {
				...initialState,
				isLoading: false,
				user: action.payload,
				failed: false,
				errorMsg: "",
				success: true,
			};
		case IMAGE_UPLOAD_FAIL:
			return {
				...initialState,
				isLoading: false,
				errorMsg: action.payload,
				failed: true,
			};
		case UPDATE_PROFILE_START:
			return {
				...initialState,
				isLoading: true,
			};
		case UPDATE_PROFILE_SUCCESS:
			return {
				...initialState,
				isLoading: false,
				user: action.payload.user,
				failed: false,
				errorMsg: "",
				success: action.payload.message,
				token: action.payload.token,
			};

		case UPDATE_PROFILE_FROM_FAV_SUCCESS:
			return {
				...initialState,
				user: action.payload.user,
			};
		case UPDATE_PROFILE_FAIL:
			return {
				...initialState,
				isLoading: false,
				errorMsg: action.payload,
				failed: true,
			};

		default:
			return initialState;
	}
};
