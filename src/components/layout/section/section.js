import styles from "./section.module.scss";

const Section = (props) => {
  return (
    <section className={styles.section}>
        <h2>{props.h2}</h2>
      {props.children}
    </section>
  );
};

export default Section;