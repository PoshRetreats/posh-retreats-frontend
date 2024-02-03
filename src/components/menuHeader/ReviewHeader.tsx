import { useEffect, useState } from "react";
import {
	LogoArea,
	MenuArea,
	MenuHeaderContainer,
	MenuHeaderWrapper,
	MenuOverlay,
} from "./style";
import { HAMBURGER, LOGO } from "assets";
import TopNavigation from "./navigation/TopNavigation";
import SideMenu from "./navigation/sideMenu";
import { Hamburger } from "./navigation/sideMenu/style";
import BrandColors from "utilities/styles/colors";
import { Link } from "react-router-dom";
import { HOME_URL } from "routes/frontend";

type MainTripHeaderProps = {
	data?: any;
	componentData?: any[];
	showJoinButton?: boolean;
	isComponent?: boolean;
	img?: any;
};

function ReviewHeader({ data, isComponent = false, img }: any) {
	const [sideMenu, setSideMenu] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setScrolling(true);
			} else {
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
	console.log({ data });
	return (
		<MenuOverlay>
			<MenuHeaderContainer img={img}>
				{!isComponent && (
					<MenuArea style={{ backgroundColor }}>
						<Link style={{ position: "fixed", top: 10, zIndex: 300 }} to={HOME_URL}>
							<LogoArea src={LOGO} alt="logo" />
						</Link>
						<TopNavigation textColor={color} />
						<Hamburger
							onClick={() => setSideMenu(true)}
							src={HAMBURGER}
							alt="hamburger"
						/>
					</MenuArea>
				)}
				{!isComponent && (
					<>
						<MenuHeaderWrapper style={{ backgroundColor }} />
					</>
				)}
				<SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
			</MenuHeaderContainer>
		</MenuOverlay>
	);
}

export default function ReviewTripHeader({
	data,
	showJoinButton = false,
	isComponent = false,
	img,
}: MainTripHeaderProps) {
	return (
		<ReviewHeader
			isComponent={isComponent}
			data={data}
			showJoinButton={showJoinButton}
			img={img}
		/>
	);
}
