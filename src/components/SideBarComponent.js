import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import "../styles/SideBarStyles.css";

function SideBar() {
  const { search } = useLocation();
  function buildQueryString(operation, valueObj) {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  }

  const [query, setQuery] = useState("");

  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Property title search..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        Sort By City:
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
      </div>
      <div>
        Sort By Price:
        <Link to={buildQueryString("sort", { price: 1 })}>Ascending</Link>
        <Link to={buildQueryString("sort", { price: -1 })}>Descending</Link>
      </div>
    </div>
  );
}

export default SideBar;
