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
    // Currently not quite working to plan. It should render the top half if userId
    // evaluates to true, but so far this is not quite working. Work in progress.
    <div>
      {(userId && (
        <div>
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
      )) || (
        <div>
          Either you are logged out of Facebook or you have not saved any
          properties yet. Please login to Facebook and/or add some new
          properties to your favourites using the links at the top.{" "}
        </div>
      )}
    </div>
  );
}

export default SavedProperties;

SavedProperties.propTypes = {
  userId: PropTypes.number.isRequired,
};
