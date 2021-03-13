import {
	SELECT_DAY_START,
	SELECT_DAY_SUCCESS,
	SELECT_DAY_FAIL,
} from "./Constants";
import { apiPost } from "../utils/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const selectedDay = (day) => {
	return async (dispatch, getState) => {
		const {
			Login: { token },
		} = getState();

		dispatch({
			type: SELECT_DAY_START,
		});

		try {
			const response = await apiPost("/", { day }, token);

			const { data } = response;
			AsyncStorage.setItem("day", JSON.stringify(response.data.day));
			AsyncStorage.setItem("token", JSON.stringify(response.data.token));
			dispatch({
				type: SELECT_DAY_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const errorMsg = error?.response?.data?.message || "error";
			console.log(error);
			dispatch({
				type: SELECT_DAY_FAIL,
				payload: errorMsg,
			});
		}
	};
};
