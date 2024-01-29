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
        .details{
            max-width: 600px;
            p{
                line-height: 25px;
                margin-bottom: 1rem;
            }
        }
	}

	.image {
        margin-top: 1.5rem;
        margin-bottom: 1.8rem;
	}
	.button {
		width: 100%;
        button{
            width: 100%;
        }
	}
`;
