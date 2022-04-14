/* eslint-disable prettier/prettier */
import React from "react";
import "../styles/PropertiesStyles.css";
import PropertyCard from "./PropertyCardComponent";

function Properties() {

  const houseInfo = {
    title: "2bedhouse",
    type: "Detached",
    bedrooms: 2,
    bathrooms: 2,
    price: 100000,
    city: "Manchester",
    email: "joebloggs@gmail.com",
  }

  return (
    <div>
      <PropertyCard
        houseInfo={houseInfo}
      />
    </div>
  );
}

export default Properties;
