export function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🎁</em>
      </p>
    );

  const numberOfItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numberOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got every things ready to go!`
          : `
        🎁 You have ${numberOfItems} items on your list,and you already packed${" "}
      ${packedItems} (${percentage}) %`}
      </em>
    </footer>
  );
}
