import React, { createContext, useState  } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Layout from "./Layout";
import Views from "./Screens/Views.js";
import InterestMatching from "./Screens/Users/InterestMatching";

export const AuthContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') || false);

  const handleLogin = (val) => {
    setIsLoggedIn(val);
  }

  const handleLogout = (val) => {
    setIsLoggedIn(val);
  }

  return (
    <Router>
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login handleLogin={handleLogin} />} />
        {isLoggedIn && (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
          {!isLoggedIn ? (
            <Route path="*" element={<Navigate to="/login" replace />} />
          ) : (
            <>
              <Route path="/" element={<Layout />}>
              <Route path="/" element={<Views />} />
              <Route path="/interestmatching" element={<InterestMatching />} />

              </Route>
              

            </>
          )}
      </Routes>
    </AuthContext.Provider>
  </Router>
  );

 
};

export default App;
