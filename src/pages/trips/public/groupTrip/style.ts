import styled from "styled-components";
import BrandColors from "utilities/styles/colors";
import media from "utilities/styles/media";

type GroupTripStyleProps = {
	img?: string;
};

export const MiniGroupTripContainer = styled.div<GroupTripStyleProps>`
	width: 45%;
	min-height: 400px;
	background-image: url(${({ img }) => img});
	background-size: cover;
	background-position: center;
	margin-bottom: 80px;
	border-radius: 16px;
	padding: 16px;
	position: relative;

	${media.tablet`
    width: 100%;
    height: unset;
	`}
`;

export const TagContainer = styled.div<GroupTripStyleProps>`
	padding: 4px 10px;
	border-radius: 4px;
	width: fit-content;
	background: var(--P1-Tint-1, rgba(253, 237, 235, 0.6));
	margin-right: 8px;
	p {
		color: var(--Text-Color, #020e07);
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-transform: capitalize;
	}

	${media.tablet`

  p {
		font-size: 10px;
	}
	`}
`;

export const TagContainerList = styled.div<GroupTripStyleProps>`
	display: flex;

	${media.tablet`

	`}
`;

export const FilledProgressBar = styled.div<{ percent: number }>`
	width: ${(props) => props.percent}%;
	height: 100%;
	background-color: ${BrandColors.main2}; /* Change this to the filled color you prefer */
	transition: width 0.3s ease;
	overflow: hidden;

	h5 {
		color: white;
		position: absolute;
		left: 30%;
		top: 3px;
		font-size: 12px;
	}
`;

export const TextContainer = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000; /* Text color is black */
`;

export const FilledText = styled.span`
	color: #fff;
	font-size: 12px;
`;

export const UnfilledText = styled.span`
	color: #000; /* Text color is black for the unfilled portion */
	font-weight: bold;
`;

export const ProgressBarDiv = styled.div<GroupTripStyleProps>`
	width: 40%;
	height: 20px;
	background-color: #eee;
	border-radius: 8px;
	overflow: hidden;
	margin-top: 8px;
	position: relative;

	h6 {
		color: black;
		position: absolute;
		left: 30%;
		z-index: 10;
		font-size: 12px;
		top: 3px;
	}

	${media.tablet`

	`}
`;

export const MiniGroupTripDescriptionArea = styled.div`
	width: 100%;
	position: absolute;
	border-radius: 0px 0px 16px 16px;
	background: rgba(2, 14, 7, 0.4);
	bottom: 0;
	left: 0;
	padding: 16px;

	h3 {
		color: var(--white, #fff);
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		width: 50%;
		margin-top: 10px;
	}

	p {
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		color: white;
	}

	${media.tablet`
		

		h3 {
			font-size: 12px;
		}

		p {
			font-size: 10px;
		}
	`}
`;
