import { toastObj } from ".";

export function closeResponse(set) {
	set({
		...toastObj,
	});
}

export function closeResponseTimeout(get) {
	const closeResponse = get().closeResponse;
	setTimeout(() => closeResponse(), 6000);
}

export function showResponse(set, get, heading, message, isError) {
	const closeResponseTimeout = get().closeResponseTimeout;
	const messages = get().messages;
	set({
		isOpen: true,
		isError,
		heading,
		messages: [...messages, message],
	});

	closeResponseTimeout();
}

export function showInformationToast(set, get, heading, message, linkText, link) {
	// const closeResponseTimeout = get().closeResponseTimeout;
	const messages = get().messages;
	const isOpen = get().isOpen;
	if (isOpen) {
		return;
	}
	set({
		isOpen: true,
		toastType: "information",
		messages: [...messages, message],
		link,
		linkText: linkText?.toUpperCase(),
		heading,
	});
	// closeResponseTimeout();
}

export function showBannerToast(set) {
	// const closeResponseTimeout = get().closeResponseTimeout;
	set({
		isOpen: true,
	});

	// closeResponseTimeout();
}

export function showWarningToast(set, get, heading, message) {
	const closeResponseTimeout = get().closeResponseTimeout;
	const messages = get().messages;
	set({
		isOpen: true,
		toastType: "warning",
		messages: [...messages, message],
		heading,
	});

	closeResponseTimeout();
}

export function showSingleWarningToast(set, get, heading, message) {
	const closeResponseTimeout = get().closeResponseTimeout;
	set({
		isOpen: true,
		toastType: "warning",
		messages: [message],
		heading,
	});

	closeResponseTimeout();
}

export function showSuccessToast(set, get, heading, message) {
	const closeResponseTimeout = get().closeResponseTimeout;
	const messages = get().messages;
	set({
		isOpen: true,
		toastType: "success",
		messages: [...messages, message],
		heading,
	});

	closeResponseTimeout();
}

export function showFailedToast(set, get, heading, message) {
	const closeResponseTimeout = get().closeResponseTimeout;
	const messages = get().messages;
	set({
		isOpen: true,
		toastType: "failed",
		messages: [...messages, message],
		heading,
	});

	closeResponseTimeout();
}
