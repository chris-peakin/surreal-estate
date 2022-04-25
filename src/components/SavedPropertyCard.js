import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import PropTypes from "prop-types";

function SavedPropertyCard(_id, title, city, onRemoveProperty) {
  return (
    <>
      <div>
        {title} - {city}
      </div>
      <div>
        <button
          type="submit"
          onClick={() => onRemoveProperty(_id)}
          className="remove"
        >
          <FaHeartBroken /> Remove from Favourites
        </button>
      </div>
    </>
  );
}

export default SavedPropertyCard;

SavedPropertyCard.propTypes = {
  _id: PropTypes.number,
  title: PropTypes.string,
  city: PropTypes.string,
  onRemoveProperty: PropTypes.func,
}.isRequired;
