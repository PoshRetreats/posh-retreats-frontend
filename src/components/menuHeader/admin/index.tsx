import { LOGO } from "assets";
import {
	AdminMenuContainer,
	MenuList,
	MenuLogo,
} from "./style";
import { MenuOption } from "./MenuOption";
import { data } from "./menuData";



export default function AdminMenu() {
	return (
		<AdminMenuContainer>
			<MenuLogo src={LOGO} alt="lofo" />
			<MenuList>
				{data.map(({ title, link, activeIcon, icon }) => (
					<MenuOption
						title={title}
						link={link}
						activeIcon={activeIcon}
						icon={icon}
					/>
				))}
			</MenuList>
		</AdminMenuContainer>
	);
}
