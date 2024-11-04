import axios from "axios";
import { getAuthCookie, removeAuthCookie } from "utilities/helpers";

function forceLogOut() {
	removeAuthCookie();
	window.location.href = "/";
}

export interface GeneralResponseType {
	error: string | null;
	status: string;
	message: string | null;
	data: any;
	success: boolean;
	statusCode: number | any;
}

export enum CONTENT_TYPES {
	FILE = "file",
	NORMAL = "normal",
}

export function handleUnauthorizedUser(response: any) {
	if (response?.data?.statusCode === 403) {
		alert("User forbidden");
		forceLogOut();
	} else if (response?.data?.statusCode === 401) {
		alert("User unauthorized");
		forceLogOut();
	} else {
		console.warn("Unexpected error response:", response);
	}
}

export async function makePostRequestWithAxios(url: string, body: any) {
	const promise = new Promise((resolve, reject) => {
		axios
			.post(url, body, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${getAuthCookie()}`,
				},
			})
			.then((res: any) => {
				if (res?.data?.success === false) {
					reject(res?.data);
				} else {
					resolve(res?.data);
				}
			})
			.catch(({ response }) => {
				handleUnauthorizedUser(response);
				reject(response?.data || "An unexpected error occurred.");
			});
	});
	return promise;
}

export async function makePutRequestWithAxios(url: string, body: any) {
	const promise = new Promise((resolve, reject) => {
		axios
			.put(url, body, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${getAuthCookie()}`,
				},
			})
			.then((res) => {
				resolve(res?.data);
			})
			.catch(({ response }) => {
				handleUnauthorizedUser(response);
				reject(response?.data || "An unexpected error occurred.");
			});
	});
	return promise;
}

export async function makeDeleteRequestWithAxios(url: string, body: any) {
	const promise = new Promise((resolve, reject) => {
		axios
			.delete(url, {
				data: body,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${getAuthCookie()}`,
				},
			})
			.then((res) => {
				resolve(res?.data?.response);
			})
			.catch(({ response }) => {
				handleUnauthorizedUser(response);
				reject(response?.data || "An unexpected error occurred.");
			});
	});
	return promise;
}

export async function makeGetRequestWithToken(url: string) {
	const promise = new Promise((resolve, reject) => {
		axios
			.get(url, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${getAuthCookie()}`,
				},
			})
			.then((res) => {
				resolve(res?.data);
			})
			.catch(({ response }) => {
				handleUnauthorizedUser(response);
				const errorMessage =
					response?.data?.data?.message ||
					"An error occurred while making a GET request";
				reject(errorMessage);
			});
	});
	return promise;
}
