import {
	ADD_PRODUCT_TO_FAVS_START,
	ADD_PRODUCT_TO_FAVS_SUCCESS,
	ADD_PRODUCT_TO_FAVS_FAIL,
	SET_PRODUCT_ID,
	DELETE_PRODUCT_FROM_FAVS_START,
	DELETE_PRODUCT_FROM_FAVS_SUCCESS,
	DELETE_PRODUCT_FROM_FAVS_FAIL,
} from "./Constants";
import { apiPost, apiDelete } from "../utils/Api";

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

			console.log(data);

			dispatch({
				type: ADD_PRODUCT_TO_FAVS_SUCCESS,
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

			console.log(data);

			dispatch({
				type: DELETE_PRODUCT_FROM_FAVS_SUCCESS,
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
