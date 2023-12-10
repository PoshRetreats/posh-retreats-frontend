import styled from "styled-components";
import BrandColors from "utilities/styles/colors";

export const Button = styled.button`
	width: 100%;
	background-color: var(--primary-color-2, ${BrandColors.main2}) !important;
	border-radius: 8px;
	padding: 15px;
	border: none;
	color: ${BrandColors.white};
	margin-top: 24px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 55px;
	font-weight: bold;

	/* .changeBackground {
		background-color: ${BrandColors.main2} !important;
	} */

	img {
		width: 30px;
	}
`;

export const LoadingButtonDiv = styled.div`
	margin-top: 0px;
`;

export const LoadingScreenDiv = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	flex-direction: column;
	z-index: 100;
	padding: 16px;
	position: fixed;
	top: 0;
	left: 0;

	div {
		width: 100%;
	}

	h1 {
		text-align: center;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		margin-top: 16px;
	}

	h5 {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 18px;
		text-align: center;
		margin-top: 16px;
	}
`;

export const ComponentLoadingDiv = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	padding-top: 24px;
`;
