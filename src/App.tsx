import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { mainRoutes } from "./routes/main";
import ProtectedRoute from "./utilities/ProtectedRoute";

function App() {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location?.pathname}>
        {mainRoutes.map(({ path, Component, id, isProtected, showBottomNav }) => (
          <Route
            key={id}
            path={path}
            element={
              <ProtectedRoute isProtected={isProtected}>
                <Component />
                {/* <BottomNavigation isProtected={showBottomNav} /> */}
              </ProtectedRoute>
            }
            // exact={exact}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
