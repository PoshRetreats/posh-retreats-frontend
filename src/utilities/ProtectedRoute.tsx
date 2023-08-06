// import { useLocation } from "react-router-dom";
// import { getAuthCookie } from "./helpers";
// import { useAuthStore } from "zustandStore/auth";

// function getAuthCookie() {
//   return null;
// }

// function useAuthStore(state: any) {
//   return null;
// }

// const cookieToken = getAuthCookie();

export default function ProtectedRoute({ children, isProtected }: any) {
  // const authToken = useAuthStore((state: any) => state.token);
  // const token = authToken || cookieToken;
  // const location = useLocation();

  // if (isProtected && !token) {
  //   return <Navigate to={WELCOME_URL} state={{ from: location }} replace />;
  // } else if (!!token && !isProtected) {
  //   return <Navigate to={HOME_URL} state={{ from: location }} replace />;
  // } else {
  //   return children;
  // }
  return children;
}
