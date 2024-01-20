import styled from "styled-components";
import media from "utilities/styles/media";


type GroupStyleType = {
	padding?: string;
};


export const GroupTripList = styled.div<GroupStyleType>`
	width: 100%;
	margin-top: 30px;
	display: flex;
	flex-wrap: wrap;
	padding: 64px;
	justify-content: space-between;
	padding: ${({ padding }) => padding};

	${media.tablet`
    display: block;
    padding: 16px;
	`}
`;
