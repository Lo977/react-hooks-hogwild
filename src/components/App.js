import React, { useState } from "react";
import HogCard from "./HogCard";
import Filter from "./Filter";
import Sort from "./Sort";
import NewForm from "./NewForm";
import Nav from "./Nav";
import hogs from "../porkers_data";

function App() {
  const [isFilter, setIsfilter] = useState("All");
  const [isSort, setIsSort] = useState("All");
  const [hogsData, setHogsData] = useState(hogs);

  function handleSubmit(newObj) {
    setHogsData([...hogsData, newObj]);
  }
  console.log(hogsData);

  function handleFilter(e) {
    setIsfilter(e.target.value);
  }
  function handleSort(e) {
    setIsSort(e.target.value);
  }

  const filteredHogs = hogsData.filter(
    (hog) => hog.greased || isFilter === "All"
  );
  switch (isSort) {
    case "Name":
      filteredHogs.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Weight":
      filteredHogs.sort((a, b) => a.weight - b.weight);
      break;
    default:
      filteredHogs.sort();
  }

  return (
    <div className="App">
      <Nav />
      <Filter handleFilter={handleFilter} />
      <Sort handleSort={handleSort} />
      <NewForm onFormSubmit={handleSubmit} />

      <div className="ui link cards">
        {filteredHogs.map((hog) => (
          <HogCard key={hog.name} hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default App;
