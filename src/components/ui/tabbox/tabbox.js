import styles from "./tabbox.module.scss";
import { useState, useReducer } from "react";

const TabBox = (props) => {
  const tabReducer = (state, action) => {
    if (action.type === "tabClick") {
      return {
        title: action.service,
        description: action.description,
        price: action.price,
        img: props.serviceList[0].img,
      };
    }
  };

  const [serviceObj, setServiceObj] = useReducer(tabReducer, {
    title: props.serviceList[0].title,
    description: props.serviceList[0].description,
    price: props.serviceList[0].price,
    img: props.serviceList[0].img,
  });

  let title = serviceObj.title;
  const [service, setService] = useState(title);

  const serviceHandler = (event) => {
    setService(event.target.innerHTML);
    const index = props.serviceList.findIndex((obj) => obj.title === event.target.innerHTML );
    setServiceObj({ type: "tabClick", service: event.target.innerHTML, description: props.serviceList[index].description, price:  props.serviceList[index].price});
  };

  

  return (
    <div>
      <div className={styles.tabBtnContainer}>
        {props.serviceList.map((x) => {
          let title = x.title;
          return (
            <button
              key={Math.random()}
              onClick={serviceHandler}
              className={`${styles.tabBtn} ${
                service === title ? styles.active : ""
              }`}
            >
              {title}
            </button>
          );
        })}
      </div>
      <article className={styles.tabServiceContent}>
        <div className={styles.tabServiceImage}>
          <img
            src={require(`../../../assets/images/services/${serviceObj.img()}`)}
            alt={`Problems Afoot podiatry in Oxfordshire. ${serviceObj.title}.`}
          />
        </div>
        <div>
          <h2>{serviceObj.title}</h2>
          <p>{serviceObj.description}</p>
          <p>Fee £{serviceObj.price}</p>
        </div>
      </article>
    </div>
  );
};

export default TabBox;
