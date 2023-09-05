import { useState } from "react";
import { LogoArea, MenuArea, MenuHeaderContainer } from "./style";
import { HAMBURGER, LOGO } from "assets";
import TopNavigation from "./navigation/TopNavigation";
import SideMenu from "./navigation/sideMenu";
import { Hamburger } from "./navigation/sideMenu/style";

export default function MenuHeader({ img }: any) {
	const [sideMenu, setSideMenu] = useState(false);
	return (
		<MenuHeaderContainer img={img}>
			<Hamburger onClick={() => setSideMenu(true)} src={HAMBURGER} alt="hamburger" />
			<SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
			<MenuArea>
				<LogoArea src={LOGO} alt="logo" />
				<TopNavigation />
			</MenuArea>
		</MenuHeaderContainer>
	);
}
