import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "../context";
const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/main" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );

  /* const {isAuth,setIsAuth,isLoading} = useContext(AuthContext)
    console.log(isAuth)
 
    if(isLoading){
     return <Loader/>
    }
     return(
       isAuth
           ?<Routes>
           {privateRoutes.map((route) => (
             <Route 
               element ={route.element} 
               path={route.path} 
               exact = {route.exact}
               key = {route.path}
               />
           ))}
           <Route path="*" element={<Posts/>}/>
         </Routes>
           :<Routes>
             {publicRoutes.map((route) => (
             <Route 
               element ={route.element} 
               path={route.path} 
               exact = {route.exact}
               key = {route.path}
               />
           ))}
           <Route path="*" element={<Login/>}/>
           </Routes>
 
     ) */
};

export default AppRouter;
