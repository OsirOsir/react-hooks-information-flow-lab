import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter items based on selected category
  const itemsToDisplay = selectedCategory === "All"
    ? items
    : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
