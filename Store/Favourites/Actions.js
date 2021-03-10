import {
	ADD_PRODUCT_TO_FAVS_START,
	ADD_PRODUCT_TO_FAVS_SUCCESS,
	ADD_PRODUCT_TO_FAVS_FAIL,
	SET_PRODUCT_ID,
	DELETE_PRODUCT_FROM_FAVS_START,
	DELETE_PRODUCT_FROM_FAVS_SUCCESS,
	DELETE_PRODUCT_FROM_FAVS_FAIL,
	GET_FAVS_START,
	GET_FAVS_SUCCESS,
	GET_FAVS_FAIL,
} from "./Constants";
import { apiPost, apiDelete, apiGet } from "../utils/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UPDATE_PROFILE_FROM_FAV_SUCCESS } from "../User/Constants";

export const addProducts = (id) => {
	return async (dispatch, getState) => {
		const {
			Login: { token },
		} = getState();

		dispatch({
			type: ADD_PRODUCT_TO_FAVS_START,
		});

		try {
			const response = await apiPost("/favorites/" + id, {}, JSON.parse(token));

			const { data } = response;
			AsyncStorage.setItem("user", JSON.stringify(response.data.user));
			console.log(data);

			dispatch({
				type: ADD_PRODUCT_TO_FAVS_SUCCESS,
				payload: data,
			});
			dispatch({
				type: UPDATE_PROFILE_FROM_FAV_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const errorMsg = error?.response?.data?.message || "error";
			console.log(error);
			dispatch({
				type: ADD_PRODUCT_TO_FAVS_FAIL,
				payload: errorMsg,
			});
		}
	};
};

export const DeleteProducts = (id) => {
	return async (dispatch, getState) => {
		const {
			Login: { token },
		} = getState();

		dispatch({
			type: DELETE_PRODUCT_FROM_FAVS_START,
		});

		try {
			const response = await apiDelete("/favorites/" + id, JSON.parse(token));

			const { data } = response;
			AsyncStorage.setItem("user", JSON.stringify(response.data.user));
			console.log(data);

			dispatch({
				type: DELETE_PRODUCT_FROM_FAVS_SUCCESS,
				payload: data,
			});

			dispatch({
				type: UPDATE_PROFILE_FROM_FAV_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const errorMsg = error?.response?.data?.message || "error";
			console.log(error);
			dispatch({
				type: DELETE_PRODUCT_FROM_FAVS_FAIL,
				payload: errorMsg,
			});
		}
	};
};

export const setProduct_Id = (id) => ({
	type: SET_PRODUCT_ID,
	payload: id,
});

export const getFavourites = () => {
	return async (dispatch, getState) => {
		const {
			Login: { token },
		} = getState();

		console.log(token);
		dispatch({
			type: GET_FAVS_START,
		});

		try {
			const response = await apiGet("/favorites?page=1", JSON.parse(token));

			const { data } = response;

			console.log(data);

			dispatch({
				type: GET_FAVS_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const errorMsg = error?.response?.data?.message || "error";
			dispatch({
				type: GET_FAVS_FAIL,
				payload: errorMsg,
			});
		}
	};
};
