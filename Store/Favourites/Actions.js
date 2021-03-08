import {
	ADD_PRODUCT_TO_FAVS_START,
	ADD_PRODUCT_TO_FAVS_SUCCESS,
	ADD_PRODUCT_TO_FAVS_FAIL,
	SET_PRODUCT_ID,
} from "./Constants";
import { apiPost } from "../utils/Api";

export const addProducts = () => {
	return async (dispatch, getState) => {
		const {
			Login: { token },
			Favourites: { productId },
		} = getState();

		dispatch({
			type: ADD_PRODUCT_TO_FAVS_START,
		});

		try {
			const response = await apiPost("/favorites/" + productId, {}, token);

			const { data } = response;

			console.log(data);

			dispatch({
				type: ADD_PRODUCT_TO_FAVS_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const errorMsg = error?.response?.data?.message || "error";
			dispatch({
				type: ADD_PRODUCT_TO_FAVS_FAIL,
				payload: errorMsg,
			});
		}
	};
};

export const setProductId = (id) => ({
	type: SET_PRODUCT_ID,
	payload: id,
});
