
import styles from "./nav.module.scss";

const Nav = (props) => {
  return (
    <nav className={styles.nav}>
        <div className={styles.navContainer}>
      <ul>
          <li>
            Home
          </li>
          <li>
            Services
          </li>
          <li>
            Contact
          </li>
      </ul>
      </div>
    </nav>
  );
};

export default Nav;
