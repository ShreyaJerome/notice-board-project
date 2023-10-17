import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="corner">
        <img
          className="college_logo"
          src="https://upload.wikimedia.org/wikipedia/en/1/13/Sathyabama_Institute_of_Science_and_Technology_logo.png"
        ></img>
        <Link to="/" className="logo">
          Notice Board
        </Link>
      </div>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
