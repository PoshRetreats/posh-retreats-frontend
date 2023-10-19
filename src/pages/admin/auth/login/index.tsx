import React from "react";
import { LoginButton, LoginContainer, LoginForm } from "./style";
import DefaultInput from "components/defaultInput/DefaultInput";
import { LOGO } from "assets";

export default function AdminLogin() {
	return (
		<LoginContainer>
			<LoginForm>
				<img src={LOGO} alt="logo" />
				<DefaultInput required={true} type="text" label="Username/Email" />
				<DefaultInput required={true} type="password" label="Password" />
				<LoginButton>Login</LoginButton>
			</LoginForm>
		</LoginContainer>
	);
}
