import styled from "styled-components";
import BrandColors from "utilities/styles/colors";
import media from "utilities/styles/media";

type GroupTripStyleProps = {
	img?: string;
	checked?: boolean;
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
	cursor: pointer;

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
	height: 30px;
	display: flex;
	align-items: center;
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

export const OverviewArea = styled.div<GroupTripStyleProps>`
	display: flex;
	padding: 64px;
	justify-content: space-between;

	img {
		/* height: 500px; */
		width: 40%;
		border-radius: 8px;
	}

	div {
		width: 48%;

		p {
			margin-top: 24px;
			margin-bottom: 24px;
			line-height: 24px;
		}

		h4 {
			color: var(--Primary-Color-1, #f7a49d);
			font-size: 20px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			margin-top: 28px;
			margin-bottom: 18px;
		}

		h5 {
			color: black;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
	}

	${media.tablet`
		flex-direction: column;
		justify-content: center;
		padding: 16px;

		img{
			width: 100%;
			height: unset;
			display: none;
		}

		div{
			width: 100%;
			
			h1{
				text-align: center;
			}
		}
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

export const PointsArea = styled.div`
	display: flex;
	align-items: center;
	width: unset !important;
	margin-bottom: 16px;

	p {
		color: var(--Text-Color, #020e07);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin: unset !important;
		margin-left: 8px !important;
		width: 80% !important;
	}
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

export const GroupImageFlex = styled.div`
	/* display: flex; */
	margin-bottom: 120px;
	padding: 0 64px;
	/* overflow-x: scroll; */


	${media.tablet`
		padding: 24px;
		margin-bottom: 40px;
	`}

	img {
		width: 300px;
		margin-right: 32px;
		border-radius: 8px;
		cursor: pointer;

		${media.tablet`
	`}
	}
`;

export const CheckboxHeader = styled.h3`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	margin: 32px 0;
`;

export const CheckboxList = styled.h3`
	display: flex;
	flex-wrap: wrap;
`;
