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
  console.log("this is our state: ", hogsData);

  function handleFilter(e) {
    setIsfilter(e.target.value);
  }
  function handleSort(e) {
    setIsSort(e.target.value);
  }

  const filteredHogs = hogsData.filter(
    (hog) => hog.greased || isFilter === "All"
  );
  console.log("this is filtered hogs: ", filteredHogs);
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
        {filteredHogs.map((hog, index) => (
          <HogCard key={index} hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default App;
