import styled from "styled-components";
import media from "utilities/styles/media";

type PrivateStyleProps = {
	img?: string;
};

export const MenuHeaderContainer = styled.div<PrivateStyleProps>`
	width: 100%;
	height: 95vh;
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	padding: 16px 64px;

	${media.tablet`
    padding: 16px;
	`}
`;

export const MenuHeaderWrapper = styled.div`
	display: none;
	${media.tablet`
		display: block;
		width: 100%;
		padding: 16px;
		height: 90px;
		position: fixed;
		top: 0;
		left: 0;
    padding: 16px;
	`}
`;

export const MenuOverlay = styled.div`
	position: relative;
	overflow: hidden;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(
			0,
			0,
			0,
			0.3
		);
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	${media.tablet`
		
	`}
`;

export const MenuArea = styled.div`
	display: flex;
	align-items: center;
	position: fixed;
	width: 100%;
	height: 100px;
	/* background-color: white; */
	top: 0;
	left: 0;
	${media.tablet`

	`}
`;

export const LogoArea = styled.img`
	width: 43px;
	margin-left: 35px;
	margin-top: 5px;
	${media.tablet`
	
	`}
`;

export const DescriptionArea = styled.div`
	width: 444px;
	position: absolute;
	top: 50%;

	h3 {
		color: var(--white, #fff);
		font-size: 40px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	p {
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		color: white;
		margin-top: 20px;
	}

	${media.tablet`
		width: 100%;
		top: 70%;
		left: 0;
		bottom: 41px;
		padding: 24px 16px;
		background: linear-gradient(
		220deg,
		rgba(2, 14, 7, 0) 0%,
		rgba(2, 14, 7, 0.4) 100%
	);

		h3 {
			color: var(--white, #fff);
			font-size: 30px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
		}

		p {
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
			color: white;
			margin-top: 20px;
		}
	`}
`;
