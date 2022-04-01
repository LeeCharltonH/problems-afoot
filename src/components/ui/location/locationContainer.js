import Location from "./location";
import React from "react";

const LocationContainer = (props) => {
  return (
      <React.Fragment>
        <Location lng={-1.440762} lat={51.747763} title='Witney' description={`WATERSIDE THERAPY,
THE ISLAND,
HARDWICK,
WITNEY,
OX29 7QF`}/>
        <Location lng={-1.348994} lat={51.848967} title='Woodstock' description={`THE OLD TANNERY,
HENSINGTON ROAD,
WOODSTOCK,
OX20 1JH`} />
      </React.Fragment>
  );
};

export default LocationContainer;
