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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, est?
          Possimus eligendi optio amet, culpa dolor velit facilis error
          exercitationem!
        </p>
        <div>
          <p>Location 1 | Location 2</p>
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
