import Card from "../card/card";
import styles from "./profile.module.scss";

const Profile = (props) => {
  return (
    <article className={styles.profileContainer}>
      <Card>
        <div className={styles.profileContent}>
          <div className={styles.profileItem}>
            <div className={styles.profileItemContent}>
                {props.profileItem}</div>
          </div>
          <div className={styles.profileItem}>
            <div className={styles.profileItemCopy}>
              <h2>Alison Charltonn <br /><span>(Bsc)</span></h2>
              <p>
                With extensive experience across both NHS and private settings,
                I have been practising podiatry for over 30 years.
              </p>
              <p>
                Since qualification I have undertaken postgraduate education in
                wound care and musculo-skeletal disorders. To complement his I
                have trained in shockwave therapy (ESWT) to relieve chronic
                disorders.
              </p>
              <p>
                Whilst in the NHS I was involved in high risk wound care working
                across hospitals, domiciliary and community settings.
              </p>
              <p>
                I enjoy making feet more comfortable. From an ingrown nail,
                through to crippling corns to tender tendons; I’m here to help!
              </p>
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Profile;
