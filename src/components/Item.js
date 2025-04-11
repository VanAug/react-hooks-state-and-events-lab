import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false)

  const handleClick = () => {
    setAddToCart(prevState => !prevState)
  }

  const cart = addToCart ? "in-cart" : ""

  const cartColor = addToCart ? "remove" : "add"
  

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartColor} onClick={handleClick} >{addToCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
