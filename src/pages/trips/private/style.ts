import styled from "styled-components";
import media from "utilities/styles/media";

export const RequestFormLinkArea = styled.div`
	display: flex;
	justify-content: center;
	button {
		border-radius: 8px;
		color: white;
		padding: 12px;
		border: none;
		margin-top: 80px;
		margin-bottom: 80px;
		background: var(--primary-color-2, #0b4525);

		${media.tablet`
      margin-top: 40px;
      margin-bottom: 40px;
    `}
	}

	${media.tablet`

	`}
`;

export const TripForm = styled.div`
	width: 700px;
	border-radius: 16px;
	background: var(--p-1-tint-2, rgba(251, 209, 206, 0.6));
	padding: 32px;

	form {
		padding-left: 12px;
	}
	h1 {
		color: var(--text-color, #020e07);
		font-size: 28px;
		font-style: normal;
		font-weight: 500;
		margin-bottom: 40px;

		${media.tablet`
    font-size: 24px;
	`}
	}
	${media.tablet`
    width: 100%;
    padding: 24px 16px;
	`}
`;

export const BasicInputArea = styled.div`
	width: 100%;
	margin-top: 30px;

	h3 {
		font-size: 16px;
		font-style: normal;
		font-weight: 400;

		${media.tablet`
    font-size: 14px;
		font-style: normal;
		font-weight: 400;
	`}
	}

	input {
		width: 100%;
		background-color: transparent;
		border-top: none;
		border-left: none;
		border-right: none;
		font-size: 14px;
		font-style: normal;
		padding: 12px;
		border-bottom: 1px solid black;

		&:focus {
			outline: none;
		}
		${media.tablet`

	`}
	}
	${media.tablet`

	`}
`;

export const FormArea = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 120px;
	margin-bottom: 120px;

	${media.tablet`
  padding: 12px;
  margin-top: 60px;
	margin-bottom: 60px;
	`}
`;

export const FormButton = styled.button`
	width: 100%;
	padding: 16px;
	border: none;
	color: white;
	border-radius: 8px;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	margin-top: 40px;
	background: var(--primary-color-2, #0b4525);

	${media.tablet`

	`}
`;
