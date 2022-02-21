import { Link } from "react-router-dom";

export default function WelcomeComponent(props) {
  return (
    <div>
      <h1>Welcome!</h1>
      <div className="container">
        Welcome {props.params.name}. You can manage your todos{" "}
        <Link to="/todos">here</Link>
      </div>
    </div>
  );
}
