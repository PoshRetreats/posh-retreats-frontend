import styled from "styled-components";
import media from "utilities/styles/media";

type PrivateStyleProps = {
	img?: string;
};

export const MenuHeaderContainer = styled.div<PrivateStyleProps>`
	width: 100%;
	height: 95vh;
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;

	${media.tablet`
	
	`}
`;
