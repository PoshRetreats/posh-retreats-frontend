import styled from "styled-components";
import media from "utilities/styles/media";

type AdminHomeStyleType = {
	padding?: string;
};

export const AdminContainer = styled.div<AdminHomeStyleType>`
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
	padding-left: 300px;
	padding: ${({ padding }) => padding};
	background-color: #f9f9f9;

	${media.tablet`
   
	`}
`;

export const AdminTripContainer = styled.div`
	padding: 0px 45px 0 40px;
	height: 100%;
	${media.tablet`
   
	`}
`;

export const AdminHomeFlexDiv = styled.div`
	display: flex;
	justify-content: space-between;
	${media.tablet`
   
	`}
`;

export const CreateTripsCardContainer = styled.form`
	width: 48%;
	/* height: 100%; */
	font-family: "Quando";
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

	.Submit_btn {
		button {
			width: 95%;
			margin: 4rem auto 2rem;
		}
	}
`;

export const CreateTripCardList = styled.div`
	.included_trips {
		margin-bottom: 1rem;
		section {
			align-items: center;
			gap: 0.5rem;
			display: flex;
			.img {
				font-size: 0.7rem;
				max-width: 100px;
			}
		}
	}

	${media.tablet`
   
	`}
`;

export const GreyText = styled.p`
	color: var(--Grey-color, #c4c4c4);
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	font-family: "sora";
	margin-bottom: 2rem;
	${media.tablet`
   
	`}
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

// trip capactiy

export const TripCapacityMain = styled.div`
	div {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 1rem;
		span {
			color: rgba(196, 196, 196, 1);
			font-size: 0.85rem;
		}
		input {
			border: 1px solid rgba(251, 209, 206, 0.6);
			width: 40px;
			height: 32px;
			border-radius: 8px;
			text-align: center;
		}
	}
`;

export const TravellerInfoContainer = styled.div`
	padding: 16px;
	margin-top: 16px;
	border-radius: 4px;
	background: white;
	width: 40%;
	right: 20px;
	position: absolute;
	overflow: scroll;

	${media.tablet`
   
	`}
`;