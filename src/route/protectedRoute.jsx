import { Navigate } from "react-router-dom";

const protectedRoute = ({children}) =>{
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if(!isLoggedIn){
        return <Navigate to="/login" replace />
    }
    return children
}

export default protectedRoute;