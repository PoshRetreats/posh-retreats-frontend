import { AUTH_CONFIG, AUTH_TOKEN_NAME } from "constants/constants";
import { ADMIN_LOGIN } from "routes/frontend";
import Cookies from "universal-cookie";

const cookieInstance = new Cookies();

export function setAuthCookie(token: string | null) {
	cookieInstance.set(AUTH_TOKEN_NAME, token, AUTH_CONFIG);
}

export function removeAuthCookie() {
	cookieInstance.remove(AUTH_TOKEN_NAME, AUTH_CONFIG);
}

export function getAuthCookie() {
	const token = cookieInstance.get(AUTH_TOKEN_NAME);
	return token;
}

export function renameBrowserTab(tabName: string) {
	document.title = tabName;
}

export function forceLogOut() {
	removeAuthCookie();
	window.location.href = ADMIN_LOGIN;
}

export function dateModifier(date: string | number | Date) {
	const newDate = new Date(date);
	const stringDate = newDate.toDateString().slice(0, -5);
	const stringTime = newDate.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});

	return `${stringDate}, ${stringTime}`.toUpperCase();
}

export function dateModifierWithYear(date: string | number | Date) {
	const newDate = new Date(date);
	const stringDate = newDate.toDateString();
	const stringTime = newDate.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});

	return `${stringDate}, ${stringTime}`.toUpperCase();
}

export function timeToStart(minute: number, status: string) {
	if (status === "ended") return "ENDED";

	const hrs = Math.ceil(Number(minute) / 60);
	const day = Math.floor(hrs / 24);
	const hrsLeft = Math.floor(hrs % 24);

	return day >= 2
		? `${day} DAYS LEFT`
		: day < 2 && hrs > 24
		? "1 DAY LEFT"
		: hrsLeft < 24 && hrsLeft > 1
		? `${hrs} HRS LEFT`
		: minute === 1
		? "1 MIN LEFT"
		: hrs <= 1 && minute > 1
		? `${minute} MINS LEFT`
		: "LIVE";
}

export function setSessionData(name: string, obj: any) {
	const stringifyObj = JSON.stringify(obj);
	sessionStorage.setItem(name, stringifyObj);
	return;
}

export function getSessionData(name: string) {
	const sessionItem: string | any = sessionStorage.getItem(name);
	const data = JSON.parse(sessionItem);
	return data;
}

export function removeSessionData(name: string) {
	sessionStorage.removeItem(name);
}

export function setLocalStorageData(name: string, obj: any) {
	const stringifyObj = JSON.stringify(obj);
	localStorage.setItem(name, stringifyObj);
	return;
}

export function getLocalStorageData(name: string) {
	const localStorageItemItem: string | any = localStorage.getItem(name);
	const data = JSON.parse(localStorageItemItem);
	return data;
}

export function removeLocalStorageData(name: string) {
	localStorage.removeItem(name);
}

export function isRunningStandalone() {
	return window.matchMedia("(display-mode: standalone)").matches;
}

export function getCurrentLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				// setLatitude(position.coords.latitude);
				// setLongitude(position.coords.longitude);
			},
			(error) => {
				// setError(error.message);
			}
		);
	} else {
		// setError('Geolocation is not supported by your browser.');
	}
}

export function getTimeAgo(date: any): string {
	const now: any = new Date();
	const previous: any = new Date(date);
	const seconds = Math.floor((now - previous) / 1000);

	if (seconds < 60) {
		return "few seconds";
	}

	const minutes = Math.floor(seconds / 60);
	if (minutes < 60) {
		return `${minutes} ${minutes === 1 ? "min" : "mins"}`;
	}

	const hours = Math.floor(minutes / 60);
	if (hours < 24) {
		return `${hours} ${hours === 1 ? "hr" : "hrs"}`;
	}

	const days = Math.floor(hours / 24);
	if (days < 30) {
		return `${days} ${days === 1 ? "day" : "days"}`;
	}

	const months = Math.floor(days / 30);
	if (months < 12) {
		return `${months} ${months === 1 ? "month" : "months"}`;
	}

	const years = Math.floor(months / 12);
	return `${years} ${years === 1 ? "year" : "years"} `;
}

export function getShortAddress(address: string) {
	const commaIndex = address.lastIndexOf(",");

	if (commaIndex !== -1) {
		const secondToLastCommaIndex = address.lastIndexOf(",", commaIndex - 1);
		if (secondToLastCommaIndex !== -1) {
			const result = address.slice(secondToLastCommaIndex + 1).trim();
			console.log(result);
			return result;
		}
	}
}
