import styled from "styled-components";
import BrandColors from "utilities/styles/colors";

type LoginStyleProps = {
	loading?: boolean;
};
export const CreateContainer = styled.div`
	width: 100vw;
	/* height: 100vh; */
	overflow-x: hidden;
	/* padding-bottom: 100px; */
	/* padding-left: 300px; */
	background-color: #f9f9f9;
	display: flex;
	justify-content: center;
`;

export const CreateForm = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 145px;

	img {
		width: 100px;
	}
`;

export const CreateButton = styled.button<LoginStyleProps>`
	width: 100%;
	background: ${({ loading }) => (loading ? "#c4c4c4" : BrandColors.main1)};
	color: white;
	height: 50px;
	border: none;
	border-radius: 8px;
	margin-top: 50px;
`;
