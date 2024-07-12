import { useState } from "react";

function TEST() {

  const [state, setState] = useState('Arpit');

  return (
    <p>I am a Test Component : {state}</p>
  )
}

export default TEST;
// Function based component.