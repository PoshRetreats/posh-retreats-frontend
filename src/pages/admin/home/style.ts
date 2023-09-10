import styled from "styled-components";
import media from "utilities/styles/media";

export const AdminContainer = styled.div`
	width: 100vw;
	height: 100vh;
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
	${media.tablet`
   
	`}
`;

export const AllTripsCardContainer = styled.div`
	width: 50%;
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

export const TripCardList = styled.div`
	${media.tablet`
   
	`}
`;

export const TripCardContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 24px;
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
