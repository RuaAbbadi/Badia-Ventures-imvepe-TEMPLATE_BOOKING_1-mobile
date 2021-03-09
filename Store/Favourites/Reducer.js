import {
	ADD_PRODUCT_TO_FAVS_START,
	ADD_PRODUCT_TO_FAVS_SUCCESS,
	ADD_PRODUCT_TO_FAVS_FAIL,
	DELETE_PRODUCT_FROM_FAVS_START,
	DELETE_PRODUCT_FROM_FAVS_SUCCESS,
	DELETE_PRODUCT_FROM_FAVS_FAIL,
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
				productStatus: {
					...initialState.productStatus,
					isLoading: true,
				},
			};
		case ADD_PRODUCT_TO_FAVS_SUCCESS:
			return {
				...initialState,
				productStatus: {
					...initialState.productStatus,
					isLoading: false,
					product: action.payload.product,
					success: true,
				},
			};
		case ADD_PRODUCT_TO_FAVS_FAIL:
			return {
				...initialState,
				productStatus: {
					...initialState.productStatus,
					isLoading: false,
					errorMsg: action.payload,
					failed: true,
				},
			};

		case DELETE_PRODUCT_FROM_FAVS_START:
			return {
				...initialState,
				productStatus: {
					...initialState.productStatus,
					isLoading: true,
				},
			};
		case DELETE_PRODUCT_FROM_FAVS_SUCCESS:
			return {
				...initialState,
				productStatus: {
					...initialState.productStatus,
					isLoading: false,
					product: action.payload.product,
					success: true,
				},
			};
		case DELETE_PRODUCT_FROM_FAVS_FAIL:
			return {
				...initialState,
				productStatus: {
					...initialState.productStatus,
					isLoading: false,
					errorMsg: action.payload,
					failed: true,
				},
			};

		default:
			return initialState;
	}
};
