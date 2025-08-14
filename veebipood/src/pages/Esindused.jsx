import { useState } from "react";

function Esindused() {
  const [linn, setLinn] = useState("tallinn");

  return (
    <div>
      {/* <div>Aktiivne linn on: {linn}</div> */}
      <button onClick={() => setLinn("tallinn")}>Tallinn (6)</button>
      <button onClick={() => setLinn("tartu")}>Tartu (2)</button>
      <button onClick={() => setLinn("narva")}>Narva (1)</button>
      <button onClick={() => setLinn("pärnu")}>Pärnu (1)</button>

      {linn === "tallinn" &&
      <>
      <div>Ülemiste</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div>
      </>}

      {linn === "tartu" && <div>Lõunakeskus</div>}
      {linn === "tartu" && <div>Raatuse</div>}

      {linn === "narva" && <div>Fama</div>}

      {linn === "pärnu" && <div>Port Artur 2</div>}


    </div>
  )
}

export default Esindused