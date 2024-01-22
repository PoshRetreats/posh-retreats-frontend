import styled from "styled-components";
import media from "utilities/styles/media";

export const PrivateTripStyleContainer = styled.div`
	width: 90%;
	height: 100%;
	border-radius: 16px;
	padding: 20px;
	margin-top: 30px;
	background: var(--White, #fff);
	box-shadow: 0px 2px 4px -2px rgba(247, 164, 157, 0.06),
		0px 4px 8px -2px rgba(247, 164, 157, 0.1);
.private_trip_entries_header{
    display: flex;
    align-items: start;
    gap: 1rem;
}
	h1 {
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-bottom: 4px;
	}
	.details_main_content {
		margin-top: 2.5rem;
		section {
            margin-bottom: 1.2rem;
			h3 {
                font-size: 18px;
                font-weight: 400;
                line-height: 32px;
			}
            p{
                color: rgba(11, 69, 37, 1);
                font-weight: 400;
                /* line-height: 17.64px; */
                font-size: .9rem;
            }
		}
	}
	${media.tablet`
   
	`}
`;
