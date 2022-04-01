
import Main from "../../layout/main/main";
import Section from "../../layout/section/section";

import TabbedServices from "./tabbedServices";
import ListedServices from "./listedServices";

const Services = (props) => {
 

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
