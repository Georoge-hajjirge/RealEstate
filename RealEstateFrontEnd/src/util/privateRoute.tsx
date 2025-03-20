import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authProvider"

const PrivateRoute:React.FC=()=>{
    const {token}=useAuth();
    console.log('PrivateRoute checking token:', token);
    if(!token){
        return <Navigate to="/login" />;
    }
    return <Outlet/>
}
export default PrivateRoute;