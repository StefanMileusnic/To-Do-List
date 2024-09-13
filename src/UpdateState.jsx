import React, { useState } from "react";

function UpdateState() {
  const [car, setCar] = useState({
    year: 1989,
    make: "Zastava",
    model: "Yugo",
  });

  function handleYearChange(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }
  function handleMakeChange(e) {
    setCar((c) => ({ ...c, make: e.target.value }));
  }
  function handleModelChange(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }

  return (
    <div>
      <h1>Car</h1>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}

export default UpdateState;
