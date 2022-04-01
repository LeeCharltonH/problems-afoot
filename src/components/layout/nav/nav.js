import styles from "./nav.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = (props) => {
  const currentPage = window.location.pathname;
  const [activeLink, setActiveLink] = useState(`${currentPage}`);

  const activeLinkHandler = (event) => {
    const page = event.target.innerHTML;
    if (page === "About") {
      setActiveLink("/");
    } else {
      setActiveLink("/services");
    }
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <Link to="/">
          <li
            className={activeLink === "/" ? styles.active : ""}
            onClick={activeLinkHandler}
          >
            About
          </li>
        </Link>
        <Link to="/services">
          <li
            className={activeLink === "/services" ? styles.active : ""}
            onClick={activeLinkHandler}
          >
            Services
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
