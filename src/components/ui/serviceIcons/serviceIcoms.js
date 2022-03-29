import styles from "./serviceIcons.module.scss";
import { HashLink } from "react-router-hash-link";

const ServiceIcons = (props) => {
  return (
    <div className={styles.serviceIconsContainer}>
      {props.list.map((item) => (
        <HashLink smooth to={`/services/#${item.replaceAll(" ", "-")}`}>
          <div className={styles.serviceIconItem} key={Math.random()}>
            {item}
          </div>
        </HashLink>
      ))}
    </div>
  );
};

export default ServiceIcons;
