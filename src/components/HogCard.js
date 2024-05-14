import React, { useState } from "react";

function HogCard({ hog }) {
  const [isClicked, setIsClick] = useState(false);
  const [isHide, setIsHide] = useState(false);

  function handleClick() {
    setIsClick(!isClicked);
  }
  function handleHide() {
    setIsHide(!isHide);
  }

  return (
    <div
      className="ui card"
      style={isHide ? { display: "none" } : { display: "" }}
      onClick={handleClick}
    >
      <img src={hog.image} alt={hog.name} />
      <h2>{hog.name}</h2>

      {isClicked ? (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
          <p>Weight: {hog.weight} lbs</p>
        </div>
      ) : null}
      <button onClick={handleHide}>Hide This Hog</button>
    </div>
  );
}
export default HogCard;
