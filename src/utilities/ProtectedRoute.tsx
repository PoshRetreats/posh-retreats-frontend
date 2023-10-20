// import { useLocation } from "react-router-dom";
// import { getAuthCookie } from "./helpers";

import { ADMIN_LOGIN } from "routes/frontend";

// function getAuthCookie() {
//   return null;
// }

// function useAuthStore(state: any) {
//   return null;
// }

// const cookieToken = getAuthCookie();

export default function ProtectedRoute({ children, isProtected }: any) {
  const token = cookieToken;
  const location = useLocation();

  if (isProtected && !token) {
    return <Navigate to={ADMIN_LOGIN} state={{ from: location }} replace />;
  } else if (!!token && !isProtected) {
    return <Navigate to={HOME_URL} state={{ from: location }} replace />;
  } else {
    return children;
  }
}
