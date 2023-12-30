import React from "react";
import {
	FailedContainer,
	InformationContainer,
	LinkArea,
	MainWarningContainer,
	SuccessContainer,
	ToastContainer,
	ToastHead,
	WarningHead,
} from "./style";
import forward from "assets/svgs/forward.svg";
import useToastStore from "./store";
export default function Toast() {
	const toast = useToastStore();
	const { isOpen, heading, link, linkText, messages, isError, toastType } = toast;
	const isInformation = toastType === "information";
	const isWarning = toastType === "warning";
	const isSuccess = toastType === "success";
	const isFailed = toastType === "failed";
	if (isInformation) {
		return (
			<InformationContainer isError={isError} show={isOpen ? "block" : "none"}>
				{heading && (
					<WarningHead>
						<ToastHead>{heading}</ToastHead>
						<h2 onClick={() => toast.closeResponse()}>x</h2>
					</WarningHead>
				)}
				{messages.map((message, i) => (
					<div key={i}>
						<h5>{message}</h5>
						<br />
					</div>
				))}
				{typeof link === "function" ? (
					<LinkArea>
						<h4 onClick={link}>{linkText}</h4>
						<img src={forward} alt="arrow" />
					</LinkArea>
				) : (
					linkText && (
						<LinkArea>
							<a href={link}>
								<h4>{linkText}</h4>
							</a>
							<img src={forward} alt="arrow" />
						</LinkArea>
					)
				)}
			</InformationContainer>
		);
	} else if (isWarning) {
		return (
			<ToastContainer>
				<MainWarningContainer isError={isError} show={isOpen ? "block" : "none"}>
					<WarningHead>
						<ToastHead>{heading}</ToastHead>
						<h2 onClick={() => toast.closeResponse()}>x</h2>
					</WarningHead>
					{messages.map((message, i) => (
						<div key={i}>
							<h5>{message}</h5>
							<br />
						</div>
					))}
				</MainWarningContainer>
			</ToastContainer>
		);
	} else if (isSuccess) {
		return (
			<SuccessContainer isError={isError} show={isOpen ? "block" : "none"}>
				<WarningHead>
					<ToastHead>{heading}</ToastHead>
					<h2 onClick={() => toast.closeResponse()}>x</h2>
				</WarningHead>
				{messages.map((message, i) => (
					<div key={i}>
						<h5>{message}</h5>
						<br />
					</div>
				))}
			</SuccessContainer>
		);
	} else if (isFailed) {
		return (
			<FailedContainer isError={isError} show={isOpen ? "block" : "none"}>
				<WarningHead>
					<ToastHead>{heading}</ToastHead>
					<h2 onClick={() => toast.closeResponse()}>x</h2>
				</WarningHead>
				{messages.map((message, i) => (
					<div key={i}>
						<h5>{message}</h5>
						<br />
					</div>
				))}
			</FailedContainer>
		);
	} else {
		return null;
	}
}
