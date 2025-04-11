import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("Filter by category")

  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const filterdItems = items.filter(item => (
    selectedCategory === "Filter by category" || item.category === selectedCategory
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select 
          name="filter"
          value={selectedCategory}
          onChange={handleChange}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterdItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
