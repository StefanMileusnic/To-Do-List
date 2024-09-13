import React, { useState } from "react";

function UpdateObject() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function addCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function removeCar(i) {
    setCars((c) => c.filter((_, index) => index !== i));
  }

  function changeYear(e) {
    setCarYear(e.target.value);
  }

  function changeMake(e) {
    setCarMake(e.target.value);
  }

  function changeModel(e) {
    setCarModel(e.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      {cars.length > 0 ? (
        <ul>
          {cars.map((car, index) => (
            <li key={index} onClick={() => removeCar(index)}>
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>
      ) : (
        <p>No cars added yet.</p>
      )}

      <input type="number" value={carYear} onChange={changeYear} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={changeMake}
        placeholder="Enter car make..."
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={changeModel}
        placeholder="Enter car model..."
      />
      <br />
      <button onClick={addCar}>Add Car</button>
    </div>
  );
}

export default UpdateObject;
