import styled from "styled-components";
import BrandColors from "utilities/styles/colors";
import media from "utilities/styles/media";

type AdminHomeStyleType = {
	padding?: string;
};

export const FirstContainer = styled.div<AdminHomeStyleType>`
	width: 45%;
	background-color: white;
	border-radius: 8px;
  padding: 16px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	${media.tablet`
   
	`}
`;

export const SecondContainer = styled.div<AdminHomeStyleType>`
	width: 48%;
	background-color: white;
	border-radius: 8px;
	padding: 16px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	${media.tablet`
   
	`}
`;

export const PaymentPlanForm = styled.div`
	margin-top: 26px;

	h2 {
		margin-bottom: 16px;
	}

	input {
		width: 100% !important;
		padding: 16px !important;
		border: 2px solid ${BrandColors.lightGrey} !important;
		border-radius: 8px !important;
		box-sizing: border-box !important;
		height: unset !important;
		font-size: 16px;
    margin: 12px 0;
	}
`;

export const PaymentPlansContainer = styled.div`
	margin-top: 20px;
`;

export const PaymentItem = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ddd;
	padding: 10px 0;
`;

export const DeleteButton = styled.button`
	cursor: pointer;
	color: #e74c3c;
	border: none;
	background: none;
`;

export const StyledDateInput = styled.input`
	padding: 8px;
	font-size: 16px;
  width: 100%;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: border-color 0.3s ease-in-out;

	&:focus {
		outline: none;
		border-color: #4caf50; /* Change the border color on focus */
	}
`;
