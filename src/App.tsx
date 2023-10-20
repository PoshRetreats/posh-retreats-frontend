import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { mainRoutes } from "./routes/main";
import ProtectedRoute from "./utilities/ProtectedRoute";
import Footer from "components/footer";
import AdminMenu from "components/menuHeader/admin";

function App() {
	const location = useLocation();
	return (
		<div>
			<Routes location={location} key={location?.pathname}>
				{mainRoutes.map(
					(
						{ path, Component, id, isProtected, showDefaultFooter, showAdminMenu, isAdmin },
						i
					) => (
						<Route
							key={i}
							path={path}
							element={
								<ProtectedRoute isAdmin={isAdmin} isProtected={isProtected}>
									<Component />
									{showAdminMenu && <AdminMenu />}
									{showDefaultFooter && <Footer />}
								</ProtectedRoute>
							}
							// exact={exact}
						/>
					)
				)}
			</Routes>
		</div>
	);
}

export default App;
