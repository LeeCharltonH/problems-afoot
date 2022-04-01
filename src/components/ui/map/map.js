import { Loader } from "@googlemaps/js-api-loader";
import styles from './map.module.scss';

const Map = (props) => {

  const mapId = 'map' + Math.random();

  const lat = props.lat;
  const lng = props.lng;
  

    const loader = new Loader({
        apiKey: "AIzaSyAo2zDg700bPQCEZKevXv5MhQCEcUIVtaA",
        version: "weekly",
        libraries: ["places"]
      });
      
      const mapOptions = {
        center: {
          lat: lat,
          lng: lng
        },
        zoom: 15,
        mapId: "b51a379d20bd7fc9",
        disableDefaultUI: true
      };
    
      loader
      .load()
      .then((google) => {
        const map = new google.maps.Map(document.getElementById(`${mapId}`), mapOptions);
        new google.maps.Marker({
          position: {
            lat: lat,
            lng: lng
          },
          map,
          title: "Problems Afoot",
        })
      })
      .catch(e => {
        console.log("Caught");
      });

  return <div id={mapId} className={styles.map}></div>;
};

export default Map;
