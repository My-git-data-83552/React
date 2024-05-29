import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const count = useSelector((state) => state.cart.items);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Menu Bro!</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to={"/home"} className="nav-link" href="/">
                Home
              </Link>
              <Link to={"/property"} className="nav-link" href="/">
                Properties
              </Link>
              <Link to={"/user"} className="nav-link" href="/">
                Users
              </Link>
              <Link to={"/bookings"} className="nav-link" href="/">
                Bookings ({count})
              </Link>
              <Link to={"/login"} className="nav-link" href="/">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
