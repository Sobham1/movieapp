import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link
          to="/"
          style={{
            fontFamily: "Lucida Console",
            fontSize: "1.7rem",
            color: "indianred",
            borderRadius: "5px",
            padding: "3px 5px",
          }}
        >
          MovixHub🍿
        </Link>
      </div>

      <div className="navbar-brand">
        <h2
  style={{
    animation: "fadeAndDisappear 4s ease-in-out forwards",
    color: "#fff",
    backgroundColor: "#444",
    padding: "10px 20px",
    borderRadius: "10px",
    display: "inline-block",
    fontFamily: "Lucida Console",
    fontSize: "1.5rem",
  }}
>
  It's movie time
</h2>

<style>{`
  @keyframes fadeAndDisappear {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
`}</style>

      </div>

      <div className="navbar-links" style={{ fontFamily: "Lucida Console" }}>
        <Link
          to="/"
          className="nav-link"
          style={{ color: "indianred", fontSize: "1.2rem" }}
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="nav-link"
          style={{ color: "indianred", fontSize: "1.2rem" }}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
