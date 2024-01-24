import { useState } from "react";

export default function name(params) {
  // let name = params.name;
  let [name, setName] = useState(params.name);
  function handleClick() {
    setName("anonymous");
    console.log("Clicked here");
  }
  return (
    <div>
      i am under event play !!
      <button onClick={handleClick}> click me !!</button>
      <h1>Name : {name}</h1>
      <h1>Age : {params.age}</h1>
    </div>
  );
}
