import { Link, useLocation, useNavigate } from "react-router-dom";

export default function useAppNavigator() {
	const location = useLocation();
	const navigate = useNavigate();
	function appNavigator(link: string, props?: any) {
		navigate(link, {
			state: { email: "", ...location.state, ...props },
		});
	}

	function AppLink({ children, link, props }: any) {
		return (
			<Link to={link} state={{ ...location.state, ...props }}>
				{children}
			</Link>
		);
	}

	return {
		appNavigator,
		browserState: { email: "", ...location.state },
		currentPath: location.pathname,
		AppLink,
	};
}
