import { Navigate } from "react-router-dom";

function RoleProtectedRoute({ children, requiredRole }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // If not logged in → go to login
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // If logged in but not correct role → redirect to dashboard
  if (user.role !== requiredRole) {
    return <Navigate to="/dashboard" replace />;
  }

  // Authorized → render component
  return children;
}

export default RoleProtectedRoute;
