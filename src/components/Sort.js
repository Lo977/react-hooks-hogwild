import React from "react";

export default function Sort({ handleSort }) {
  return (
    <div>
      <span>Sort Hogs:</span>
      <select name="filter" onChange={handleSort}>
        <option value="All">All</option>
        <option value="Name">Name</option>
        <option value="Weight">Weight</option>
      </select>
    </div>
  );
}
