import styled from "styled-components";
import BrandColors from "utilities/styles/colors";

export const FooterContainer = styled.div`
	/* height: 172px; */
	background: ${BrandColors.main1};
	padding: 26px 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const FooterLogo = styled.img``;

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
	}

	img {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
`;
