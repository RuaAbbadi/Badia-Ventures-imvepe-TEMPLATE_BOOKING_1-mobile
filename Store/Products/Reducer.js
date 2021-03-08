import {
	GET_PRODUCT_START,
	GET_PRODUCT_SUCCESS,
	GET_PRODUCT_FAIL,
	GET_PRODUCT_ID_START,
	GET_PRODUCT_ID_SUCCESS,
	GET_PRODUCT_ID_FAIL,
	SET_PRODUCT_ID,
} from "./Constants";

export const ProductReducer = (
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
		case GET_PRODUCT_START:
			return {
				...initialState,
				isLoading: true,
			};
		case GET_PRODUCT_SUCCESS:
			return {
				...initialState,
				isLoading: false,
				products: action.payload.products,
				token: action.payload.token,
				success: true,
			};
		case GET_PRODUCT_FAIL:
			return {
				...initialState,
				isLoading: false,
				errorMsg: action.payload,
				failed: true,
			};

		case GET_PRODUCT_ID_START:
			return {
				...initialState,
				productStatus: {
					...initialState.productStatus,
					isLoading: true,
				},
			};
		case GET_PRODUCT_ID_SUCCESS:
			return {
				...initialState,
				productStatus: {
					...initialState.productStatus,
					isLoading: false,
					product: action.payload.product,
					success: true,
				},
			};
		case GET_PRODUCT_ID_FAIL:
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
