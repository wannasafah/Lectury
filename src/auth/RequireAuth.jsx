import { Navigate } from "react-router-dom";

export const RequireAuth = ({children}) =>{
    // console.log(1);
    if(!localStorage.getItem('userid')){
        return <Navigate to="/login" />
    }
    return children;
}