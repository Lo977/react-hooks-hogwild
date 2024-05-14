import React from "react";

function Filter({ handleFilter }) {
  return (
    <div>
      <span>Filter Hogs:</span>
      <select name="filter" onChange={handleFilter}>
        <option value="All">All Hogs</option>
        <option value="greased">Greased</option>
      </select>
    </div>
  );
}

export default Filter;
