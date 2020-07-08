import React, { useState } from "react";
import Form from "./form";

//this is a component
export default function Search() {
  return (
    <div>
      <h1>Hello :)</h1>
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
