import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

// Location
// How far are you willing to travel
// Type of food
// Budget

export default function Form() {
  const [travelDistance, setTravelDistance] = useState("");
  const [foodType, setFoodType] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <form autoComplete="off">
      {console.log(travelDistance)}
      <TextField
        id="travelDistance"
        onChange={() => {
          setTravelDistance();
        }}
        label="How far would you travel"
      />
      <TextField id="foodType" label="What type of food would you like" />
      <TextField id="budget" label="What is your budget" />
    </form>
  );
}
