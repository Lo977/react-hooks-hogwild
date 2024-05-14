import React, { useState } from "react";

function NewForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: 1,
    image: "",
  });

  function handleInput(e) {
    const key = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({ ...formData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({ name: "", specialty: "", weight: 1, image: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleInput}
          placeholder="type name here..."
        />
        <input
          id="specialty"
          type="text"
          value={formData.specialty}
          onChange={handleInput}
          placeholder="specialty here..."
        />

        <input
          id="weight"
          type="number"
          value={formData.weight}
          onChange={handleInput}
          placeholder="weight here..."
        />
        <input
          id="image"
          type="text"
          value={formData.image}
          onChange={handleInput}
          placeholder="image URL here..."
        />
        <label>
          Greased?: Yes
          <input
            id="greased"
            type="checkbox"
            checked={formData.greased}
            onChange={handleInput}
          />
        </label>
        <input type="submit" style={{ margin: "5px" }} />
      </form>
    </div>
  );
}
export default NewForm;
