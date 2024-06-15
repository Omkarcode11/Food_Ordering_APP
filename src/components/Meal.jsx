import React from "react";
import useFetch from "../hooks/useFetch";
import MealItems from "./MealItems";
import Error from "./Error";

function Meal() {
  let { meals, loading, error } = useFetch("meals");

  if (error.status == true) {
    return <Error title={"Fail to fetch meals"} message={error.message} />;
  }
  return (
    <ul id='meals'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        meals?.map((ele) => (
          <MealItems
            key={ele.id}
            id={ele.id}
            description={ele.description}
            img={ele.image}
            name={ele.name}
            price={ele.price}
          />
        ))
      )}
    </ul>
  );
}

export default Meal;
