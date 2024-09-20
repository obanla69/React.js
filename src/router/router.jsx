
// import { Outlet } from "react-router-dom"
import Layout from "../layout/Layout"
import NowPlayingMovie from "../components/NowPlayingMovie"
import SignUp from "../app/auth/SignUp";
import Login from "../app/auth/Login";
import PopularMovie from "../components/Popular";

const ROUTES = [
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<NowPlayingMovie/>
            }

        ]

    },
    {
        path:"/SignUp",
        element:<SignUp/>

        
    },
    {
        path:"/Login",
        element:<Login/> 
    },
    {
        path:"/popular",
        element:<PopularMovie/> 
    }
    


]

export default ROUTES;