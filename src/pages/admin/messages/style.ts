import styled from "styled-components";
import media from "utilities/styles/media";

export const MessageFlexContainer = styled.div`
	margin-top: 25px;
	display: flex;
	${media.tablet`
   
	`}
`;

export const MessagesListContainer = styled.div`
	padding: 0px 40px 0 40px;
	width: 50%;

	p {
		font-size: 14px;
		font-style: normal;
		font-weight: 300;
		color: var(--Text-Color, #020e07);
		margin-top: 8px;
	}

	h1 {
		font-size: 23px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}

	small {
		color: var(--Grey-color, #c4c4c4);
		font-family: Sora;
		font-size: 10px;
		font-style: normal;
		font-weight: 400;
		margin-top: 8px;
	}

	${media.tablet`
   
	`}
`;
export const MessageContainer = styled.div`
	padding: 16px;
	margin-top: 16px;
	border-radius: 4px;
	background: var(--P1-Tint-1, rgba(253, 237, 235, 0.6));
	cursor: pointer;

	${media.tablet`
   
	`}
`;

export const EmptyMessageContainer = styled.div`
	padding: 16px;
	margin-top: 16px;
	border-radius: 4px;
	background: white;
	/* width: 50w; */
	display: flex;
	height: 80vh;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	p {
		color: var(--Grey-color, #c4c4c4);
		font-size: 18px;
		font-style: normal;
		margin-top: 20px;
	}

	${media.tablet`
   
	`}
`;

export const MessageDetailsContainer = styled.div`
	padding: 16px;
	margin-top: 16px;
	border-radius: 4px;
	background: white;
	width: 50%;

	${media.tablet`
   
	`}
`;

export const MessageDetailsWrapper = styled.div`
	padding: 16px;
	margin-top: 16px;
	border-radius: 4px;
	background: white;
	width: 50%;

	p {
		margin-top: 8px;
    width: 500px;
	}

	h1 {
		font-size: 23px;
		font-style: normal;
		font-weight: 600;
	}

	${media.tablet`
   
	`}
`;
