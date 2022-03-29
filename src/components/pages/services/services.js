import styles from "./services.module.scss";
import Main from "../../layout/main/main";
import Section from "../../layout/section/section";
import ServiceIcons from "../../ui/serviceIcons/serviceIcoms";
import TabBox from "../../ui/tabbox/tabbox";
import TabbedServices from "./tabbedServices";
import ListedServices from "./listedServices";

const Services = (props) => {
  const servicesShort = [
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
    <div className="styles.services">
      <Main>
        <Section>
          <TabbedServices />
        </Section>
        <Section h2="Podiatry surgeries">
          <ListedServices />
        </Section>
      </Main>
    </div>
  );
};

export default Services;
