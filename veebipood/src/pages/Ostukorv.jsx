import { useState } from "react"
import ostukorvJSON from "../data/ostukorv.json"


function Ostukorv() {
  const [tooted, setTooted] = useState(ostukorvJSON);
//Kuva tooted

  function tyhjenda() {
    ostukorvJSON.splice(0);
    setTooted(ostukorvJSON.slice());
  }
  
  function kustuta(index) {
    ostukorvJSON.splice(index, 1);
    setTooted(ostukorvJSON.slice());
  }
  function arvutaKokku() {
    let summa = 0;
    tooted.forEach(toode => summa = summa + toode.hind);
    return summa;
  }

  return (
    <div>
      <div>Hetkel on ostukorvis: {tooted.length} toodet</div>
      <button onClick={tyhjenda}>Tühjenda</button> <br /> <br />

      {tooted.map((toode, index) => 
        <div key={index}>
          {toode.nimi}
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}

      <br />

      <div>Ostukorvi kogusumma on: {arvutaKokku()} €</div>

    </div>
  )
}

export default Ostukorv