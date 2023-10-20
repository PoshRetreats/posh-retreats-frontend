import styled from "styled-components";
import BrandColors from "utilities/styles/colors";

type InputStyleProps = {
	type?: string;
};

export const DefaultInputDiv = styled.div<InputStyleProps>`
	width: 100% !important;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 20px;
	color: black;

	p {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		margin-bottom: 10px;
		color: black !important;
		padding: 0px !important;
	}

	input {
		width: 100% !important;
		padding: 16px !important;
		border: 2px solid ${BrandColors.lightGrey} !important;
		border-radius: 8px !important;
		box-sizing: border-box !important;
		height: unset !important;
		font-size: 16px;
		padding-left: ${({ type }: InputStyleProps) =>
			type === "phone" ? "75px !important" : null};

		&.error {
			border: 2px solid ${BrandColors.error} !important;
			outline: none;
			font-weight: normal;
		}

		:focus {
			outline: 2px solid rgba(41, 12, 221, 0.5);
		}
	}

	h4 {
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 18px;
		color: #999ca0;
		width: 90%;
		margin-left: 20px;
	}
`;

export const InputHolder = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row !important;
	align-items: center;
	position: relative;

	h3 {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: grey;
		position: absolute;
		bottom: 20px;
		left: 20px;
	}

	p {
		position: absolute;
		right: 7px;
		cursor: pointer;
		/* background: white !important; */
		padding: 3px;
		margin-top: 6px;
		color: ${BrandColors.main1};
	}
`;

export const ErrMessage = styled.h6`
	color: ${BrandColors.error} !important;
	font-style: normal;
	font-weight: normal;
	font-size: 12px !important;
	text-align: center;
	margin-top: 4px;
`;
