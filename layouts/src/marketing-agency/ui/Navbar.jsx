// react import
import { useState } from "react";

// library import
import { useMediaQuery } from "react-responsive";

// rrd imports
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // media query hook to determine screen size
  const isBigScreen = useMediaQuery({ query: "(min-width:600px)" });

  // use rrd to get the current location and checking if the current location is home route
  const location = useLocation();
  const isHome = location.pathname === "/";

  // conditionally set the header class based on whether it's the home route
  const headerClass = `header main-grid ${isHome ? "header-home" : ""}`;

  const handleOpen = () => {
    setIsNavOpen(true);
  };

  const handleClose = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={headerClass}>
      <div className="header-content">
        <h1 className="logo">Jake&Elwood</h1>
        {!isBigScreen ? (
          !isNavOpen ? (
            <button onClick={handleOpen} className="open-nav">
              ☰
            </button>
          ) : (
            <nav className="navbar navigation-open">
              <button onClick={handleClose} className="close-nav">
                &times;
              </button>
              <ul className="nav-list">
                <li>
                  <Link className="nav-item" to="/">
                    home
                  </Link>
                </li>
                <li>
                  <Link className="nav-item" to="/about">
                    about us
                  </Link>
                </li>
                <li>
                  <Link className="nav-item" to="/contact">
                    contact
                  </Link>
                </li>
              </ul>
            </nav>
          )
        ) : (
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <Link className="nav-item" to="/">
                  home
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/about">
                  about us
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/contact">
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
