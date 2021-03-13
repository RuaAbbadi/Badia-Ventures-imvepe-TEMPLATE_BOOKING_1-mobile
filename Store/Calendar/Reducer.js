import {
	SELECTED_DAY_START,
	SELECTED_DAY_SUCCESS,
	SELECTED_DAY_FAIL,
} from "./Constants";

export const CalendarReducer = (
	initialState = {
		daySelected: {},
		token: "",
		isLoading: false,
		failed: false,
		success: false,
		errorMsg: "",
	},
	action
) => {
	switch (action.type) {
		case SELECTED_DAY_START:
			return {
				...initialState,
				isLoading: true,
			};
		case SELECTED_DAY_SUCCESS:
			return {
				...initialState,
				isLoading: false,
				day: action.payload.day,
				token: action.payload.token,
				success: true,
			};
		case SELECTED_DAY_FAIL:
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
