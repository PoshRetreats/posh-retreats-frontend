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

export const AdminTripContainer = styled.div`
	padding: 64px 45px 0 40px;
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

export const CreateTripsCardContainer = styled.div`
	width: 48%;
	/* height: 100%; */
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
	}
	${media.tablet`
   
	`}
`;

export const ContentSection = styled.div`
display: flex;
justify-content: space-between;
margin-top: 2rem;
`

export const AllGroupTripCardList = styled.div`

.upcoming_trip_h3{
    margin-bottom: 1rem;
    max-width: 300px;
}
`

export const ImageDiv = styled.div`
/* width: 130px; */
`
