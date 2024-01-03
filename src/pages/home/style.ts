import styled from "styled-components";
import media from "utilities/styles/media";

type MiniTripHolderStyleProps = {
	img?: string;
	padding?: string;
};

export const TripHolderContainer = styled.div`
	display: flex;
	width: 70%;
	height: 298px;
	margin: 0 auto;
	border-radius: 16px;
	margin-top: -60px;
	position: relative;
	z-index: 20;
	overflow: hidden;
	cursor: pointer;

	${media.tablet`
    width: 90%;
    height: 670px;
    margin-top: 60px;
    flex-direction: column;
    padding: 16px;
    z-index: 0;
	`}

	${media.mobile`
		margin-top: -200px;
	`}
`;

export const TripContainer = styled.div<MiniTripHolderStyleProps>`
	display: flex;
	width: 50%;
	height: 100%;
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	position: relative;
	align-items: center;
	justify-content: center;

	:hover {
		background-size: contain;
	}

	${media.tablet`
    width: 100%;
    flex-direction: column;
    border-radius: 16px;
	`}
`;

export const Cover = styled.div<MiniTripHolderStyleProps>`
	background: rgba(2, 14, 7, 0.6) 41.84%;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;

	${media.tablet`
	`}
`;

export const TripTextArea = styled.div<MiniTripHolderStyleProps>`
	color: white;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
		margin-top: 150px;
	}

	p {
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		text-align: center;
		margin-top: 8px;
		width: 80%;
		line-height: 20px;
	}

	${media.tablet`
    padding: 16px;
    flex-direction: column;
	`}
`;
