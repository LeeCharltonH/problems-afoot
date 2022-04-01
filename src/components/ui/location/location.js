import styles from "./location.module.scss";
import Map from "../map/map";
import Card from "../card/card";

const Location = (props) => {
  const lng = props.lng;
  const lat = props.lat;

  return (
    <Card>
      <div className={styles.locationContent}>
        <div className={styles.locationItem}>
          <div className={styles.locationItemLeft}>
            <Map lat={lat} lng={lng}/>
          </div>
        </div>
        <div className={styles.locationItem}>
          <div className={styles.locationItemRight}>
            <h2>{props.title}</h2>
            <p>{props.description}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Location;
