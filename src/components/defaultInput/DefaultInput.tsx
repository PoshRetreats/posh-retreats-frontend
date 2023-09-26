import { useEffect, useState } from "react";
import { DefaultInputDiv, ErrMessage, InputHolder } from "./style";

export default function DefaultInput({
	label,
	type,
	name,
	placeholder,
	handlechange,
	required,
	err = null,
	handleBlur,
	handleFocus,
	value,
	description = "",
}: any) {
	const [showPassword, setShowPassword] = useState(false);
	function handlePasswordVisibility() {
		setShowPassword(!showPassword);
	}

	useEffect(() => {}, [value]);

	return (
		<DefaultInputDiv type={type}>
			<p>{label}</p>
			<InputHolder className={err && "error"}>
				{type === "phone" && <h3>+234 (0)</h3>}
				<input
					className={err && "error"}
					value={value}
					required={required}
					onBlur={handleBlur}
					onFocus={handleFocus}
					onChange={handlechange}
					maxLength={type === "phone" ? 10 : 1000}
					name={name}
					type={showPassword ? "text" : type}
					placeholder={placeholder}
				/>
				{type === "password" && (
					<p className="blueText" onClick={handlePasswordVisibility}>
						{showPassword ? "hide" : "show"}
					</p>
				)}
			</InputHolder>
			{err && <ErrMessage>{err}</ErrMessage>}
			{!err && <h4>{description}</h4>}
		</DefaultInputDiv>
	);
}
