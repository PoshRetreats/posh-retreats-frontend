import styled from "styled-components";
import BrandColors from "utilities/styles/colors";
import media from "utilities/styles/media";

type AboutStyleProps = {
	height?: string;
	width?: string;
	top?: string;
	right?: string;
	left?: string;
	bottom?: string;
	sTop?: string;
	r?: string;
	sLeft?: string;
	sBottom?: string;
};

export const SecondSection = styled.div`
	display: flex;
	margin-top: 120px;
	align-items: center;
	/* padding: 0 63px; */
	margin-bottom: 250px;
	width: 1100px;
	margin: 0 auto;
	margin-top: 80px;
	margin-bottom: 120px;

	${media.tablet`
    margin-top: 60px;
    width: 100%;
    padding: 0 16px;
    flex-direction: column;
  `}
`;

export const TextSection = styled.div`
	width: 50%;
	margin-right: 200px;

	h1 {
		font-size: 32px;
		font-style: normal;
		font-weight: 500;
		margin-bottom: 20px;
	}

	button {
		color: white;
		background-color: ${BrandColors.main2};
		padding: 8px;
		border: none;
		border-radius: 4px;
		margin: 8px 0;
		cursor: pointer;
	}
	${media.tablet`
    width: 100%;
		margin-right: 0px;
    margin-bottom: 160px;
  `}
`;

export const ImageSection = styled.div`
	position: relative;
	width: 40%;

	${media.tablet`
    width: 100%;
  `}
`;

export const StyledImage = styled.img<AboutStyleProps>`
	position: absolute;
	max-width: 305px;
	border-radius: 8px;
	max-height: 255px;
	top: ${({ top }) => top};
	right: ${({ right }) => right};
	left: ${({ left }) => left};
	bottom: ${({ bottom }) => bottom};

	${media.tablet`
    width: 215px;
  `};
`;
