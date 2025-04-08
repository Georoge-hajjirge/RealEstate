import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../features/auth";

const PrivateRoute: React.FC = () => {
  const token = useSelector(selectToken);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
