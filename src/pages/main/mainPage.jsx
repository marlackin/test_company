import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import MyButton from "../../components/UI/button/myButton";
import Header from "../../components/header/header";
import Gallery from "../../components/gallery/myGallery";
import { AuthContext } from "../../context/index";

const Main = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth, handleLogOut, userName, setUserName } =
    useContext(AuthContext);

  return (
    <div>
      <Header />
      <Gallery />
      <footer></footer>
    </div>
  );
};

export default Main;
