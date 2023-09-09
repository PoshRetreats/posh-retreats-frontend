import styled from "styled-components";
import media from "utilities/styles/media";

export const FullTop = styled.div`
	width: 100vw;
	position: fixed;
	top: 0;
	z-index: 10;
`;

export const TopCenterWrapper = styled.div`
	width: 500px;
	height: 64px;
	display: flex;
	z-index: ${({ z }: any) => z};
	align-items: center;
	background-color: white;
	padding: 0 20px;
	border: 1px solid #ebebeb;
	position: relative;
	/* left: 0; */
	z-index: 1;
	margin: 0 auto;

	img {
		cursor: pointer;
		width: unset !important;
		height: unset !important;
	}

	${media.mobile`
    width: 100%;
  `}
`;

export const ImageHolder = styled.div`
	height: 30px;
	width: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const BottomCenterWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	h3 {
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		margin-right: 40px;
		cursor: pointer;
	}

	${media.tablet`
  display: none;
  `}
`;

export const NavbarContainer = styled.div`
	width: 100%;
	height: 100%;
	/* position: fixed; */
`;

export const TopNavDiv = styled.div`
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 20px;
	overflow: hidden;

	@media (max-width: 720px) {
		width: 100%;
	}

	img {
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;
	}

	h1 {
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;
		text-align: center;
		width: 200px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`;

export const NavBarArea = styled.div`
	height: 70px;
	width: 500px;
	position: fixed;
	bottom: 0;
	margin: 0 auto;
	background-color: white;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: space-around;
	border-top: 1px solid #ebebeb;

	@media (max-width: 720px) {
		width: 100%;
	}
`;

export const NavItemContainer = styled.div`
	width: 100px;
	height: 50px;
	display: flex;
	align-items: center;
	flex-direction: column;
	cursor: pointer;

	div {
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
	}
`;

export const NavItemText = styled.div`
	color: ${({ isActive }: any) => (isActive ? "#6619D2" : "#979797")};
	font-size: 14px;
	font-weight: 500;
`;

export const NavItemImage = styled.img`
	margin: 0 auto;
`;
