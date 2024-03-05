import { useEffect, useState } from "react";
import {
	DescriptionArea,
	LogoArea,
	MenuArea,
	MenuHeaderContainer,
	MenuHeaderWrapper,
	MenuOverlay,
} from "./style";
import { HAMBURGER, SHORT_LOGO } from "assets";
import TopNavigation from "./navigation/TopNavigation";
import SideMenu from "./navigation/sideMenu";
import { Hamburger } from "./navigation/sideMenu/style";
import BrandColors from "utilities/styles/colors";
import { Link } from "react-router-dom";
import { HOME_URL } from "routes/frontend";

export default function MenuHeader({ img='', title, description }: any) {
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
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const backgroundColor = scrolling ? BrandColors.main1 : "transparent";
	const color = scrolling ? "black" : "white";

	return (
		<MenuOverlay>
			{!img ? (
				<>
					<MenuHeaderWrapper style={{ backgroundColor }} />
					<Hamburger
						onClick={() => setSideMenu(true)}
						src={HAMBURGER}
						alt="hamburger"
					/>
					<DescriptionArea>
						<h3>{title}</h3>
						<p>{description}</p>
					</DescriptionArea>
					<SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
					<MenuArea style={{ backgroundColor }}>
						<Link style={{ position: "fixed", top: 10 }} to={HOME_URL}>
							<LogoArea src={SHORT_LOGO} alt="logo" />
						</Link>
						<TopNavigation textColor={color} />
					</MenuArea>
				</>
			) : (
				<MenuHeaderContainer img={img}>
					<MenuHeaderWrapper style={{ backgroundColor }} />
					<Hamburger
						onClick={() => setSideMenu(true)}
						src={HAMBURGER}
						alt="hamburger"
					/>
					<DescriptionArea>
						<h3>{title}</h3>
						<p>{description}</p>
					</DescriptionArea>
					<SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
					<MenuArea style={{ backgroundColor }}>
						<Link style={{ position: "fixed", top: 10 }} to={HOME_URL}>
							<LogoArea src={SHORT_LOGO} alt="logo" />
						</Link>
						<TopNavigation textColor={color} />
					</MenuArea>
				</MenuHeaderContainer>
			)}
		</MenuOverlay>
	);
}
