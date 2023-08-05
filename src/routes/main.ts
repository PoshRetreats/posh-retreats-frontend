import Login from "pages/authPages/login/Login";
import SignUp from "pages/authPages/signup/SignUp";
import NotFound from "pages/notFound";


export const mainRoutes = [
  {
    id: 1,
    path: WELCOME_URL,
    Component: Welcome,
    exact: true,
    isProtected: false,
    hide: false,
    showBottomNav: false,
  },
  {
    id: 0,
    path: "*",
    Component: NotFound,
    exact: false,
    isProtected: false,
    hide: false,
  },
];
