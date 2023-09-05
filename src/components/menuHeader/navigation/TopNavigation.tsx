import React from "react";
import { navbarData } from "./data";
import { BottomCenterWrapper } from "./style";
import { Link } from "react-router-dom";

export default function TopNavigation() {
	return (
		<BottomCenterWrapper>
			{navbarData.map((menu) => (
				<Link to={menu.path} style={{ textDecoration: "none", color: "black" }}>
					<h3>{menu.name}</h3>
				</Link>
			))}
		</BottomCenterWrapper>
	);
}
