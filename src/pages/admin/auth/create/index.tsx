import React, { useState } from "react";
import { CreateButton, CreateContainer, CreateForm } from "./style";
import { LOGO } from "assets";
import useAppNavigator from "hooks/useAppNavigator";
import DefaultInput from "components/defaultInput/DefaultInput";

export default function CreateAdmin() {
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

  function handleCreateAdmin(){
    
  }

	return (
		<CreateContainer>
			<CreateForm>
				<h3>Create Admin</h3>
				<img src={LOGO} alt="logo" />
				<DefaultInput
					required={true}
					name="username"
					type="text"
					label="Username"
					handlechange={handleFormChange}
				/>
				<DefaultInput
					required={true}
					name="firstName"
					type="text"
					label="First Name"
					handlechange={handleFormChange}
				/>
				<DefaultInput
					required={true}
					name="lastName"
					type="text"
					label="Last Name"
					handlechange={handleFormChange}
				/>
				<DefaultInput
					required={true}
					name="email"
					type="text"
					label="Email"
					handlechange={handleFormChange}
				/>
				<DefaultInput
					required={true}
					name="adminLevel"
					type="text"
					label="Admin Level"
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
				<DefaultInput
					required={true}
					name="token"
					type="text"
					label="Authorization"
					handlechange={handleFormChange}
				/>
				<CreateButton disabled={loading} loading={loading} onClick={handleCreateAdmin}>
					{loading ? "loading..." : "Login"}
				</CreateButton>
			</CreateForm>
		</CreateContainer>
	);
}
