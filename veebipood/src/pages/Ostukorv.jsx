import { useState } from "react"


function Ostukorv() {
  const [tooted, setTooted] = useState(["Coca-cola", "Fanta", "Sprite"]);
//Kuva tooted

  function kustuta(index) {
    tooted.splice(index, 1);
    setTooted(tooted.slice());
  }

  return (
    <div>
      <div>Hetkel on ostukorvis: {tooted.length} toodet</div>
      <button onClick={() => setTooted([])}>Tühjenda</button> <br /> <br />

      {tooted.map((toode, index) => 
        <div key={index}>
          {toode}
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}

      <br />

      <div>Ostukorvi kogusumma on: xx €</div>

    </div>
  )
}

export default Ostukorv