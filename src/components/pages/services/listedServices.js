const ListedServices = (props) => {
  const services = [
    {
      title: "Nail Surgery",
      description: `If conservative measures fail, then nail avulsion will be offered as part of a management plan.

A local anaesthetic into the toe is followed by partial or total removal of the nail. The nail bed can then be treated with a chemical to prevent regrowth of the nail. The fee includes the surgery, follow up appointments and dressings.
        
Prices vary depending on the number of nails involved.`,
      price: 360,
      img: function () {
        return this.title.toLowerCase().replaceAll(" ", "-") + ".jpeg";
      },
    },{
        title: "MSK",
        description: `Podiatry Musculoskeletal Podiatry (MSK) is the assessment, diagnosis and treatment of a condition affecting the lower limb and foot.

Patients are assessed during standing, sitting and walking. Feet have a huge influence over other parts of the body and their movement.
        
If the cause of pain is reversible, then a treatment plan will be formulated and may involve exercise regimes, footwear advice, insoles/orthoses and if required, an onward referral.`,
        price: 59,
        img: function () {
          return this.title.toLowerCase().replaceAll(" ", "-") + ".jpeg";
        },
      },
      {
        title: "Orthoses",
        description: `Not all MSK patients will be prescribed insoles and often they are only to be used for a short time while an injury heals.

Pricing according to prescription`,
        price: `${40} - ${280}`,
        img: function () {
          return this.title.toLowerCase().replaceAll(" ", "-") + ".jpeg";
        },
      },{
        title: "ESWT",
        description: `ESWT (Extracorporeal Shockwave treatment) is a non-invasive application of shockwaves to tendinous areas.

This is used on chronic pain to
        
    Increase the blood into the surrounding tissues
    Begin the healing process by cell activation
    Reduce the pain felt by nerve fibres

The shockwaves are produced by a hand held device which delivers shockwaves through the skin to the target area.
Areas commonly treated with this equipment are plantar fasciiosis and achilles tendinopathy.
        
The suitability of ESWT is assessed at an initial assessment appointment. Evidence suggests up to 6 treatments to aid healing, but many resolve with 3.`,
        price: 240,
        img: function () {
          return this.title.toLowerCase().replaceAll(" ", "-") + ".jpeg";
        },
      },
      {
        title: "Onward Referral",
        description: `After an initial consultation, it may become apparent that an onward referral is indicated.

If I feel this is in your best interests, I will discuss it with you and send you a copy of the referral for your records.
These include:

    Domiciliary Podiatrist
    NHS Podiatry Services
    Falls Clinic
    Dermatologist
    Foot and Ankle (Podiatric) Surgeon
    Physiotherapist
    Osteopath
    Pain Clinic (via GP)
    Imaging
    Solemates (nail cutting service run by volunteers)`,
        price: 15,
        img: function () {
          return this.title.toLowerCase().replaceAll(" ", "-") + ".jpeg";
        },
      },{
        title: "Fungal Nails",
        description: `The incidence of fungal nails increases with age and it is the most common disease of the nails.

It promotes thickening of the nail which become discoloured, brittle and sometimes painful. It also destroys the nail plate structures.
        
Once identified as a fungal nail, it can be treated with a varying amount of success.
        
Major medical insurance companies regard this as a cosmetic treatment, but the nails can become very uncomfortable and embarrassing, The sooner they are treated, the more likely a successful outcome.
        
For superficial infections, there are products available which can be painted onto the nails. For more established conditions, fenestration is indicated, which involves small holes painlessly drilled into the nail plate and a fungicide applied daily. The holes must be reinstated every 8 weeks.`,
        price: `${69} plus fungicide`,
        img: function () {
          return this.title.toLowerCase().replaceAll(" ", "-") + ".jpeg";
        },
      },{
        title: "Virtual Consultation",
        description: `If you have an issue you would like to discuss via videolink, I am now able to offer these appointments.

They are suitable for initial MSK consultations or if you would simply like an opinion prior to a physical visit.
        
After the appointment is made, you will be sent a link to enter a virtual waiting room where I will accept you into the consultation.
        
We can discuss your concerns and I can give you my opinion on the best way forward.`,
        price: 40,
        img: function () {
          return this.title.toLowerCase().replaceAll(" ", "-") + ".jpeg";
        },
      },
  ];
  return <div></div>;
};

export default ListedServices;
