

import Main from "../../layout/main/main";
import Section from "../../layout/section/section";
import Profile from "../../ui/profile/profile";

const Home = (props) => {

    const bio = {
        title: "Alison Charlton",
        description: `With extensive experience across both NHS and private settings, I have been practising podiatry for over 30 years.
        
Since qualification I have undertaken postgraduate education in wound care and musculo-skeletal disorders. To complement his I have trained in shockwave therapy (ESWT) to relieve chronic disorders.
        
Whilst in the NHS I was involved in high risk wound care working across hospitals, domiciliary and community settings.
        
I enjoy making feet more comfortable. From an ingrown nail, through to crippling corns to tender tendons; Im here to help!`,
        img: function () {
          return this.title.toLowerCase().replaceAll(" ", "-") + ".jpeg";
        }
      };

  return (
    <div className="styles.home">
      <Main>
        <Section>
          <Profile 
          data={bio}
         />
        </Section>
      </Main>
    </div>
  );
};

export default Home;
