import React, { useState } from "react";
import { LoginButton, LoginContainer, LoginForm } from "./style";
import DefaultInput from "components/defaultInput/DefaultInput";
import { LOGO } from "assets";
import { makePostRequestWithAxios } from "requests/requests";
import { SERVER_LOGIN_URL } from "routes/server";
import { setAuthCookie } from "utilities/helpers";
import { ADMIN_GROUP_TRIPS_URL } from "routes/frontend";
import useAppNavigator from "hooks/useAppNavigator";

export default function AdminLogin() {
	const [form, setForm] = useState({
		username: "",
		password: "",
	});
	const [formErr, setFormErr] = useState("");
	const [loading, setLoading] = useState(false);
	const { appNavigator } = useAppNavigator();

	function handleFormChange(e: any) {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	}

	async function handleLogin(e: any) {
		try {
			setLoading(true);
			e.preventDefault();
			const res: any = await makePostRequestWithAxios(SERVER_LOGIN_URL, form);
			setAuthCookie(res.data.token);
			appNavigator(ADMIN_GROUP_TRIPS_URL, { user: res.data.user });
		} catch (err: any) {
			console.log({ err });
			setFormErr(err.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<LoginContainer>
			<LoginForm>
				<h3>Admin Login</h3>
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
					handleFocus={() => setFormErr("")}
					handlechange={handleFormChange}
				/>
				<LoginButton disabled={loading} loading={loading} onClick={handleLogin}>
					{loading ? "loading..." : "Login"}
				</LoginButton>
			</LoginForm>
		</LoginContainer>
	);
}
