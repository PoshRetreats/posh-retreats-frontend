import styled from "styled-components";

export const TripDetailsMain = styled.div`
	width: 48%;
	/* height: 100%; */
	font-family: "Quando";
	border-radius: 16px;
	padding: 20px;
	margin-top: 30px;
	background: var(--White, #fff);
	box-shadow: 0px 2px 4px -2px rgba(247, 164, 157, 0.06),
		0px 4px 8px -2px rgba(247, 164, 157, 0.1);
	header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
		.header_section {
			display: flex;
		
			gap: 1.5rem;
			align-items: center;
			img {
				cursor: pointer;
			}
			h1 {
				font-size: 23px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
			}
		}
	}
	h3 {
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}

	.Submit_btn {
		button {
			width: 95%;
			margin: 4rem auto 2rem;
		}
	}
`;

export const TripDetailsDescription = styled.div`
	margin-top: 2rem;
	p {
		line-height: 23px;
		font-family: "sora";
	}
	.condition {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 2rem;
		font-family: "sora";
	}
	.included_trips {
		margin-top: 2rem;
		h3 {
			margin-bottom: 1rem;
			font-size: 1rem;
		}
		.included_trips_condition {
			display: flex;
			align-items: center;
			gap: 1rem;
		}
	}
`;

export const Dates = styled.p``;

export const Active = styled.img``;

// selected tags
export const SelectedTagsMain = styled.div`
	margin: 2rem auto;
	display: flex;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
`;

export const SelectedTagsBtn = styled.div`
	border: 1px solid rgba(251, 209, 206, 0.6);
	width: 105px;
	height: 32px;
	display: flex;
	align-items: center;
	border-radius: 8px;
	justify-content: center;
	text-align: center;
	span {
		font-size: 1rem;
		font-weight: 400;
	}
`;

// images
export const TripDetailsImageMain = styled.div`
	.images {
		display: flex;
		flex-wrap: wrap;
		margin: 3.5rem auto 2rem;
		width: 90%;
		gap: 2rem;
	}
`;
