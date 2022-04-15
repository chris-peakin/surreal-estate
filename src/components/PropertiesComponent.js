import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/PropertiesStyles.css";
import PropertyCard from "./PropertyCardComponent";
import Alert from "./AlertComponent";

function Properties() {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing/")
      .then(({ data }) => setProperties(data))
      .catch(() =>
        setAlert({ message: "Axios promise rejected", isSuccess: false })
      );
  }, []);

  return (
    <>
      <div>
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>
      <div className="individual_properties">
        {properties.map((property) => (
          <div key={property._id} className="col">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Properties;
