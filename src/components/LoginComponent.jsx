import { useState } from "react";
import AuthenticationService from "./AuthenticationService";

export default function LoginComponent(props) {
  const [username, setUsername] = useState("testuser");
  const [password, setPassword] = useState("");

  function loginClicked() {
    // hardcoded validation : testuser, asdf
    if (username === "testuser" && password === "asdf") {
      AuthenticationService.registerSuccessfulLogin(username, password);
      props.setIsUserLoggedIn(AuthenticationService.isUserLoggedIn());
      props.navigate(`/welcome/${username}`);
      props.setShowSuccessMessage(true);
      props.setHasLoginFailed(false);
      props.setLoggedInUser(username);
    } else {
      props.setShowSuccessMessage(false);
      props.setHasLoginFailed(true);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <div className="container">
        {props.hasLoginFailed && (
          <div className="alert alert-warning">Invalid Credentials</div>
        )}
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success" onClick={loginClicked}>
          Login
        </button>
      </div>
    </div>
  );
}
