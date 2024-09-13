import React, { useState } from "react";

function UpdateArray() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function addFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    let result = newFood.charAt(0).toUpperCase() + newFood.slice(1);
    setFoods((f) => [...f, result]);
  }
  function removeFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h2>List of food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => removeFood(index)}>
            {" "}
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name..." />
      <button onClick={addFood}>Add Food</button>
    </div>
  );
}

export default UpdateArray;
