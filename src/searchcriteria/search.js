import React, { useState } from "react";
import Button from "./button";

//this is a component
export default function Search() {
  const [state, setState] = useState("");

  return (
    <div>
      <h1>Hello :)</h1>
      {searchList()}
      {searchList()}
    </div>
  );
}

function searchList() {
  const searchArray = ["Lucas", "Test", "Amanda"];
  return (
    <ul>
      {searchArray.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
}
