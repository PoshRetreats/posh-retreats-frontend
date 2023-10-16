import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { mainRoutes } from "./routes/main";
import ProtectedRoute from "./utilities/ProtectedRoute";
import Footer from "components/footer";
import { ScrollToTop } from "components/scrollToTop";

function App() {
  const location = useLocation();
  return (
    <div>
      <ScrollToTop/>
      <Routes location={location} key={location?.pathname}>
        {mainRoutes.map(({ path, Component, id, isProtected, showBottomNav },i) => (
          <Route
            key={i}
            path={path}
            element={
              <ProtectedRoute isProtected={isProtected}>
                <Component />
                {showBottomNav && <Footer />}
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
