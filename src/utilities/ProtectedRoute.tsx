import { Navigate, useLocation } from "react-router-dom";
import { getAuthCookie } from "./helpers";

import { ADMIN_HOME_URL, ADMIN_LOGIN } from "routes/frontend";

// function getAuthCookie() {
//   return null;
// }

// function useAuthStore(state: any) {
//   return null;
// }

// const cookieToken = getAuthCookie();

export default function ProtectedRoute({ children, isProtected, isAdmin }: any) {
	const token = getAuthCookie();
	const location = useLocation();

  if (isProtected && !token && isAdmin) {
		return <Navigate to={ADMIN_LOGIN} state={{ from: location }} replace />;
	} else if (!!token && !isProtected && isAdmin) {
		return <Navigate to={ADMIN_HOME_URL} state={{ from: location }} replace />;
	} else {
		return children;
	}
}
