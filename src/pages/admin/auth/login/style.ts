import styled from "styled-components";

export const LoginContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
	padding-left: 300px;
	background-color: #f9f9f9;
	padding-top: 80px;
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

export const LoginButton = styled.button`
	width: 100%;
	background: #c4c4c4;
  color: white;
  height: 50px;
  border: none;
  border-radius: 8px;
  margin-top: 50px;
`;
