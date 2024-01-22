import { MenuOptionContainer } from "./style";
import useAppNavigator from "hooks/useAppNavigator";

export function MenuOption({ title, link, activeIcon, icon }: any) {
	const { appNavigator } = useAppNavigator();
	function handleNavigate() {
		appNavigator(link);
	}
	const isActive = link === window.location.pathname;
	return (
		<MenuOptionContainer isActive={isActive} onClick={handleNavigate}>
			{isActive ? activeIcon : icon}
			<p>{title}</p>
		</MenuOptionContainer>
	);
}
