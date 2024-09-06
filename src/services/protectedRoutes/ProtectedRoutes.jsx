import { Outlet, Navigate } from "react-router-dom";

export const ChatProtectedRoute = () =>{
    // const isAuthenticated = true
    const accessToken = localStorage.getItem('access_token')

    if (accessToken){
        return <Outlet/>
    }else{
        return <Navigate to='/login' />
    }
}