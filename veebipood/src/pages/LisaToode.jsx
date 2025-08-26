import { useRef } from "react";
import { useState } from "react";

function LisaToode() {
  const [sonum, setSonum] = useState("Lisa uus toode!");
  const nimiRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      alert("Tühja nimega ei saa toodet lisada!");
      setSonum("Tühja nimega ei saa toodet lisada!");
    } else {
      alert("Uus toode lisatud: " + nimiRef.current.value);
      setSonum("Uus toode lisatud: " + nimiRef.current.value);
    }
    
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />


    </div>
  )
}

export default LisaToode