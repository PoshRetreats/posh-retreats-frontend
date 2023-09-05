import React from "react";
import {
	Container,
	Logo,
	SideItems,
	Item,
	Paragraph,
	MenuFlex,
} from "./style";
// import whiteForward from "assets/images/svgs/forwardWhite.svg";
import { Link } from "react-router-dom";
import { navbarData } from "../data";
import { MENU_CANCEL } from "assets";

const SideMenu = ({ sideMenu = false, setSideMenu }: any) => {
	// const auth = new AuthenticationClass();
	// const { sideMenu, SetSideMenu } = useSideMenuContext();
	// const prodRoutes = sideMenuData.filter((route) => !route.hide);
	function closeSideMenu() {
		setSideMenu(false);
	}
	return (
		<Container open={sideMenu}>
			<Logo>
				<div>
					{/* <img src={LogoImage} alt="" />
          <h1>Trigger</h1> */}
				</div>
				{/* <img onClick={() => toggleSideMenu(open, setOpen)} src={cancelIcon} /> */}
				<h1 onClick={() => closeSideMenu()}>
					<img src={MENU_CANCEL} alt="cancelIcon" />
				</h1>
			</Logo>
			<SideItems>
				{navbarData.map((menuItem, i) => (
					<Link style={{ textDecoration: "none" }} to={menuItem.path} key={i}>
						<MenuFlex onClick={() => closeSideMenu()}>
							<Item>
								{/* <img src={menuItem.icon} alt="" /> */}
								<Paragraph>{menuItem.name}</Paragraph>
							</Item>
							{/* <img src={whiteForward} alt="" /> */}
						</MenuFlex>
					</Link>
				))}
			</SideItems>
			{/* <LogoutButton onClick={() => auth.handleLogout()}>Log Out</LogoutButton> */}
		</Container>
	);
};

export default SideMenu;
