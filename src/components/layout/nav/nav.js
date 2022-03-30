import styles from "./nav.module.scss";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/locations">
          <li>Locations</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
