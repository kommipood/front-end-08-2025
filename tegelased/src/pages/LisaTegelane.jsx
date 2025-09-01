
import { useRef } from 'react';
import { useState } from 'react'

function LisaTegelane() {
    const [sonum, uuendaSonum] = useState("");
    const nimiRef = useRef;

    //Miks on siin const mitte function?
    const LisaUusTegelane = () => {
      if (nimiRef.current.value === "") {
        uuendaSonum("Tühja nimega ei saa sisestada!");
      } else {
        uuendaSonum("Tegelane lisatud");
      }
  }

  return (
    <div>
        <div>{sonum}</div>
        <label>Tegelase nimi</label><br></br>
        <input ref={nimiRef} type="text" /><br></br>
        <button onClick={LisaUusTegelane}>Lisa uus</button><br></br>
    </div>
  )
}

export default LisaTegelane