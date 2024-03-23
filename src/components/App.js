import { useState } from "react";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import { Form } from "./Form";
import { Logo } from "./Logo";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleCLearItems() {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClear={handleCLearItems}
      />
      <Stats items={items} />
    </div>
  );
}
export default App;
