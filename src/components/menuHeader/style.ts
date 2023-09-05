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
	padding: 16px 64px;

	${media.tablet`
    padding: 16px;
	`}
`;

export const MenuArea = styled.div`
	display: flex;
	align-items: center;

	${media.tablet`

	`}
`;

export const LogoArea = styled.img`
	width: 43px;
	${media.tablet`
	
	`}
`;
