import styled from "styled-components";

export const PastTripsHomeDetailsStyle = styled.div`
	background: #fff;
	width: fit-content;
	padding: 2rem;
	margin-top: 2rem;
	.container {
		.text_backicon {
			display: flex;
			gap: 1rem;
			align-items: center;
			margin-bottom: 3rem;
			.text {
				margin-top: 1rem;
			}
		}
		.details {
			max-width: 600px;
			p {
				line-height: 25px;
				margin-bottom: 1rem;
			}
		}
	}

	.image_div {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin-bottom: 1.8rem;
		margin-top: 1.5rem;
		.image {
			

			max-width: 328px;
			img {
				width: 100%;
			}
		}
	}

	.button {
		width: 100%;
		button {
			width: 100%;
		}
	}
`;
