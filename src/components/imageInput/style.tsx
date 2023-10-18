import styled from "styled-components";

export const UploadedImage = styled.img`
	border: 2px solid red;
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin-inline: auto;
    border-radius: 16px;
`;
export const ImageInputDiv = styled.div`
	border: 1px dotted rgba(196, 196, 196, 1);
	width: 100%;
	/* height: 50%; */
	/* margin: 1rem; */
	z-index: 1;
	position: relative;
	border-radius: 16px;
	label {
		width: 100%;
		height: 130px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: auto;
		cursor: pointer;
		font-family: "Sora";
		font-size: 0.8rem;
		color: rgba(196, 196, 196, 1);
	}
`;

export const Input = styled.input`
	display: none;
`;
