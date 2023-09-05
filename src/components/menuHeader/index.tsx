import { useEffect, useState } from "react";
import { LogoArea, MenuArea, MenuHeaderContainer } from "./style";
import { HAMBURGER, LOGO } from "assets";
import TopNavigation from "./navigation/TopNavigation";
import SideMenu from "./navigation/sideMenu";
import { Hamburger } from "./navigation/sideMenu/style";
import BrandColors from "utilities/styles/colors";

export default function MenuHeader({ img }: any) {
	const [sideMenu, setSideMenu] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				// Change background color when user scrolls down
				setScrolling(true);
			} else {
				// Reset background color when user scrolls back to the top
				setScrolling(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			// Remove the scroll event listener when the component unmounts
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const backgroundColor = scrolling ? BrandColors.main1 : "transparent";

	return (
		<MenuHeaderContainer img={img}>
			<Hamburger
				style={{ backgroundColor }}
				onClick={() => setSideMenu(true)}
				src={HAMBURGER}
				alt="hamburger"
			/>
			<SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
			<MenuArea>
				<LogoArea src={LOGO} alt="logo" />
				<TopNavigation />
			</MenuArea>
		</MenuHeaderContainer>
	);
}
