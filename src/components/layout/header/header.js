import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        scr={require("../../../assets/images/Logo_v_transparent.png")}
        alt="Problems Afoot"
      />
      <h1>Problems Afoot</h1>
    </div>
  );
};

export default Header;
