import AuthenticationService from "./AuthenticationService";
import { Navigate } from "react-router-dom";

export default function AuthenticatedRoute(props) {
  return AuthenticationService.isUserLoggedIn() ? (
    { ...props.children }
  ) : (
    <Navigate to="/login" />
  );
}
