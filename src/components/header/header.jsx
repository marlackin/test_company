import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";

const Header = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth, handleLogOut, userName, setUserName } =
    useContext(AuthContext);

  const onLogout = () => {
    handleLogOut();
    navigate("/login");
  };
  return (
    <header className="navbar">
      <h1>Lorem</h1>
      <div className="navbar__links">
        <p>{userName}</p>
        <p onClick={onLogout}>Logout</p>
      </div>
    </header>
  );
};

export default Header;
