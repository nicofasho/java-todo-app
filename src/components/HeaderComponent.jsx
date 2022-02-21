import { Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

export default function HeaderComponent(props) {
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(
  //   AuthenticationService.isUserLoggedIn()
  // );

  function logout() {
    AuthenticationService.logout();
    props.setIsUserLoggedIn(AuthenticationService.isUserLoggedIn());
    props.navigate("/login");
  }

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>
          <a href="/" className="navbar-brand">
            Nola App Dev
          </a>
        </div>
        <ul className="navbar-nav">
          {props.isUserLoggedIn && (
            <li>
              <Link to={`/welcome/${props.loggedInUser}`} className="nav-link">
                Home
              </Link>
            </li>
          )}
          {props.isUserLoggedIn && (
            <li>
              <Link to="/todos" className="nav-link">
                Todos
              </Link>
            </li>
          )}
        </ul>
        <ul className="navbar-nav navbar-collapse justify-content-end">
          {!props.isUserLoggedIn && (
            <li>
              <Link role="button" to="/login" className="pe-auto nav-link">
                Login
              </Link>
            </li>
          )}
          {props.isUserLoggedIn && (
            <li
              style={{ cursor: "pointer" }}
              className="nav-link"
              onClick={logout}
            >
              Logout
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
