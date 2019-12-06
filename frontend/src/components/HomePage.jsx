import CarCard from "./CarCard";
import React, { useState } from "react";
import ListCar from "./ListeCar";
import Historic from "./Historic";

function HomePage() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <CarCard />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "historic" : "ListCar"}
      </button>
      {toggle ? <ListCar /> : <Historic />}
    </div>
  );
}

export default HomePage;
