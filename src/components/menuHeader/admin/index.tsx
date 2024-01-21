import { LOGO } from "assets";
import {
	AdminMenuContainer,
	MenuList,
	MenuLogo,
	MenuOptionContainer,
} from "./style";
import { MenuOption } from "./MenuOption";
import { data } from "./menuData";
import { removeAuthCookie } from "utilities/helpers";
import useAppNavigator from "hooks/useAppNavigator";
import { ADMIN_LOGIN } from "routes/frontend";

export default function AdminMenu() {
	const { appNavigator } = useAppNavigator();
	function logoutAdmin() {
		removeAuthCookie();
		appNavigator(ADMIN_LOGIN);
	}
	return (
		<AdminMenuContainer>
			<MenuLogo src={LOGO} alt="lofo" />
			<MenuList>
				{data.map(({ title, link, activeIcon, icon }, i) => (
					<MenuOption
						key={i}
						title={title}
						link={link}
						activeIcon={activeIcon}
						icon={icon}
					/>
				))}
				<MenuOptionContainer onClick={logoutAdmin}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 14 14"
						fill="none"
					>
						<path
							d="M12.6 7.07C12.53 7.07 12.39 7.14 12.32 7.21L11.62 7.91L13.09 9.38L13.79 8.68C13.93 8.54 13.93 8.26 13.79 8.12L12.88 7.21C12.81 7.14 12.74 7.07 12.6 7.07ZM11.27 8.33L7 12.53V14H8.47L12.74 9.73L11.27 8.33ZM12.6 4.2H7V0H12.6V4.2ZM7 10.542V5.6H12.6V5.67C12.068 5.67 11.599 5.95 11.333 6.223L7 10.542ZM5.6 7H0V0H5.6V7ZM5.6 12.6H0V8.4H5.6V12.6Z"
							fill="#020E07"
						/>
					</svg>
					<p>Log Out</p>
				</MenuOptionContainer>
			</MenuList>
		</AdminMenuContainer>
	);
}
