import axios from "axios";
const API_URL = "http://192.168.1.111:5000";
const CONFIG = {
	headers: {
		"Content-Type": "application/json",
		"auth-token": "",
	},
};

export const apiPost = async (url, data, token) => {
	return await axios.post(API_URL + url, data, {
		headers: {
			"Content-Type": "application/json",
			"auth-token": token,
		},
	});
};

export const apiGet = async (url, token) => {
	return await axios.get(API_URL + url, {
		headers: {
			"Content-Type": "application/json",
			"auth-token": token,
		},
	});
};

export const apiPut = async (url, data, token) => {
	return await axios.put(API_URL + url, data, {
		headers: {
			"Content-Type": "application/json",
			"auth-token": token,
		},
	});
};

export const apiDelete = async (url, token) => {
	return await axios.delete(API_URL + url, {
		headers: {
			"Content-Type": "application/json",
			"auth-token": token,
		},
	});
};

const CONFIGImage = {
	"Content-Type": "multipart/form-data",
};
export const apiPostImage = async (url, data, userToken) => {
	return await axios.post(API_URL + url, data, {
		headers: {
			"Content-Type": "multipart/form-data",
			"auth-token": userToken,
		},
	});
};
