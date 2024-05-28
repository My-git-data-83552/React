import { Link, useNavigate } from "react-router-dom"

function navBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" >
            Menu Bro!
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link to={'/home'} class="nav-link" href="/">
                Home
              </Link>
              <Link to={'/property'} class="nav-link" href="/">
                Properties
              </Link>
              <Link to={'/user'} class="nav-link" href="/">
                Users
              </Link>
              <Link to={'/bookings'} class="nav-link" href="/">
                Bookings
              </Link>
              <Link to={'/login'} class="nav-link" href="/">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navBar;
