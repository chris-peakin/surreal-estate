import React, { useState } from "react";
import "../styles/AddPropertyStyles.css";

function AddProperty() {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Detached",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  function handleAddProperty(event) {
    event.preventDefault();
    console.log(fields);
  }

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      <form onSubmit={handleAddProperty} className="Form">
        <div className="FormRule">
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="property title"
          />
        </div>
        <div className="FormRule">
          <label htmlFor="city">
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
              placeholder="city"
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <label htmlFor="type">
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Flat">Flat</option>
            </select>
          </label>
        </div>
        <div className="FormRule">
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            placeholder="no. of bedrooms"
          />
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            placeholder="no. of bathrooms"
          />
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
            placeholder="property price"
          />
        </div>
        <div className="FormRule">
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="your email eg. joe.bloggs@gmail.com"
          />
        </div>
        <button type="submit">Add Your Property</button>
      </form>
    </div>
  );
}

export default AddProperty;
