import { create } from "zustand";
import {
	closeResponse,
	closeResponseTimeout,
	showBannerToast,
	showFailedToast,
	showInformationToast,
	showResponse,
	showSingleWarningToast,
	showSuccessToast,
	showWarningToast,
} from "./actions";

export const toastObj = {
	isOpen: false,
	isError: false,
	heading: null,
	messages: [],
	// information || warning || error
	toastType: null,
	linkText: null,
	link: null,
};

const useToastStore = create((set, get) => ({
	...toastObj,
	closeResponse: () => closeResponse(set),
	closeResponseTimeout: () => closeResponseTimeout(get),
	showResponse: (heading, message, isError) =>
		showResponse(set, get, heading, message, isError),
	showBannerToast: () => showBannerToast(set),
	showInformationToast: (header, message, linkText, link) =>
		showInformationToast(set, get, header, message, linkText, link),
	showWarningToast: (header, message) => showWarningToast(set, get, header, message),
	showSingleWarningToast: (header, message) =>
		showSingleWarningToast(set, get, header, message),
	showSuccessToast: (header, message) => showSuccessToast(set, get, header, message),
	showFailedToast: (header, message) => showFailedToast(set, get, header, message),
}));

export default useToastStore;
