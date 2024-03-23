import { useState } from "react";
import { Items } from "./Items";

export function PackingList({ items, onDeleteItems, onToggleItems, onClear }) {
  const [sortBy, setSortBy] = useState("input");
  console.log(sortBy);
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            // key={item.id}
            // quantity={item.quantity}
            // description={item.description}
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="description">Sort by description</option>
          <option value="input">Sort by input</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
}
