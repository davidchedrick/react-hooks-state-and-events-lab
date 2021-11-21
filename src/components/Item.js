import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setInCart] = useState(false)

  function handleAddClick() {
    setInCart((isInCart) => !isInCart)
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={isInCart ? "remove" : "add"}
        onClick={handleAddClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
