import {
	ADD_PRODUCT_TO_FAVS_START,
	ADD_PRODUCT_TO_FAVS_SUCCESS,
	ADD_PRODUCT_TO_FAVS_FAIL,
	SET_PRODUCT_ID,
} from "./Constants";
export const FavouritesReducer = (
	initialState = {
		products: [],
		isLoading: false,
		failed: false,
		success: false,
		errorMsg: "",
		productId: 0,
		productStatus: {
			product: {},
			isLoading: false,
			failed: false,
			success: false,
			errorMsg: "",
		},
	},
	action
) => {
	switch (action.type) {
		case SET_PRODUCT_ID:
			return { ...initialState, productId: action.payload };

		case ADD_PRODUCT_TO_FAVS_START:
			return {
				...initialState,
				isLoading: true,
			};
		case ADD_PRODUCT_TO_FAVS_SUCCESS:
			return {
				...initialState,
				isLoading: false,
				products: action.payload.products,
				token: action.payload.token,
				success: true,
			};
		case ADD_PRODUCT_TO_FAVS_FAIL:
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
