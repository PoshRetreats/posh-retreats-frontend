import styled from "styled-components";
import BrandColors from "utilities/styles/colors";
import media from "utilities/styles/media";

type GroupTripStyleProps = {
	img?: string;
	checked?: boolean;
	change?: boolean;
};

export const AdminFeaturesContainer = styled.div<GroupTripStyleProps>`
	color: black;
	position: absolute;
	right: 0;
	display: flex;
	flex-direction: column;

	button {
		background-color: ${BrandColors.main2};
		margin-bottom: 8px;
		padding: 4px 8px;
		border-radius: 4px;
		border: none;
		color: white;
		cursor: pointer;
	}

	${media.tablet`
   
	`};
`;

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
	height: 30px;
	display: flex;
	align-items: center;
	margin-top: 10px;
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
	flex-wrap: wrap;

	${media.tablet`

	`}
`;

export const ImageDiv = styled.div<GroupTripStyleProps>`
	width: 40%;
	img {
		height: auto;
		width: 100%;
		border-radius: 8px;
	}

	${media.tablet`

	`}
`;

export const OverviewArea = styled.div<GroupTripStyleProps>`
	display: flex;
	padding: 64px;
	justify-content: space-between;

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
			font-size: 17px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
			color: var(--Primary-Color-1, #f7a49d);
			margin-bottom: 12px;
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
	color: pink;
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
	cursor: pointer;

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

export const PaymentArea = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${BrandColors.main2};
	width: 100%;
	min-height: 40vh;
	padding: 73px;
	color: white;

	${media.tablet`
		width: 100%;
		padding: 18px;
		flex-direction: column;
	`}
`;

export const PaymentFirstSection = styled.div`
	width: 43%;

	p {
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
	}

	h3 {
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
	}

	${media.tablet`
		width: 100%;
	`}
`;

export const PaymentSecondFirstSection = styled.div`
	width: 50%;

	div {
		border-bottom: 2px solid white;
		padding-bottom: 12px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 12px;

		span {
			margin-left: 12px;
		}
	}

	h3 {
		font-size: 21px;
		font-style: normal;
		font-weight: normal;

		${media.mobile`
		font-size: 16px
	`}
	}

	h4 {
		font-size: 18px;
		font-style: normal;
		font-weight: normal;
	}

	${media.tablet`
		width: 100%;
		margin-top: 48px;
	`}
`;

export const ItineraryArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 48px;

	h1 {
		margin-bottom: 48px;
	}

	${media.tablet`
		width: 100%;
		padding: 18px;
	`}
`;

export const ItineraryList = styled.div<GroupTripStyleProps>`
	display: flex;
	width: 1000px;
	justify-content: space-between;
	flex-wrap: wrap;

	${media.tablet`
		width: 100%;
	`}
`;

export const ItineraryCard = styled.div<GroupTripStyleProps>`
	border-radius: 16px;
	width: 48%;
	background-color: ${({ change }) => (change ? "#FDEDEB99" : "#fbd1ce99")};
	padding: 18px;
	margin-bottom: 40px;

	h3 {
		text-align: center;
		margin-bottom: 16px;
	}

	p {
		font-size: 16px;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
	}

	${media.tablet`
		width: 100%;
	`}
`;

export const IncludedAndExcludedArea = styled.div<GroupTripStyleProps>`
	display: flex;
	width: 600px;
	margin: 0 auto;
	justify-content: space-between;

	div {
		width: 100%;

		${media.mobile`
			width: 50%;
	`}
	}

	h3 {
		/* text-align: center; */
		margin-bottom: 16px;

		${media.tablet`

	`}
	}

	p {
		font-size: 16px;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
	}

	${media.tablet`
		width: 100%;
		padding: 18px;
	`}
`;
