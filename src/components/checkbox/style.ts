import styled from "styled-components";
import BrandColors from "utilities/styles/colors";

type CheckBoxStyleProps = {
	img?: string;
	checked?: boolean;
};

export const StyledCheckbox = styled.label`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	font-size: 14px;
	font-style: normal;
	margin-right: 40px;
	margin-bottom: 20px;

	p {
		margin-left: 8px;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
	}
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	position: absolute;
	opacity: 0;
	height: 0;
	width: 0;
`;

export const StyledCheckmark = styled.div<CheckBoxStyleProps>`
	width: 12px;
	height: 12px;
	border-radius: 2px;
	border: 1px solid #000; /* border color when not checked */
	background-color: ${(props: any) => (props.checked ? BrandColors.main2 : "transparent")};
`;
