import React from "react";
import "../styles/PropertyCardStyles.css";
import PropTypes from "prop-types";

function PropertyCard({
  _id,
  title,
  type,
  city,
  bathrooms,
  bedrooms,
  price,
  email,
  userId,
  onSaveProperty,
}) {
  return (
    <div className="property-card" data-testid="property-card">
      <div className="card-item" data-testid="property-card__title">
        {title}
      </div>
      <div className="card-item" data-testid="property-card__type">
        {type}
      </div>
      <div className="card-item" data-testid="property-card__city">
        {city}
      </div>
      <div className="card-item" data-testid="property-card__bathrooms">
        Bathrooms: {bathrooms}
      </div>
      <div className="card-item" data-testid="property-card__bedrooms">
        Bedrooms: {bedrooms}
      </div>
      <div className="card-item" data-testid="property-card__price">
        £{price}
      </div>
      <div className="email" data-testid="property-card__email">
        <a href={`mailto:${email}`}>SEND EMAIL</a>
      </div>
      {userId && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" onClick={() => onSaveProperty(_id)} className="save">
          <i className="fas fa-star" />
          Save Me!
        </a>
      )}
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  _id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
};
