import styles from "./serviceIcons.module.scss";
import { HashLink } from "react-router-hash-link";

const ServiceIcons = (props) => {
  return (
    <div className={styles.serviceIconsContainer}>
      {props.list.map((item) => (
          <div key={Math.random()}>
        <HashLink smooth to={`/services/#${item.replaceAll(" ", "-")}`}>
          <div className={styles.serviceIconItem} >
            {item}
          </div>
        </HashLink>
        </div>
      ))}
    </div>
  );
};

export default ServiceIcons;
