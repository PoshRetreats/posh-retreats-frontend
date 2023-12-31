import styled from "styled-components";
import BrandColors from "utilities/styles/colors";
import media from "utilities/styles/media";

export const ContactUsContainer = styled.div`
	width: 100%;
	padding: 64px;
	display: flex;

	${media.tablet`
    padding: 16px;
    flex-direction: column;
	`}
`;

export const ContactUsList = styled.div`
	margin-right: 30%;
	h4 {
		margin-top: 32px;
	}
	${media.tablet`
  margin-right: 0px;
	`}
`;

export const ContactUsForm = styled.div`
	border-radius: 16px;
	background: var(--p-1-tint-2, rgba(251, 209, 206, 0.6));
	width: 700px;
	/* height: 522px; */
	margin-top: -150px;
	padding: 32px;
	z-index: 20;

	${media.tablet`
  width: 100%;
  margin-top: 0px;
  margin-top: 64px;
  margin-bottom: 24px;
	`}
`;

export const ContactUsReason = styled.div`
	display: flex;
	align-items: center;
	margin-top: 16px;
	${media.tablet`
	`}

	div {
		background-color: ${BrandColors.main3};
		height: 8px;
		width: 8px;
		border-radius: 50%;
		margin-right: 16px;
	}
`;
