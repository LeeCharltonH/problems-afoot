import TabBox from "../../ui/tabbox/tabbox";

const TabbedServices = props => {
  const services = [
    {
      title: "Initial Assessment",
      description: `An initial assessment involves a discussion about your medical history and any medication you are currently taking.
    
Your general foothealth will be discussed and checks on your blood flow and nerve function.

Joint mobility is assessed and a routine treatment follows. This covers issues such as Long thick nails, ingrowing nails, split heels and corn and callus removal.

Any issues uncovered will be discussed alongside any future treatment plan.`,
      price: 59,
      img: function () {
        return this.title.toLowerCase().replaceAll(" ", "-") + ".jpeg";
      },
    },
    {
      title: "Routine Appointment",
      description: `Once we know each other and what your problems are, a routine visit will cover maintenance and other typical problems.

Any changes to your general health will of course, be taken into consideration.`,
      price: 49,
      img: function () {
        return this.title.toLowerCase().replaceAll(" ", "-") + ".jpeg";
      },
    },
    {
      title: "Follow Up Care",
      description: `Follow up appointments for wound care or a redressing.`,
      price: 25,
      img: function () {
        return this.title.toLowerCase().replaceAll(" ", "-") + ".jpeg";
      },
    }
  ];
  return <TabBox serviceList={services} />
};

export default TabbedServices;