import Card from "../card/card";
import styles from "./profile.module.scss";

const Profile = (props) => {
  const data = props.data;


  return (
    <article
      id={data.title.replaceAll(" ", "-")}
      className={styles.profileContainer}
      key={Math.random()}
    >
      <Card>
        <div className={styles.profileContent}>
          <div className={styles.profileItem}>
            <div className={styles.profileItemContent}>
              <img
                src={require(`../../../assets/images/${data.img()}`)}
                alt={data.title}
              />
            </div>
          </div>
          <div className={styles.profileItem}>
            <div className={styles.profileItemCopy}>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              {data.price > 0 ? <p>Fee £{data.price}</p> : ""}
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Profile;
