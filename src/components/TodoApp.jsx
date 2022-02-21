import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import withNavigation from "./WithNavigation";
import withParams from "./WithParams";
import HeaderComponent from "./HeaderComponent";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import FooterComponent from "./FooterComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import AuthenticationService from "./AuthenticationService";

function TodoApp() {
  const LoginComponentWithNavigation = withNavigation(LoginComponent);
  const WelcomeComponentWithParams = withParams(WelcomeComponent);
  const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    AuthenticationService.isUserLoggedIn()
  );
  const [loggedInUser, setLoggedInUser] = useState("");
  const [hasLoginFailed, setHasLoginFailed] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <div className="TodoApp">
      <Router>
        <HeaderComponentWithNavigation
          isUserLoggedIn={isUserLoggedIn}
          setIsUserLoggedIn={setIsUserLoggedIn}
          loggedInUser={loggedInUser}
        />
        <Routes>
          <Route
            path="/"
            element={
              <LoginComponentWithNavigation
                hasLoginFailed={hasLoginFailed}
                showSuccessMessage={showSuccessMessage}
                setShowSuccessMessage={setShowSuccessMessage}
                setHasLoginFailed={setHasLoginFailed}
                setLoggedInUser={setLoggedInUser}
                setIsUserLoggedIn={setIsUserLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LoginComponentWithNavigation
                hasLoginFailed={hasLoginFailed}
                showSuccessMessage={showSuccessMessage}
                setShowSuccessMessage={setShowSuccessMessage}
                setHasLoginFailed={setHasLoginFailed}
                setLoggedInUser={setLoggedInUser}
                setIsUserLoggedIn={setIsUserLoggedIn}
              />
            }
          />
          <Route
            path="/welcome/:name"
            element={
              <AuthenticatedRoute>
                <WelcomeComponentWithParams />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/todos"
            element={
              <AuthenticatedRoute>
                <ListTodosComponent />
              </AuthenticatedRoute>
            }
          />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default TodoApp;
