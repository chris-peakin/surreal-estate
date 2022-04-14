import React from "react";
import "../styles/PropertyCardStyles.css";
import PropTypes from "prop-types";

function PropertyCard(props) {
  const { houseInfo } = props;
  return (
    <div className="property-card">
      <div className="title">{houseInfo.title}</div>
      <div className="type-city">{houseInfo.type}</div>
      <div className="type-city">{houseInfo.city}</div>
      <div className="bathrooms">{houseInfo.bathrooms}</div>
      <div className="bedrooms">{houseInfo.bedrooms}</div>
      <div className="price">£{houseInfo.price}</div>
      <div className="email">
        <a href={`mailto:${houseInfo.email}`}>Send email</a>
      </div>
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  houseInfo: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      type: PropTypes.string,
      city: PropTypes.string,
      bathrooms: PropTypes.number,
      bedrooms: PropTypes.number,
      price: PropTypes.number,
      email: PropTypes.string,
    })
  ).isRequired,
};
