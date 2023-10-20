import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonStyle = styled(Button)`
	&& {
		text-transform: none;
		background: rgba(247, 164, 157, 1);
		color: #fff;
		border: none;
		outline: none;
		&:hover {
			background:  rgba(247, 164, 157, 1);;
			color: #fff;
			border: none;
			outline: none;
		}
	}
`;
