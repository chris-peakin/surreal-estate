import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import PropTypes from "prop-types";

function SavedPropertyCard(_id, title, city, userId, onRemoveProperty) {
  return (
    // Note: the conditional rendering is most likely in the wrong file. This will be sorted later.
    <div>
      {(userId && (
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
      )) || <div>This is a div</div>}
    </div>
  );
}

export default SavedPropertyCard;

SavedPropertyCard.propTypes = {
  _id: PropTypes.number,
  title: PropTypes.string,
  city: PropTypes.string,
  onRemoveProperty: PropTypes.func,
}.isRequired;
