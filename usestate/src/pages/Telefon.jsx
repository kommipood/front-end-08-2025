import React from 'react'
import { useState } from 'react'

function Telefon() {
    const [varv, uuendaVarv] = useState("Vali värv!");

  return (
    <div>
        <br></br>
        {varv === "Vali värv!" && <div>Telefoni värv on valimata!</div>}
        <div>Telefoni värvus: {varv}</div>
        <button onClick={() => uuendaVarv("must")}>Must</button>
        <button onClick={() => uuendaVarv("kuldne")}>Kuldne</button>
        <button onClick={() => uuendaVarv("sinine")}>Sinine</button>
        <button onClick={() => uuendaVarv("punane")}>Punane</button>
        <button onClick={() => uuendaVarv("lilla")}>Lilla</button>

        {varv === "must" && <div className="must-ring"></div>}
        {varv === "kuldne" && <div className="kuldne-ring"></div>}
        {varv === "sinine" && <div className="sinine-ring"></div>}
        {varv === "punane" && <div className="punane-ring"></div>}
        {varv === "lilla" && <div className="lilla-ring"></div>}
    </div>
  )
}

export default Telefon