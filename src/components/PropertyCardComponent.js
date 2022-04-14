import React from "react";
import "../styles/PropertyCardStyles.css";
import PropTypes from "prop-types";

function PropertyCard(props) {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="property-card">
      <div className="title">{title}</div>
      <div className="type-city">
        {type}
        {city}
      </div>
      <div className="bathrooms">{bathrooms}</div>
      <div className="bedrooms">{bedrooms}</div>
      <div className="price">{price}</div>
      <div className="email">
        <a href={`mailto:${{ email }}`}>Send email</a>
      </div>
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
