import styled from "styled-components";

export const PastTripHomeStyle = styled.div`
	main {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2.5rem;
		.image_text {
			cursor: pointer;
			font-family: "Sora";
			background-color: #fff;
			display: flex;
			max-width: 600px;
			border-radius: 16px;
			.image {
				max-width: 400px;

				img {
					width: 100%;
					max-width: 400px;
					max-height: 500px;
					border-radius: 16px;
				}
			}
			.text_button {
				display: flex;
				flex-direction: column;
				padding: 1rem;
				justify-content: space-between;
				.text {
					p {
						font-size: 0.9rem;
					}
					h3 {
						margin-top: 0.4rem;
						font-size: 1rem;
					}
				}
				.tab_div {
					display: flex;
					gap: 0.6rem;
					.tabs {
						background: #fdedeb99;
						padding: 0.7rem;
						width: fit-content;
						border-radius: 10px;
					}
				}
			}
		}
	}
`;

export const HeaderDiv = styled.div`
	padding: 64px 40px 0 40px;
`;
