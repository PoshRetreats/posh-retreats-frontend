import styled from "styled-components";
import BrandColors from "utilities/styles/colors";
import media from "utilities/styles/media";

export const FooterContainer = styled.div`
	/* height: 172px; */
	background: ${BrandColors.main1};
	padding: 26px 64px;
	display: flex;
	align-items: center;

	${media.tablet`
		flex-direction: column;
		align-items: flex-start;
		padding: 26px 16px;
	`}
`;

export const FooterListDataArea = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
`;

export const FooterLogo = styled.img`
	margin-right: 73px;
`;

export const FooterListContainer = styled.div`
	h1 {
		color: var(--text-color, #020e07);
		/* font-family: Quando; */
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	h2 {
		color: var(--text-color, #020e07);
		font-family: Sora;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		cursor: pointer;
		margin-top: 8px;
	}

	img {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
		margin-right: 16px;
		margin-top: 8px;
		cursor: pointer;
	}

	${media.tablet`
		/* flex-direction: column; */
		/* align-items: flex-start;
		margin-right: 30px;
		margin-top: 30px; */
	`}
`;
