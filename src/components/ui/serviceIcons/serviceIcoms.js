import styles from "./serviceIcons.module.scss";

const ServiceIcons = (props) => {
  return (
    <div className={styles.serviceIconsContainer}>
      {props.list.map(item => <div className={styles.serviceIconItem}>{item}</div>
      )}
    </div>
  );
};

export default ServiceIcons;
