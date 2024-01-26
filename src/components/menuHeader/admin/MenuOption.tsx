import { useNavigate } from "react-router-dom";
import { MenuOptionContainer } from "./style";

export function MenuOption({ title, link, activeIcon, icon }: any) {
	const navigate = useNavigate();
	function handleNavigate() {
		navigate(link);
	}
	const isActive = (link === window.location.pathname);
	return (
		<MenuOptionContainer isActive={isActive} onClick={handleNavigate}>
			{isActive ? activeIcon : icon}
			<p>{title}</p>
		</MenuOptionContainer>
	);
}