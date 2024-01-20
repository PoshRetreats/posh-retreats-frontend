import styled from "styled-components";

type GeneralStyleProps = {
	height?: string;
	width?: string;
	top?: string;
	right?: string;
	left?: string;
	bottom?: string;
	sTop?: string;
	r?: string;
	sLeft?: string;
	sBottom?: string;
	margin?: string;
	smargin?: string;
};

export const AppSpace = styled.div<GeneralStyleProps>`
	margin: ${({ margin }) => (margin ? margin : "60px 0")};
`;
