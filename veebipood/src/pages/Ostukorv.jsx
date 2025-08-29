import { useState } from "react"


function Ostukorv() {
  const [tooted, setTooted] = useState(["Coca-cola", "Fanta", "Sprite"]);
//Kuva tooted

  return (
    <div>
      <div>Hetkel on ostukorvis: {tooted.length} toodet</div>
      <button onClick={() => setTooted([])}>Tühjenda</button> <br /> <br />

      {tooted.map(toode => <div key={toode}>{toode}</div>)}

      <br />

      <div>Ostukorvi kogusumma on: xx €</div>

    </div>
  )
}

export default Ostukorv