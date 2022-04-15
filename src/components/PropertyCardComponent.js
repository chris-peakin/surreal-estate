import React from "react";
import "../styles/PropertyCardStyles.css";
import PropTypes from "prop-types";

function PropertyCard(props) {
  const { houseInfo } = props;
  return (
    <div className="property-card" data-testid="property-card">
      <div className="title" data-testid="property-card__title">
        {houseInfo.title}
      </div>
      <div className="type-city" data-testid="property-card__type">
        {houseInfo.type}
      </div>
      <div className="type-city" data-testid="property-card__city">
        {houseInfo.city}
      </div>
      <div className="bathrooms" data-testid="property-card__bathrooms">
        Bathrooms: {houseInfo.bathrooms}
      </div>
      <div className="bedrooms" data-testid="property-card__bedrooms">
        Bedrooms: {houseInfo.bedrooms}
      </div>
      <div className="price" data-testid="property-card__price">
        £{houseInfo.price}
      </div>
      <div className="email" data-testid="property-card__email">
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
