import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  // ถ้า authenticate user มีค่า ให้ redirect ไปหน้า home
  if (authUser) {
    return <Navigate to="/" />;
  }
  return children;
}
