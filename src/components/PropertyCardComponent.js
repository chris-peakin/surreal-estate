import React from "react";
import "../styles/PropertyCardStyles.css";
import PropTypes from "prop-types";
import { FaBed, FaBath, FaPoundSign, FaHouseUser } from "react-icons/fa";

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
        <FaHouseUser /> {title}
      </div>
      <div className="card-item" data-testid="property-card__type">
        {type} - {city}
      </div>
      <div className="card-item" data-testid="property-card__bathrooms">
        <FaBath /> {bathrooms}
      </div>
      <div className="card-item" data-testid="property-card__bedrooms">
        <FaBed /> {bedrooms}
      </div>
      <div className="card-item" data-testid="property-card__price">
        <FaPoundSign /> {price}
      </div>
      <div className="save" data-testid="property-card__email">
        <form action={`mailto:${email}`}>
          <button type="submit">Send Email</button>
        </form>
      </div>
      <div className="save">
        {userId && (
          <button
            type="submit"
            onClick={() => onSaveProperty(_id)}
            className="save"
          >
            Add To Favourites
          </button>
        )}
      </div>
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
