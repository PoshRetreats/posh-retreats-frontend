import styled from "styled-components";
import Faq from "react-faq-component";
import BrandColors from "utilities/styles/colors";
import media from "utilities/styles/media";

export const FAQContainer = styled.div`
	/* width: 100vw; */
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 100px;
	padding: 16px;

	h5 {
		color: var(--text-color, #020e07);
		text-align: center;
		/* font-family: Quando; */
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-bottom: 32px;

		${media.tablet`
    font-size: 18px;
  `}
	}

	h6 {
		color: var(--text-color, #020e07);
		text-align: center;
		/* font-family: Quando; */
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-top: 80px;
		margin-bottom: 30px;
	}

	button {
		color: #fff;
		/* font-family: Quando; */
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		background-color: ${BrandColors.main2};
		border: none;
		padding: 12px;
		border-radius: 8px;
		cursor: pointer;
	}
`;

export const FAQWrapper = styled.div`
	width: 900px;

	${media.tablet`
    width: 100%;
  `}
`;

export const StyledFAQ = styled(Faq)`
	.expanded{
		background-color: red;
	}
`;
