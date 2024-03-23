import { useState } from "react";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [option, setOption] = useState("");

  console.log(description);
  console.log(option);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    // const newData = { description, option, packed: false, key: Date.now() };
    const newData = { description, option, packed: false, id: Date.now() };

    console.log(newData);
    // setItems((item) => items.push(newData));
    onAddItems(newData);
    setDescription("");
    setOption(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter your task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button type="submit">ADD</button>
    </form>
  );
}
