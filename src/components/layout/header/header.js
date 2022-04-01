import styles from "./header.module.scss";
import Button from "../../ui/button/button";

const Header = props => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
      <img
          src={require("../../../assets/images/logo.png")}
          alt="test"
          className={styles.logo}
        />
        <h1>Problems Afoot</h1>
        <p>
        Providing sports podiatry, routine foot care and nail surgery. A warm welcome awaits. Alison is registered with the HCPC.
        </p>
        <div>
          <p>Witney | Woodstock</p>
        </div>
        <a
          href="https://problems-afoot.selectandbook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Book Now</Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
