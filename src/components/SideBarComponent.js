import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/SideBarStyles.css";

function SideBar() {
  function buildQueryString(operation, valueObj) {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  }

  return (
    <div className="sidebar">
      <Link to={buildQueryString("query", { city: "Manchester" })}>
        Manchester
      </Link>
      <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
      <Link to={buildQueryString("query", { city: "Sheffield" })}>
        Sheffield
      </Link>
      <Link to={buildQueryString("query", { city: "Liverpool" })}>
        Liverpool
      </Link>
      <Link to={buildQueryString("sort", { price: 1 })}>
        Sort By Price Ascending
      </Link>
      <Link to={buildQueryString("sort", { price: -1 })}>
        Sort By Price Descending
      </Link>
    </div>
  );
}

export default SideBar;
