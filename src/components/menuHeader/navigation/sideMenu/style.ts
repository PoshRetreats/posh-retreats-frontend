import styled from "styled-components";
import BrandColors from "utilities/styles/colors";
import media from "utilities/styles/media";

type MenuStyleProps = {
	open?: boolean;
};

export const Container = styled.div<MenuStyleProps>`
	background-color: ${BrandColors.main1};
	height: 100vh;
	width: 290px;
	padding: 1rem 1rem;
	/* display: none; */

	/* @media only screen and (max-width: 600px) { */
	display: block;
	transform: ${({ open }: MenuStyleProps) =>
		open ? "translateX(0)" : "translateX(200%)"};
	position: fixed;
	top: 0;
	right: 0;
	z-index: 400;
	transition: all 0.5s linear;
	/* } */
`;

export const Logo = styled.div`
	/* height: 6rem; */
	text-align: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;

	p {
		font-weight: 600;
	}

	div {
		display: flex;
		align-items: center;
	}

	img {
		height: 30px;
		width: 30px;
		margin-right: 12px;
	}

	h1 {
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 24px;
	}
`;

export const Hamburger = styled.img`
	display: none;
	${media.tablet`
	position: absolute;
	right: 20px;
	top: 25px;
	padding: 20px;
	`}
`;

export const SideItems = styled.div`
	margin-top: 2rem;
`;

export const Item = styled.div`
	display: flex;
	/* margin-top: 2rem; */

	img {
		width: 1.3rem;
		margin-right: 0.5rem;
	}
`;

export const Paragraph = styled.div`
	color: white;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	display: flex;
	align-items: center;
`;

export const MenuFlex = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;
	justify-content: space-between;
	margin-top: 20px;
	cursor: pointer;
`;

export const LogoutButton = styled.button`
	border: 2px solid ${BrandColors.white};
	padding: 15px;
	background: none;
	width: 100%;
	color: white;
	border-radius: 8px;
	margin-top: 9rem;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 16px;
	cursor: pointer;
`;
