import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SavedPropertyCard from "./SavedPropertyCard";

function SavedProperties({ userId }) {
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
      .get("http://localhost:4000/api/v1/Favourite?populate=propertyListing")
      .then(({ data }) => setProperties(data))
      .catch(() =>
        setAlert({ message: "Axios promise rejected", isSuccess: false })
      );
  }, []);

  function handleRemoveProperty(propertyId) {
    axios.delete(`http://localhost:4000/api/v1/Favourite:${propertyId}`, {
      propertyListing: propertyId,
      fbUserId: userId,
    });
  }

  return (
    <div className="individual_properties">
      {properties.map((property) => (
        <div key={property._id}>
          <SavedPropertyCard
            {...property}
            userId={userId}
            // eslint-disable-next-line react/jsx-no-bind
            onRemoveProperty={handleRemoveProperty}
          />
        </div>
      ))}
    </div>
  );
}

export default SavedProperties;

SavedProperties.propTypes = {
  userId: PropTypes.number.isRequired,
};
