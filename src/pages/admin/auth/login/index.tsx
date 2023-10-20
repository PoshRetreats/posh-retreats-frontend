import React, { useState } from "react";
import { LoginButton, LoginContainer, LoginForm } from "./style";
import DefaultInput from "components/defaultInput/DefaultInput";
import { LOGO } from "assets";
import { makePostRequestWithAxios } from "requests/requests";
import { SERVER_LOGIN_URL } from "routes/server";
import { setAuthCookie } from "utilities/helpers";
import { useNavigate } from "react-router-dom";
import { ADMIN_HOME_URL } from "routes/frontend";

export default function AdminLogin() {
	const [form, setForm] = useState({
		username: "",
		password: "",
	});
	const [formErr, setFormErr] = useState("");
	const navigate = useNavigate();

	function handleFormChange(e: any) {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	}

	function handleLogin(e: any) {
		e.preventDefault();
		makePostRequestWithAxios(SERVER_LOGIN_URL, form)
			.then((res: any) => {
				setAuthCookie(res.data.token);
				//TODO: save basic admin data
				navigate(ADMIN_HOME_URL, { state: { user: res.data.user } });
			})
			.catch((err) => {
				setFormErr(err.message);
			});
	}

	return (
		<LoginContainer>
			<LoginForm>
				<img src={LOGO} alt="logo" />
				<DefaultInput
					required={true}
					name="username"
					type="text"
					label="Username/Email"
					handlechange={handleFormChange}
				/>
				<DefaultInput
					required={true}
					name="password"
					type="password"
					label="Password"
					err={formErr}
					handlechange={handleFormChange}
				/>
				<LoginButton onClick={handleLogin}>Login</LoginButton>
			</LoginForm>
		</LoginContainer>
	);
}
