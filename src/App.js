import logo from "./logo.svg";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";
const storageUserName = localStorage.getItem("userName");
const storageIsAuth = localStorage.getItem("isAuth");

function App() {
  const [isAuth, setIsAuth] = useState(storageIsAuth || false);
  const [userName, setUserName] = useState(storageUserName || "");
  const [IsLoading, setLoading] = useState(true);

  const handleLogOut = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
    localStorage.removeItem("userName");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        userName,
        setUserName,
        setIsAuth,
        handleLogOut,
        IsLoading,
      }}
    >
      <BrowserRouter>
        {/* <Navbar /> */}
        <AppRouter />
      </BrowserRouter>{" "}
    </AuthContext.Provider>
  );
}

export default App;
