import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user || !user.isAdmin) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default ProtectedRoute;
