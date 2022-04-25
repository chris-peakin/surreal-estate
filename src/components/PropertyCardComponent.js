import React from "react";
import "../styles/PropertyCardStyles.css";
import PropTypes from "prop-types";
import {
  FaBed,
  FaBath,
  FaPoundSign,
  FaHouseUser,
  FaHeart,
  FaCity,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

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
        <FaCity /> {city} - {type}
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
          <button type="submit">
            <FiMail />
            Send Email
          </button>
        </form>
      </div>
      <div className="save">
        {userId && (
          <button
            type="submit"
            onClick={() => onSaveProperty(_id)}
            className="save"
          >
            <FaHeart /> Add To Favourites
          </button>
        )}
      </div>
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  _id: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  city: PropTypes.string,
  bathrooms: PropTypes.number,
  bedrooms: PropTypes.number,
  price: PropTypes.number,
  email: PropTypes.string,
  userId: PropTypes.number,
  onSaveProperty: PropTypes.func,
}.isRequired;
