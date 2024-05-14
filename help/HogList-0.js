import React, { useState } from "react";
import HogCard from "./HogCard-0";
import Filter from "./Filter-0";
import Sort from "./Sort-0";

function HogList({ hogs }) {
  console.log(hogs);

  const [filtered, setFiltered] = useState("All");
  const [sorted, setSorted] = useState("All");

  function handleFilterChange(event) {
    setFiltered(event.target.value);
  }

  function handleSortChange(event) {
    setSorted(event.target.value);
  }

  const hogsToDisplay = hogs.filter((hog) => filtered === "All" || hog.greased);

  switch (sorted) {
    case "Name":
      hogsToDisplay.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Weight":
      hogsToDisplay.sort((a, b) => a.weight - b.weight);
      break;
    default:
      hogsToDisplay.sort();
  }

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <Sort onSortChange={handleSortChange} />
      <div className="ui link cards">
        {hogsToDisplay.map((hog) => (
          <HogCard key={hog.name} hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default HogList;
