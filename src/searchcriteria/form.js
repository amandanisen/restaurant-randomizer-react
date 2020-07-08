import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

// How far are you willing to travel
// Type of food
// Budget

export default function Form() {
  const [travelDistance, setTravelDistance] = useState("");
  const [foodType, setFoodType] = useState("");
  const [budget, setBudget] = useState("");
  console.log(travelDistance);

  return (
    <form autoComplete="off">
      <TextField
        id="travelDistance"
        onChange={(e) => {
          setTravelDistance(e.target.value);
        }}
        label="How far would you travel"
      />
      <TextField id="foodType" label="What type of food would you like" />
      <TextField id="budget" label="What is your budget" />
    </form>
  );
}
