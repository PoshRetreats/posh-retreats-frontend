import styled from "styled-components";
import media from "utilities/styles/media";

type GroupTripStyleProps = {
	img?: string;
};

export const MiniGroupTripContainer = styled.div<GroupTripStyleProps>`
	width: 45%;
	min-height: 400px;
	background-image: url(${({ img }) => img});
	background-size: cover;
	background-position: center;
  margin-bottom: 80px;

	${media.tablet`

	`}
`;
