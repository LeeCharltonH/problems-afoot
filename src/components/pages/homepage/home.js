import styles from "./home.module.scss";

import Main from "../../layout/main/main";
import Section from "../../layout/section/section";
import Profile from "../../ui/profile/profile";

import ServiceIcons from "../../ui/serviceIcons/serviceIcoms";

const Home = (props) => {
  const services = [
    "Corn and Callus Removal",
    "Gait Analysis",
    "Musculoskeletal Issues",
    "Ingrown Toenails",
    "Fungal Nails",
    "Verrucae",
    "Foot Pain",
    "Leg Pain",
  ];

  return (
    <div className="styles.home">
      <Main>
        <Section>
          <Profile profileItem={<img
              src={require("../../../assets/images/alison-charlton-podiatrist.jpeg")}
              alt="Alison Charlton Problems Afoot Podiatry"
              className={styles.profileImage}
            />}/>
        </Section>
        <Section h2="Services">
          <ServiceIcons list={services} />
        </Section>
        <Section h2="Locations">
          
        </Section>
        <Section h2="Reviews"></Section>
      </Main>
    </div>
  );
};

export default Home;
