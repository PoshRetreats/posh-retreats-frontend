import React from "react";
import { AdminHeaderTitleDiv } from "./style";

type AdminHeaderProps = {
	title?: string;
};
export default function AdminHeaderTitle({ title = "Dashboard" }: AdminHeaderProps) {
	return (
		<AdminHeaderTitleDiv>
			<p>Welcome, Bukky</p>
			<h3>{title}</h3>
		</AdminHeaderTitleDiv>
	);
}
