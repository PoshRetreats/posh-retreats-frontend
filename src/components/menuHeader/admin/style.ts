import styled from "styled-components";
import BrandColors from "utilities/styles/colors";
import media from "utilities/styles/media";

type AdminMenuStyleProps = {
	img?: string;
	isActive?: boolean;
};

export const AdminMenuContainer = styled.div<AdminMenuStyleProps>`
	width: 300px;
	height: 100vh;
	background-color: ${BrandColors.main1};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px 0;
	position: fixed;
	left: 0;

	${media.tablet`
	`}
`;

export const AdminHeaderTitleDiv = styled.div<AdminMenuStyleProps>`
	width: 100%;
	p {
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-bottom: 8px;
	}

	h3 {
		font-size: 40px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
	${media.tablet`
	`}
`;

export const MenuList = styled.div<AdminMenuStyleProps>`
	margin-top: 64px;
	width: 100%;
	${media.tablet`
	`}
`;

export const MenuLogo = styled.img<AdminMenuStyleProps>`
	width: 100px;
	${media.tablet`
	`}
`;

export const MenuOptionContainer = styled.div<AdminMenuStyleProps>`
	width: 100%;
	height: 56px;
	display: flex;
	align-items: center;
	padding-left: 40px;
	/* justify-content: center; */
	margin-top: 12px;
	display: flex;
	background-color: ${({ isActive }) => (isActive ? "#F7A49D" : null)};
	cursor: pointer;

	p {
		margin-left: 20px;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		color: ${({ isActive }) => (isActive ? "white" : "#020E07")};
	}

	${media.tablet`
	`}
`;
