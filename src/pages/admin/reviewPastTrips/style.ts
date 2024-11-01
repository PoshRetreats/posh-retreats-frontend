import styled from "styled-components";
import media from "utilities/styles/media";

export const AdminContainer = styled.div`
	width: 100vw;
	/* height: 100vh; */
	overflow-x: hidden;
	padding-left: 300px;
	background-color: #f9f9f9;

	${media.tablet`
   
	`}
`;

export const AdminHomeContainer = styled.div`
	padding: 64px 40px 0 40px;
	height: 100%;
	${media.tablet`
   
	`}
`;

export const AdminHomeFlexDiv = styled.div`
	display: flex;
	height: 100%;
	justify-content: space-between;
	${media.tablet`
   
	`}
`;

export const AllTripsCardContainer = styled.form`
	width: 48%;
	height: 100%;
	border-radius: 16px;
	padding: 20px;
	margin-top: 30px;
	background: var(--White, #fff);
	box-shadow: 0px 2px 4px -2px rgba(247, 164, 157, 0.06),
		0px 4px 8px -2px rgba(247, 164, 157, 0.1);

	h1 {
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-bottom: 4px;
	}

	${media.tablet`
   
	`}
`;

export const ReviewContainer = styled.div`
	margin-top: 2rem;
`;

export const ActivityCardContainer = styled.div`
	width: 48%;
	height: 100%;

	${media.tablet`
   
	`}
`;

export const ActivityCardTemp = styled.div`
	width: 100%;
	height: 330px;
	border-radius: 16px;
	padding: 20px;
	margin-top: 30px;
	background: var(--White, #fff);
	box-shadow: 0px 2px 4px -2px rgba(247, 164, 157, 0.06),
		0px 4px 8px -2px rgba(247, 164, 157, 0.1);

	h1 {
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-bottom: 4px;
	}
	${media.tablet`
   
	`}
`;

export const TripCardList = styled.div`
	${media.tablet`
   
	`}
`;

export const PastTripCardList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr); /* Three columns in each row */
	gap: 25px;
	margin: auto;
	border: 2px solid red;
	max-width: 800px;
	input {
		width: 100%;
	}
	/* width: 90%; */
`;

export const TripCardContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 24px;
	cursor: pointer;

	${media.tablet`
   
	`}
`;

export const GreyText = styled.p`
	color: var(--Grey-color, #c4c4c4);
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	${media.tablet`
   
	`}
`;

export const TripHeadText = styled.p`
	color: var(--Text-Color, #020e07);
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	margin-bottom: 12px;
	${media.tablet`
   
	`}
`;

export const ButtonDiv = styled.div`
	width: 95%;
	button {
		width: 100%;
	}
`;

export const AllGroupTripContainer = styled.div`
	width: 48%;
	height: 100%;

	${media.tablet`
   
	`}
`;

export const AllGroupTripCardTemp = styled.div`
	width: 100%;
	height: 330px;
	border-radius: 16px;
	padding: 20px;
	margin-top: 30px;
	background: var(--White, #fff);
	box-shadow: 0px 2px 4px -2px rgba(247, 164, 157, 0.06),
		0px 4px 8px -2px rgba(247, 164, 157, 0.1);

	h1 {
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-bottom: 4px;
		font-size: "Quando";
	}
	${media.tablet`
   
	`}
`;

export const ContentSection = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
`;

export const AllGroupTripCardList = styled.div`
	.upcoming_trip_h3 {
		margin-bottom: 1rem;
		max-width: 300px;
		font-size: "Quando";
	}
`;

export const ImageDiv = styled.div`
	/* width: 130px; */
`;

export const PastTripCardImageUrl = styled.div`
	margin: auto;
	max-width: 800px;
	input {
		width: 100%;
	}
	/* width: 90%; */
`;
