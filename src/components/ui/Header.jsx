import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Login">
        <button>Login</button>
      </Link>
      <Link to="/Complete">
        <button>Complete</button>
      </Link>
    </div>
  );
}
