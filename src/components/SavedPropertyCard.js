import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import PropTypes from "prop-types";

function SavedPropertyCard(props) {
  const { title, _id, onRemoveProperty } = props;
  return (
    <>
      <div>{title}</div>
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
  _id: PropTypes.string,
  title: PropTypes.string,
  onRemoveProperty: PropTypes.func,
}.isRequired;
