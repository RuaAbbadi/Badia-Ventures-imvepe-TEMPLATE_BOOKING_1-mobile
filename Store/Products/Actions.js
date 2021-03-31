import {
	GET_PRODUCT_START,
	GET_PRODUCT_SUCCESS,
	GET_PRODUCT_FAIL,
	GET_PRODUCT_ID_START,
	GET_PRODUCT_ID_SUCCESS,
	GET_PRODUCT_ID_FAIL,
	SET_PRODUCT_ID,
	SET_SELECTED_DAY,
	SET_SELECTED_TIME,
	SET_SELECTED_COUNT,
} from "./Constants";
import { apiGet, apiPost } from "../utils/Api";

export const getProducts = () => {
	return async (dispatch, getState) => {
		const {
			Login: { token },
		} = getState();

		console.log(token);
		dispatch({
			type: GET_PRODUCT_START,
		});

		try {
			const response = await apiGet("/products", token);

			const { data } = response;

			console.log(data);

			dispatch({
				type: GET_PRODUCT_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const errorMsg = error?.response?.data?.message || "error";
			dispatch({
				type: GET_PRODUCT_FAIL,
				payload: errorMsg,
			});
		}
	};
};

export const setProductId = (id) => ({
	type: SET_PRODUCT_ID,
	payload: id,
});

export const getProductByID = () => {
	return async (dispatch, getState) => {
		const {
			Login: { token },
			Product: { productId },
		} = getState();

		console.log(productId);
		dispatch({
			type: GET_PRODUCT_ID_START,
		});

		try {
			const response = await apiGet("/products/" + productId, token);

			const { data } = response;

			console.log(data.product);

			dispatch({
				type: GET_PRODUCT_ID_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const errorMsg = error?.response?.data?.message || "error";
			dispatch({
				type: GET_PRODUCT_ID_FAIL,
				payload: errorMsg,
			});
		}
	};
};

export const selectedDay = (day) => ({
	type: SET_SELECTED_DAY,
	payload: day,
});

export const selectedTime = (time) => ({
	type: SET_SELECTED_TIME,
	payload: time,
});

export const selectedCount = (count) => ({
	type: SET_SELECTED_TIME,
	payload: count,
});
