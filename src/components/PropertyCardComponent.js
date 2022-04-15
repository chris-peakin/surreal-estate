import React from "react";
import "../styles/PropertyCardStyles.css";
import PropTypes from "prop-types";

function PropertyCard(props) {
  const { title, type, city, bathrooms, bedrooms, price, email } = props;
  return (
    <div className="property-card" data-testid="property-card">
      <div className="title" data-testid="property-card__title">
        {title}
      </div>
      <div className="type-city" data-testid="property-card__type">
        {type}
      </div>
      <div className="type-city" data-testid="property-card__city">
        {city}
      </div>
      <div className="bathrooms" data-testid="property-card__bathrooms">
        Bathrooms: {bathrooms}
      </div>
      <div className="bedrooms" data-testid="property-card__bedrooms">
        Bedrooms: {bedrooms}
      </div>
      <div className="price" data-testid="property-card__price">
        £{price}
      </div>
      <div className="email" data-testid="property-card__email">
        <a href={`mailto:${email}`}>Send email</a>
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
