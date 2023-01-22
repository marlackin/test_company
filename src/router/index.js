/* import About from "../pages/About"
import Posts from "../pages/Posts"
import PostIdPage from "../pages/PostIdPage" */
import Login from "../pages/login/loginPage";
import Main from "../pages/main/mainPage";

export const privateRoutes = [
  { path: "/main", element: <Main />, exact: true },
];

export const publicRoutes= [
    {path:'/login', element:<Login/>, exact:true}
]
