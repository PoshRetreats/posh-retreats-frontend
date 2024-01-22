import styled from "styled-components";
import BrandColors from "utilities/styles/colors";

type LoginStyleProps = {
	loading?: boolean;
};
export const LoginContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
	/* padding-left: 300px; */
	background-color: #f9f9f9;
	padding-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoginForm = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 100px;
	}
`;

export const LoginButton = styled.button<LoginStyleProps>`
	width: 100%;
	background: ${({ loading }) => (loading ? "#c4c4c4" : BrandColors.main1)};
	color: white;
	height: 50px;
	border: none;
	border-radius: 8px;
	margin-top: 50px;
`;
