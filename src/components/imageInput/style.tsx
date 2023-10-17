import styled from "styled-components";

export const ImageInputDiv = styled.div`
	border: 1px dotted rgba(196, 196, 196, 1);
	width: 140px;
	height: 140px;
	/* margin: 1rem; */
	z-index: 1;
    border-radius: 16px;
	label {
		width: 140px;
		height: 140px;
		display: flex;
		align-items: center;
		justify-content: center;
        text-align: center;
        margin: auto;
		cursor: pointer;
        font-family: "Sora";
        font-size: .8rem;
        color: rgba(196, 196, 196, 1);
	}
`;

export const Input = styled.input`
	display: none;
`;
