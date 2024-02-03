import styled from "styled-components";
import media from "utilities/styles/media";

type PastTripStyleType = {
	padding?: string;
	tripBgImage?: string;
};

export const ReviewsContainer = styled.div<PastTripStyleType>`
	width: 100%;

	${media.tablet`
	`}
`;

export const PastTripList = styled.div<PastTripStyleType>`
	width: 100%;
	margin-top: 30px;
	display: flex;
	flex-wrap: wrap;
	padding: 64px;
	/* justify-content: space-between; */

	${media.tablet`
	padding: 24px;
	`}
`;

export const PastTripContainer = styled.div<PastTripStyleType>`
	width: 28%;
	height: 400px;
	background-image: url(${(props) => props.tripBgImage});
	border-radius: 16px;
	position: relative;
	padding: 8px;
	margin-right: 16px;
	margin-bottom: 24px;

	${media.tablet`
	width: 100%;
	margin-right: 0px;
	`}
`;

export const MiniPastTripDescriptionArea = styled.div`
	width: 100%;
	position: absolute;
	border-radius: 0px 0px 16px 16px;
	background: rgba(2, 14, 7, 0.4);
	bottom: 0;
	left: 0;
	padding: 16px;
	cursor: pointer;
	color: #fff;

	small {
		font-size: 10px;
		font-style: normal;
		font-weight: 400;
	}

	p {
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: 16px;
		color: white;
		width: 80px;
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

export const PhotoAmount = styled.div`
	display: absolute;
	top: 20px;
	left: 20px;
	border-radius: 4px;
	background: var(--P1-Tint-1, rgba(253, 237, 235, 0.6));
	width: fit-content;
	padding: 4px 4px;
	text-align: center;

	p {
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: 18px;
		width: 80px;
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
