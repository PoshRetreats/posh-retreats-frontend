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
	width: 90%;
	padding: 24px 200px 24px 100px;
	position: fixed;
	display: flex;
	justify-content: space-between;
	background-color: ${BrandColors.main1};
	z-index: 20;
	p {
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-bottom: 8px;
	}

	h3 {
		font-size: 20px;
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

export const AdminHeaderSpace = styled.img<AdminMenuStyleProps>`
	margin-bottom: 80px;
	${media.tablet`
	`}
`;

export const CreateTripButton = styled.button<AdminMenuStyleProps>`
	width: 100px;
	padding: 6px;
	border: none;
	border-radius: 4px;
	/* position: absolute;
	right: 50px;
	top: 40px; */
	cursor: pointer;
	background-color: #f7a49d;
	color: white;
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
