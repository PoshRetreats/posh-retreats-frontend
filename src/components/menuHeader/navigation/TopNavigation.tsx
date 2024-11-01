import React from "react";
import { navbarData } from "./data";
import { BottomCenterWrapper } from "./style";
import { Link } from "react-router-dom";

export default function TopNavigation({ textColor }: any) {
	return (
		<BottomCenterWrapper>
			{navbarData.map((menu, i) => (
				<Link
					key={i}
					to={menu.path}
					style={{ textDecoration: "none", color: textColor }}
				>
					<h3>{menu.name}</h3>
				</Link>
			))}
		</BottomCenterWrapper>
	);
}
