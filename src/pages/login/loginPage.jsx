import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import MyButton from "../../components/UI/button/myButton";
import MyInput from "../../components/UI/input/myInput";
import { AuthContext } from "../../context/index";
import "./loginPage.css";

const userPassword = process.env.REACT_APP_PASSWORD;
const userLogin = process.env.REACT_APP_LOGIN;

const Login = () => {
  const { isAuth, setIsAuth, userName, setUserName } = useContext(AuthContext);
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();
  const onLogin = (event) => {
    event.preventDefault();
    if (
      event.target.login.value === userLogin &&
      event.target.password.value === userPassword
    ) {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("userName", event.target.login.value);
      setShowWarning(false);
      setIsAuth(true);
      setUserName(event.target.login.value);
      navigate("/main");
    } else {
      setShowWarning(true);
    }
  };
  return (
    <div className="login-page">
      <div className="image-section display-none">
        <img src="" alt="" />
      </div>
      <div>
        <h1>LOG IN</h1>
        <form onSubmit={onLogin}>
          <MyInput type="text" placeholder="Введите логин" name="login" />
          <MyInput
            type="password"
            placeholder="Введите пароль"
            name="password"
          />
          {showWarning && (
            <div>
              <p>Wrong name or password. Please, try again</p>
            </div>
          )}
          <MyButton>Continue</MyButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
